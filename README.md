# Posta

## Overview
[Posta](https://posta-kmzg.onrender.com/) is a platform where users can share and discover recipes. This project provides users with quality recipes that can be used to cook up a delicious meal. The main features include User Authentication, Recipe Management and Responsive Design.

## Features
- User Authentication:
    - User registration and login
    - Password encryption.
- Recipe Management:
    - Create, read, update, and delete recipes
    - Add ingredients, instructions, and categories to recipes
- Responsive Design
    - The app works on various devices

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Requirement 1: React
- Requirement 2: Node.js >= 14.x
- Requirement 3: Mongodb

## Installation
To install this project, follow these steps:

1. Clone the repository
    ```bash
    git clone https://github.com/elizase405/Posta.git
    ```
2. Navigate to the project directory
    ```bash
    cd Posta
    ```
3. Install dependencies
    ```bash
    npm install
    ```
4. Set up environment variables
    ```bash
    touch .env
    ```
    Then, include your configuration settings into the .env file.

## Usage
To use this project, follow these steps:

1. Start the server
    ```bash
    npm start
    ```
2. Open your web browser and navigate to `http://localhost:${process.env.PORT}`

## Running Tests
To run tests, use the following command:
```bash
npm test
```

## Contributing
To contribute to this project, please follow these steps:
1. Fork the repository
2. Create a new branch
    ```bash
    git checkout -b feature-branch
3. Make your changes and commit them:
    ```bash
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```bash
    git push origin feature-branch
    ```
5. Submit a pull request.

## API Documentation

### Base URL
- The base URL for the authentication API endpoints is: https://posta-qwxv.onrender.com/api/auth
- The base URL for the recipes API endpoints is: https://posta-qwxv.onrender.com/api/recipes


### Endpoints

#### 1. User Registration

**Endpoint:** `/api/auth/signup`  
**Method:** `POST`  
**Description:** Registers a new user.  
**Request Body:**
```json
{
  "username": "string",
  "email": "string",
  "name": "string",
  "password": "string"
}
```
Response:
- 201 Created
```json
{
  "message": "User created successfully",
  "user": {
    "id": "string",
    "username": "string",
    "email": "string"
  }
}
```
- 400 Bad Request
```json
{
  "error": "User already exists"
}
```
- 500 Server error
```json
{
  "error": "Server error
}
``` 

#### 2. User Login

**Endpoint:** `/api/auth/login`  
**Method:** `POST`  
**Description:** Authenticates a user and returns a token.  
**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```
Response:
- 200 OK
```json
{
  "token": "jwt_token"
}

```
- 401 Unauthorized
```json
{
  "error": "Invalid details"
}
```
```
- 500 Server error
```json
{
  "error": "Server error
}
``` 

####  3. Get recipes

**Endpoint:** `/api/auth/recipes`  
**Method:** `GET`  
**Description:** Get all available recipes.  
**Request Body:**
```json
{
  "title": "string",
  "description": "string",
  "ingredients": "string",
  "instructions": "string",
  "author": "string"
}
```
Response:
- 200 OK
```json
{
  "title": "string",
  "description": "string",
  "ingredients": "string",
  "instructions": "string",
  "author": "string"
}
```
- 500 Server Error
```json
{
  "message": err.message
}
```  

#### 4. Get a recipe

**Endpoint:** `/api/auth/recipes/:id`  
**Method:** `POST`  
**Description:** Gets a recipe.  
**Request Body:**
```json
{
  "title": "string",
  "description": "string",
  "ingredients": "string",
  "instructions": "string",
  "author": "string"
}
```
Response:
- 200 OK
```json
{
  "title": "string",
  "description": "string",
  "ingredients": "string",
  "instructions": "string",
  "author": "string"
}

```
- 404 Not Found
```json
{
  "message": "Recipe not found"
}
```
```
- 500 Server error
```json
{
  "error": "Server error
}
``` 

#### 5. Create Recipe

**Endpoint:** `/api/auth/recipes`  
**Method:** `POST`  
**Description:** Create a new recipe.  
**Request Body:**
```json
{
  "title": "string",
  "description": "string",
  "ingredients": "string",
  "instructions": "string",
  "author": "string"
}
```
Response:
- 201 Created
```json
{
  "title": "string",
  "description": "string",
  "ingredients": "string",
  "instructions": "string",
  "author": "string"
}
```
- 500 Server error
```json
{
  "error": "Server error
}
``` 

#### 6. Delete Recipe

**Endpoint:** `/api/auth/recipes/:id`  
**Method:** `POST`  
**Description:** Deletes a recipe associated to the logged in user
**Request Body:**
```json
{
  "title": "string",
  "description": "string",
  "ingredients": "string",
  "instructions": "string",
  "author": "string"
}
```
Response:
- 200 OK
```json
{
  "message": "Recipe deleted successfully"
}

```
- 404 Not Found
```json
{
  "message": "Recipe not found"
}
```
```
- 500 Server error
```json
{
  "error": "Server error
}
``` 


