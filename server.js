const express = require('express');
const massive = require('massive');
const data = require('./data.json');
require('dotenv').config();
const {SERVER_PORT , CONNECTION_STRING} = process.env;

const app = express()

app.use(express.json())

app.listen(SERVER_PORT, () => {console.log("Server is now listening on " + SERVER_PORT)})

//! NOTE TO SELF: WORRY ABOUT THIS LATER !\\
// massive(CONNECTION_STRING).then(dbInstance => {
//   app.set("db" , dbInstance);
//   console.log("Massive Connected, DB established.")
// }).catch(err => console.log("DB Connection Failed! Error: " + err))

// +++++++ ENDPOINTS +++++++ \\

app.get('/api/items' , (req, res) => {
  res.status(200).send(data)
})

app.post('/api/add_item' , (req, res) => {
  req.body && data.push(req.body)
  res.status(200).send(data)
})
