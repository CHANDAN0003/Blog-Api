# Blogging Platform API

This project is a RESTful API for a simple blogging platform built with Express.js and Firebase Firestore. The API allows users to perform CRUD operations (Create, Read, Update, Delete) on blog posts and includes token-based authentication.

## Features

- User registration and authentication
- CRUD operations on blog posts
- Token-based authentication
- Input data validation

## Technologies Used

- Backend Framework: Express.js
- Database: Firebase Firestore
- Authentication: JSON Web Tokens (JWT)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/localhost/blogging-platform-api.git
    cd blogging-platform-api
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up Firebase:
    - Go to the [Firebase Console](https://console.firebase.google.com/).
    - Create a new project or select an existing project.
    - Navigate to Project Settings > Service Accounts.
    - Generate a new private key and download the `firebaseServiceAccountKey.json` file.
    - Place the `firebaseServiceAccountKey.json` file in the root of your project.

4. Set up environment variables:
    - Create a `.env` file in the root of your project.
    - Add your JWT secret:
      ```dotenv
      JWT_SECRET=your_jwt_secret
      ```

5. Run the server:
    ```bash
    npm start
    ```

## API Endpoints

### Authentication

#### Register a User

- URL: `/api/auth/register`
- Method: `POST`
- Headers: `Content-Type: application/json`
- Body:
    ```json
    {
      "username": "testuser",
      "password": "password123"
    }
    ```
- Response:
    ```json
    {
      "message": "User registered successfully"
    }
    ```

#### Login

- URL: `/api/auth/login`
- Method: `POST`
- Headers: `Content-Type: application/json`
- Body:
    ```json
    {
      "username": "testuser",
      "password": "password123"
    }
    ```
- Response:
    ```json
    {
      "token": "your_jwt_token"
    }
    ```

### Blog Posts

#### Create a Blog Post

- URL: `/api/posts`
- Method: `POST`
- Headers:
    - `Content-Type: application/json`
    - `Authorization: Bearer your_jwt_token`
- Body:
    ```json
    {
      "title": "My First Post",
      "content": "This is the content of my first post."
    }
    ```
- Response:
    ```json
    {
      "id": "generated_post_id",
      "title": "My First Post",
      "content": "This is the content of my first post."
    }
    ```

#### Retrieve All Blog Posts

- URL: `/api/posts`
- Method: `GET`
- Headers:
    - `Content-Type: application/json`
- Response:
    ```json
    [
      {
        "id": "generated_post_id",
        "title": "My First Post",
        "content": "This is the content of my first post."
      }
    ]
    ```

#### Retrieve a Single Blog Post by ID

- URL: `/api/posts/:id`
- Method: `GET`
- Headers:
    - `Content-Type: application/json`
- Response:
    ```json
    {
      "id": "generated_post_id",
      "title": "My First Post",
      "content": "This is the content of my first post."
    }
    ```

#### Update a Blog Post

- URL: `/api/posts/:id`
- Method: `PUT`
- Headers:
    - `Content-Type: application/json`
    - `Authorization: Bearer your_jwt_token`
- Body:
    ```json
    {
      "title": "Updated Post Title",
      "content": "Updated content of the post."
    }
    ```
- Response:
    ```json
    {
      "id": "generated_post_id",
      "title": "Updated Post Title",
      "content": "Updated content of the post."
    }
    ```

#### Delete a Blog Post

- URL: `/api/posts/:id`
- Method: `DELETE`
- Headers:
    - `Content-Type: application/json`
    - `Authorization: Bearer your_jwt_token`
- Response:
    - Status code `204` with no content.

# Blog API

## Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and receive a token
- `POST /api/posts` - Create a new blog post (requires token)
- `GET /api/posts` - Retrieve a list of all blog posts
- `GET /api/posts/:id` - Retrieve a single blog post by ID
- `PUT /api/posts/:id` - Update an existing blog post (requires token)
- `DELETE /


