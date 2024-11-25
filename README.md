## **1. Introduction**

**Project Name**: A Simple CRUD App  
**Description**:  
A simple user management application that allows you to create, view, edit, and delete users. It uses **Express** for routing and **better-sqlite3** for a small SQLite database to manage user data.  

**Technologies Used**:  
- **Backend**: Express, pnpm  
- **Database**: better-sqlite3  

---

## **2. Prerequisites**

Before you begin, make sure you have the following tools installed:

- **pnpm** (version 8 or later)
- **Git**

---

## **3. Installation**

### **3.1. Clone the Repository**

Clone the repository to your local machine:

```bash
git clone https://github.com/Talen400/Simple_CRUD.git
cd Simple_CRUD
```

### **3.2. Install Dependencies**

Install the required dependencies using pnpm:

```bash
pnpm install
```

### **3.3. Start the Server**

Run the server with the following command:

```bash
pnpm run dev
```

Your application will be running locally at `http://localhost:3000`.

---

## **4. Application Structure**

Here’s the breakdown of the project directory structure:

```plaintext
src/
├── controllers/       # Contains endpoint logic
│   ├── create.js      # Logic to create a new user
│   ├── delete.js      # Logic to delete a user
│   ├── get.js         # Logic to retrieve user data
│   └── update.js      # Logic to update user information
│
├── routes/            # Defines API routes
│   ├── api/           # API routes for resources
│   │   ├── user/      # Routes for user CRUD operations
│   │   │   └── index.js  # User-related endpoints
│   │   └── index.js      # Main API routes
│   └── index.js          # Root routes
│
├── db/                # Database configuration
│   └── database.js     # Database connection setup
│
└── app.js             # Main application entry point
```

---

## **5. Dependencies**

### **5.1. Main Dependencies**

- **express**: Web framework for handling HTTP requests.
- **better-sqlite3**: SQLite database library.

### **5.2. Development Dependencies**

- **prettier**: Code formatter to ensure consistent code style.

---

## **6. File Descriptions**

### **6.1. `src/controllers/`**

Contains the logic for the CRUD operations:

- **create.js**: Logic for creating a new user in the database.
- **delete.js**: Logic for deleting a user by their ID.
- **get.js**: Logic for retrieving user data.
- **update.js**: Logic for updating a user's details.

### **6.2. `src/routes/`**

Defines the API routes that handle HTTP requests:

- **api/user/index.js**: User CRUD operation routes.
- **api/index.js**: Base API routes for other resources.
- **index.js**: Main entry for general route handling.

### **6.3. `src/db/database.js`**

Handles the database connection and setup using **better-sqlite3**.

### **6.4. `src/app.js`**

Main entry point for the application, where the server is initialized, database connection is established, and routes are loaded.

---

## **7. API Endpoints**

### **User Endpoints**

- **POST /api/user**  
  Creates a new user.  
  **Request body**:  
  ```json
  {
    "name": "Talen"
  }
  ```

- **GET /api/user/:id**  
  Retrieves a user by their ID.  
  **Response**:  
  ```json
  {
    "id": 1
  }
  ```

- **PUT /api/user/:id**  
  Updates an existing user.  
  **Request body**:  
  ```json
  {
    "id": 1,
    "name": "Talen Updated"
  }
  ```

- **DELETE /api/user/:id**  
  Deletes a user by their ID.  
  **Response**:  
  ```json
  {
    "id": 1
  }
  ```

---

## **8. Conclusion**

This simple CRUD application provides basic functionality to manage user data with Express and SQLite. It can be extended with additional features such as user authentication, validation, and more complex database operations.

--- 