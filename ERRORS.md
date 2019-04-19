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



