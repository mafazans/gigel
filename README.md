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
  ```

