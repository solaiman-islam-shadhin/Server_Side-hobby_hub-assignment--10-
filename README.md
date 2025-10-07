# Hobby Hub - Server Side

This is the server-side application for the Hobby Hub project (Assignment 10). It is a RESTful API built with Node.js and Express, using MongoDB as its database to manage user and group data.

## ✨ Features

- **User Management**: Create and retrieve user profiles.
- **Group Management**: Full CRUD (Create, Read, Update, Delete) functionality for groups.
- **CORS Enabled**: Allows cross-origin requests from a client-side application.
- **Secure Configuration**: Uses environment variables for sensitive data like database credentials.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (included with Node.js)
- A MongoDB database instance (you can use a local installation or a cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Installation

1.  **Clone the repository** to your local machine.

2.  **Navigate to the project directory**:
    ```sh
    cd assignment_10_Server_Side
    ```

3.  **Install dependencies**:
    ```sh
    npm install
    ```

### Environment Configuration

Create a `.env` file in the root of the project directory. This file will store your environment variables.

```sh
touch .env
```

Add the following configuration to your `.env` file, replacing the placeholder values with your actual credentials:

```env
PORT=5000
DB_USER=your_mongodb_username
DB_PASSWORD=your_mongodb_password
```

### Running the Server

To start the server, run the following command:

```sh
node index.js
```

For a better development experience, it is recommended to use `nodemon`, which automatically restarts the server when file changes are detected.

```sh
# Install nodemon globally (if you haven't already)
npm install -g nodemon

# Start the server with nodemon
nodemon index.js
```

The server will be running on `http://localhost:5000` (or the port you specified in your `.env` file).

## 🔌 API Endpoints

The following endpoints are available:

### Group Endpoints

| Method | Endpoint              | Description                               |
| :----- | :-------------------- | :---------------------------------------- |
| `GET`  | `/groups`             | Retrieves a list of all groups.           |
| `GET`  | `/group-details/:id`  | Retrieves a single group by its ID.       |
| `GET`  | `/my-groups/:email`   | Retrieves all groups created by a user.   |
| `POST` | `/createGroup`        | Creates a new group. (Requires JSON body) |
| `PUT`  | `/group-details/:id`  | Updates an existing group by its ID.      |
| `DELETE`| `/group/:id`          | Deletes a group by its ID.                |

### User Endpoints

| Method | Endpoint      | Description                               |
| :----- | :------------ | :---------------------------------------- |
| `GET`  | `/users/:email` | Retrieves a user's information by email.  |
| `POST` | `/users`      | Creates a new user. (Requires JSON body)  |

## 🛠️ Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for data storage.
- **mongodb (Node.js Driver)**: The official MongoDB driver for Node.js.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing.
- **dotenv**: Module for loading environment variables from a `.env` file.