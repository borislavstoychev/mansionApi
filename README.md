# mansionApi
REST API

## Deployed at [heroku](https://mansion-api.herokuapp.com/users)

  ### Endpoints:
    - /register {POST}- validate and insert the user details in a database
    - /users {GET} - Get/List all users 
    -/users/username {GET} - checks if user already exist needed to validate field on frontend 

## Requirements
<h3>Backend REST API</h3>


Using Node.js (or an equivalent server architecture) please build a REST API which will save the registration user details in DB.




1. Exposed one endpoint 	- /register which will handle the Frontend requests: \
 	
    1. The server will validate if a 		user with the same username already exists and send response saying 		“Duplicate Username, Another user has already selected this 		username”. \
 		
    2. The server will insert the 		user details in a database of your choice. \
 	

<h3>Optional requirements for extra points</h3>




1. Get/List all usernames in a 	separate screen with the help of a new endpoint - /users \

