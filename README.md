# Breaking Node

## Setup

1. Clone the repo down
2. Run `npm i'
3. Run `nodemon` (You should see `Server is now listening on 3000` in your console)
4. Open Postman
5. Import the breaking_node.json file into postman. All of these tests will pass in a fresh server. You will NOT be running these as a collection.
6. OPTIONAL: Drag tracker.html into your browser to track your errors. (If using the tracker, note that refreshing the window will cause you to lose your progress.)

## Objectives

Making small changes to the server, see how many different errors and bugs you can cause, and how many different ways you can cause errors. Keep track of the number and types of errors you can cause. 

NOTES:

- Return to clean server after every test.
- Quality over quantity. Getting different errors and bugs is more important than just getting a lot of the same error.
- Have a Hypothesis. Before you run a postman test or restart your server, make a mental guess as to what you think will happen. Run the test, and see if you were right.
- You may often get a console error and a Postman error at the same time. Feel free to count both.
- Get creative, and have fun!

Review the errors list below to get started.

# ERRORS 

HUNG SERVER

*A most basic error, in which instead of returning any sort of error at all, the server "hangs" and postman gets stuck in 'Loading...'*

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




