# Blog API Application

## Overview
This project is a Node.js application that provides APIs for managing blog posts and comments. It utilizes the third-party REST API at [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com) and implements authentication using OAuth 2.0 and JWT.

## Features
- Create, read, and manage blog posts.
- Create and manage comments on blog posts.
- OAuth 2.0 authentication for secure access.
- JWT for session management.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd blog-api-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the application, run:
```
npm start
```
The application will be running on `http://localhost:4200`.

### API Endpoints
- **Posts**
  - `GET /posts`: Retrieve all posts.
  - `GET /posts/user/:userId`: Retrieve posts by a specific user.
  - `POST /posts`: Create a new post.

- **Comments**
  - `GET /comments/post/:postId`: Retrieve comments for a specific post.
  - `POST /comments`: Create a new comment.

### Authentication
This application uses OAuth 2.0 for authentication. Ensure you have the necessary credentials to access protected routes.

### License
This project is licensed under the MIT License.
