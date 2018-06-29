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
  
*  **Headers:**
Content-Type:application/json
  
*  **Data Params**

   **Required:**
 
   `email=[String]` <br />
   `password=[String]` <br />
   `password-confirm=[String]` <br />
   `phone=[String]` <br />
   `name=[String]` <br />
   
* **Body**
`{
	  "name": "fafa",
	  "phone": "085899992418",
	  "password": "fafa123456",
	  "password-confirm": "fafa123456",
	  "email": "mafazans@gmail.com"
  }
 `

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
  
*  **Headers:**
Content-Type:application/json
  
*  **Data Params**

   **Required:**
 
   `email=[String]` <br />
   `password=[String]` <br />
   
* **Body**
`{
	  "password": "fafa123456",
	  "email": "mafazans@gmail.com"
  }
`

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
  
*  **Headers:**
   `authorization=Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFyaWYubWFmYXphbjJAZ21haWwuY29tIiwiaWQiOiI1YjM1YTgwNDNjMDQ0ZTE4YzUzNWRiZDIiLCJpYXQiOjE1MzAyNDMzNjEsImV4cCI6MTUzMDI0Njk2MX0.I8LmdCbosLLvoUxblmMmySUo9w1wEsS5nLJwW5ueuSU`
   `Content-Type:multipart/form-data`
   
*  **Data Params**
   
   **Required:**
 
   `name=[String]` <br />
   `phone=[String]` <br />
   
   **Optional:**
   `about=[String]` <br />
   `address=[String]` <br />
   `photo=[File]` <br />

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** `{ "status": true, "message": "Profile Updated"}`
 
* **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:** `{ "status": false, "message": "Auth Failed" }`
    
    OR

  * **Code:** 422 Unprocessable Entity <br />
    **Content:** `{ "status": false, "message": "Please enter your number"" }`


**Reset Password**
----
  Change password of the authenticated user.

* **URL**

  /api/user/resetpassword

* **Method:**

  `POST`
  
*  **Headers:**
  authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFyaWYubWFmYXphbjJAZ21haWwuY29tIiwiaWQiOiI1YjM1YTgwNDNjMDQ0ZTE4YzUzNWRiZDIiLCJpYXQiOjE1MzAyNDMzNjEsImV4cCI6MTUzMDI0Njk2MX0.I8LmdCbosLLvoUxblmMmySUo9w1wEsS5nLJwW5ueuSU
Content-Type:application/json
  
*  **Data Params**

   **Required:**
 
   `password=[String]` <br />
   `password-confirm=[String]` <br />

* **Body**
`{
	  "password": "fafa123456",
	  "password-confirm": "fafa123456"
  }
`

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** `{ "status": true, "message": "Password updated" }`
 
* **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:** `{ "status": false, "message": "Auth Failed" }`
  
  OR
  
  * **Code:** 422 Unprocessable Entity <br />
    **Content:** `{ "status": false, "message": ["The password confirm did not match!"] }`
