# Blog API

This is a RESTful API for a simple blogging platform, built using Node.js, Express, MySQL, and JWT for authentication. The API allows users to perform CRUD operations (Create, Read, Update, Delete) on blog posts and includes token-based authentication for secure access.

## Features

- **User Registration and Login**
- **Create, Read, Update, and Delete Blog Posts**
- **Token-Based Authentication**

## Technologies Used

- **Node.js**
- **Express.js**
- **MySQL**
- **JWT (JSON Web Token)**
- **bcryptjs**

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MySQL server running

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/blog-api.git
   cd blog-api
    ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up the database:**
   ```bash
   CREATE DATABASE blog;
   USE blog;

   CREATE TABLE users (
     id INT AUTO_INCREMENT PRIMARY KEY,
     username VARCHAR(255) NOT NULL,
     password VARCHAR(255) NOT NULL
   );

   CREATE TABLE posts (
     id INT AUTO_INCREMENT PRIMARY KEY,
     title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
     user_id INT,
     FOREIGN KEY (user_id) REFERENCES users(id)
   );

   ```
4. **Run the server:**
   ```bash
   node app.js
   ```

## API Endpoints
### Authentication
- **Register a new user**
   - **URL: /api/register**
   - **Method: POST**
   - **Body:**
     ```bash
     {
     "username": "testuser",
     "password": "testpassword"
      }
      ```
![image](https://github.com/krishna7054/BLOG-API/assets/102844052/a66fbf89-b23b-4c61-bcdc-3b0da2d82c18)

- **Login and get a token**
   - **URL: /api/login**
   - **Method: POST**
   - **Body:**
     ```bash
     {
     "username": "testuser",
     "password": "testpassword"
      }
     ```
![image](https://github.com/krishna7054/BLOG-API/assets/102844052/a8d3d4c4-86e9-4911-8614-edfb7dc169dd)

## Blog Posts
- **Create a new blog post**
   - **URL: /api/posts**
   - **Method: POST**
   - **Headers:**
      - x-access-token: your_jwt_token
   - **Body:**
     ```bash
     {
     "title": "My First Post",
     "content": "This is the content of my first post."
      }
     ```
![Screenshot 2024-06-11 223426](https://github.com/krishna7054/BLOG-API/assets/102844052/8de50e77-8417-4089-b559-099e1fa5b3b2)

- **Retrieve a list of all blog posts**
   - **URL: /api/posts**
   - **Method: GET**
     
![Screenshot 2024-06-11 223458](https://github.com/krishna7054/BLOG-API/assets/102844052/71c236ac-655a-4a41-b815-5fa505109e17)

- **Retrieve a single blog post by its ID**
   - **URL: /api/posts/:id**
   - **Method: GET**
     
![Screenshot 2024-06-11 223528](https://github.com/krishna7054/BLOG-API/assets/102844052/6ed1e1c9-c5be-4623-983e-cb1ac39db8ea)

- **Update an existing blog post**
   - **URL: /api/posts/:id**
   - **Method: PUT**
   - **Headers:**
      - x-access-token: your_jwt_token
   - **Body:**
     ```bash
     {
     "title": "Updated Post Title",
     "content": "This is the updated content."
      }
     ```
     
![Screenshot 2024-06-11 223604](https://github.com/krishna7054/BLOG-API/assets/102844052/a2994029-419b-477c-9ee4-a2ccbb1b3e73)

**After update**

![Screenshot 2024-06-11 223628](https://github.com/krishna7054/BLOG-API/assets/102844052/10c881ec-c6bf-4456-911a-dc6e165c2235)

- **Delete a blog post**
   - **URL: /api/posts/:id**
   - **Method: DELETE**
   - **Headers:**
      - x-access-token: your_jwt_token

![Screenshot 2024-06-11 223656](https://github.com/krishna7054/BLOG-API/assets/102844052/00934716-89b4-4c25-ae32-8693c7674139)

**After Delete**

![Screenshot 2024-06-11 223730](https://github.com/krishna7054/BLOG-API/assets/102844052/f8524b5a-8ec4-4752-a48d-e0c04913c458)

