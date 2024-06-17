# Todo App Backend

## Description
This is a backend application for a Todo app, built with Node.js, Express, and MongoDB. It features user authentication and allows users to create, update, delete, and view their todo lists. The app also supports searching todos, pagination, and tagging todos as favorites.

## Features
- User authentication (signup and login)
- CRUD operations for todos
- Search functionality for todos
- Pagination support
- Tagging todos as favorites

## Technologies Used
- Node.js
- Express
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- bcryptjs

## Installation

### Prerequisites
- Node.js installed
- MongoDB installed and running

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/officialruchit/Ruchit_nodejs.git
2. Navigate into the project directory:
   ```
   cd Ruchit_nodejs
3. Install the dependencies:
   ```
   npm install
4. Create a config/keys.js file with your secret key for JWT:
   ```
   module.exports = {
    secretOrKey: "your_secret_key"
   };
5. Start the application:
   ```
   node app.js
- Your server should now be running at http://localhost:3333.

# API Endpoints

## Auth
- Signup
- URL: POST http://localhost:3333/api/auth/signup
- Request Body:
   ```
   {
    "username": "testuser",
    "password": "password123"
   }
- login 
- URL: POST http://localhost:3333/api/auth/login
- Request Body:
   ```
   {
    "username": "testuser",
    "password": "password123"
   }
## Todos
- Create Todo
- URL: POST http://localhost:3333/api/todos
- Headers:
- Authorization: Bearer your_jwt_token
- Request Body:
   ```
   {
    "title": "Sample Todo",
    "description": "This is a sample todo",
    "isFavorite": false
   }
- Response:
  ```
  {
    "_id": "todo_id",
    "user": "user_id",
    "title": "Sample Todo",
    "description": "This is a sample todo",
    "isFavorite": false,
    "createdAt": "2024-06-17T11:49:45.979Z"
   }
- Get All Todos
- URL: GET http://localhost:3333/api/todos
- Headers:
- Authorization: Bearer your_jwt_token
- Response:
  ```
  {
    "_id": "todo_id",
    "user": "user_id",
    "title": "Sample Todo",
    "description": "This is a sample todo",
    "isFavorite": false,
    "createdAt": "2024-06-17T11:49:45.979Z"
   }
   
- Get Todo by ID
- URL: GET http://localhost:3333/api/todos/:id
- Headers:
- Authorization: Bearer your_jwt_token
- Response:
- ```
  {
    "_id": "todo_id",
    "user": "user_id",
    "title": "Sample Todo",
    "description": "This is a sample todo",
    "isFavorite": false,
    "createdAt": "2024-06-17T11:49:45.979Z"
   }
- Update Todo
- URL: PUT http://localhost:3333/api/todos/:id
- Headers:
- Authorization: Bearer your_jwt_token
- Request Body:
  ```
  {
    "title": "Updated Todo",
    "description": "This is an updated todo",
    "isFavorite": true
  }
- Response:
  ```
  {
    "_id": "todo_id",
    "user": "user_id",
    "title": "Updated Todo",
    "description": "This is an updated todo",
    "isFavorite": true,
    "createdAt": "2024-06-17T11:49:45.979Z"
  }
  
- Delete Todo
- URL: DELETE http://localhost:3333/api/todos/:id
- Headers:
- Authorization: Bearer your_jwt_token
-  Response:
   ```
   {
   Todo Delete
   }
## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributions
Contributions are welcome! Please create an issue or submit a pull request.

## Contact
For any questions or support, please contact [official.ruchit@gmail.com](mailto:official.ruchit@gmail.com).
   
   