# GIGEL.ID API Documentation

**This is the link to the postman collection**
`https://www.getpostman.com/collections/f6868e0152e2387b8fe6`


**Register**
----
  Register new user using unique email adress and unique phone number.

* **URL**

  /api/user/register

* **Method:**

  `POST`
  
*  **Data Params**

   **Required:**
 
   `email=[String]` <br />
   `password=[String]` <br />
   `password-confirm=[String]` <br />
   `phone=[String]` <br />
   `name=[String]` <br />

* **Success Response:**

  * **Code:** 201 Created <br />
    **Content:** `{ "status": true, "message": "Register Success!" }`
 
* **Error Response:**

  * **Code:** 409 Conflict<br />
    **Content:** `{ "status": false, "message": "Mail exists" }`

  OR

  * **Code:** 422 Unprocessable Entity <br />
    **Content:** `{ "status": false, "message": "Please enter your number"" }`
    

**Login**
----
  Logging in the registered user using email and password.

* **URL**

  /api/user/login

* **Method:**

  `POST`
  
*  **Data Params**

   **Required:**
 
   `email=[String]` <br />
   `password=[String]` <br />

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** `{ "status": true, "message": "Auth Success!", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFyaWYubWFmYXphbjJAZ21haWwuY29tIiwiaWQiOiI1YjM1YTgwNDNjMDQ0ZTE4YzUzNWRiZDIiLCJpYXQiOjE1MzAyNDMwODgsImV4cCI6MTUzMDI0NjY4OH0.xYTrPdKCsWfWN-1eAHiOR5reCbhK6SaS4RvVrkAJaL8" }`
 
* **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:** `{ "status": false, "message": "Auth Failed" }`
    
    
**Edit Profile**
----
  Edit user profile of the authenticated user.

* **URL**

  /api/user/editprofile

* **Method:**

  `POST`
  
*  **Data Params**

   **Required:**
 
   `email=[String]` <br />
   `password=[String]` <br />

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** `{ "status": true, "message": "Auth Success!"}`
 
* **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:** `{ "status": false, "message": "Auth Failed" }`



