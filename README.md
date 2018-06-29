# GIGEL.ID API Documentation

**This is the link to the postman collection**
`https://www.getpostman.com/collections/f6868e0152e2387b8fe6`


**Register**
----
  Register new user using unique emailadress and unique phone number.

* **URL**

  /api/user/register

* **Method:**

  `POST`
  
*  **Data Params**

   **Required:**
 
   `email=[String]`
   `password=[String]`
   `password-confirm=[String]`
   `phone=[String]`
   `name=[String]`

* **Success Response:**

  * **Code:** 201 CREATED <br />
    **Content:** `{ "status": true, "message": "Register Success!" }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/users/1",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```
