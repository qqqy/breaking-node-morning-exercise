# Breaking Node

## Setup

1. Clone the repo down
2. Run `npm i'
3. Run `nodemon` (You should see `Server is now listening on 3000` in your console)
4. Open Postman
5. Import the breaking_node.json file into postman. You will NOT be running these as a collection, though you can if you like.
6. OPTIONAL: Drag tracker.html into your browser to track your errors. (If using the tracker, note that refreshing the window will cause you to lose your progress.)

## Objectives

Making small changes to the server code, see how many different errors and bugs you can cause, and how many different ways you can cause errors. Keep track of the number and types of errors you can cause. 

NOTES:

- Return to clean server after every test. You can use `git reset --hard` to discard all your changes.
- Do not change the postman tests. Only change the server code.
- Count every error, but try to get as many different bugs and errors as possible.
- Try to predict what's going to happen before you run a test. This will help you remember the different errors.
- You may often get a console error and a Postman error at the same time. Feel free to count both.
- A bug is when you don't get an error, but the outcome is incorrect. A few are listed below. Feel free to find others!
- Get creative, and have fun!

Review the errors list below to get started.

# ERRORS 

HUNG SERVER

*A most basic error, in which instead of returning any sort of error at all, the server "hangs" and postman gets stuck in `Loading...`*

---

FAILURE TO RUN

*Another basic one; upon running nodemon, instead of getting the `Server is now listening on port 3000` console.log, it should go straight to `[nodemon] clean exit - waiting for changes before restart`*

---

LOCATION: Postman

STATUS: `404 Not Found`

SCRIPT:


        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <title>Error</title>
            </head>
            <body>
                <pre>Cannot GET /api/items</pre>
            </body>
        </html>

---

LOCATION: Postman

STATUS: 500 Internal Server Error

---

LOCATION: Console

SCRIPT:

    Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client

---

LOCATION: Console

SCRIPT:

    Error: Route.get() requires a callback function but got a [object Object]

NOTE: *It doesn't necessarily have to be Route.get(), and it doesn't necessarily have to be [object Object].*

---

LOCATION: Console

SCRIPT: 

    TypeError: res.send is not a function

NOTE: *It may also be `res.status` or `res.sendStatus`*

---

LOCATION: Console

SCRIPT: 

    TypeError: Cannot read property 'name' of undefined

NOTE: *`'name'` may also be `'id'` or `'price'`*

---

LOCATION: Console

SCRIPT:

    Error: Cannot find module 'dotenv'

NOTE: *`dotenv` can also be `express`*

---

LOCATION: Console

SCRIPT: 

    Server is listening on undefined

---

## Bugs

DELETE always removes the last item

DELETE always removes the first item

DELETE removes everything

POST doesn't add the new item

POST replaces all of the other items with the new item

PUT returns just the updated price

PUT doesn't update the price

GET (all) brings back an empty array

GET (query) returns the wrong object