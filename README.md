# TodoList Project

A simple backend API for managing tasks and users, built with Node.js and Express.

## Features

- User registration and authentication
- CRUD operations for tasks
- JWT-based authentication middleware
- Swagger API documentation

## Project Structure

```
config/         # Database and Swagger configuration
controllers/    # Route handlers for tasks and users
middleware/     # Authentication middleware
models/         # Mongoose models for tasks and users
routes/         # Express route definitions
services/       # Business logic (if any)
swaggerDocs/    # Swagger documentation files
server.js       # Entry point
package.json    # Project metadata and dependencies
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <your-repo-url>
   cd Todolist_project
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Set up environment variables (e.g., MongoDB URI, JWT secret).
4. Start the server:
   ```
   npm run dev
   ```

### API Documentation

Swagger UI is available at `/api-docs` when the server is running.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.
