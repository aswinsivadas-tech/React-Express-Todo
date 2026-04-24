
# MY_TODOs 📝✨

A beautiful, responsive, full-stack Todo application built with the **MERN stack** (MongoDB, Express, React, Node.js). It features a modern **Glassmorphism** design powered by Tailwind CSS v4 and implements industry-standard security for user authentication and data privacy.

## 🚀 Features

* **Secure Authentication:** Real user registration and login with passwords encrypted via `bcryptjs`.
* **Data Privacy & Authorization:** Strict data isolation. Users can only view, edit, and delete their own personal tasks.
* **Full CRUD Operations:** Create, read, update, and delete tasks instantly, with data synced to a MongoDB database.
* **Modern UI:** Stunning Glassmorphism aesthetics with dynamic gradients, frosted glass effects, and smooth hover animations.
* **RESTful API:** Clean, layered MVC backend architecture interacting seamlessly with the frontend via `axios`.
* **Single-Command Startup:** Launch both the React frontend and Express backend simultaneously using `concurrently`.

## 💻 Tech Stack

**Frontend (`/todo-frontend`)**
* React (Vite)
* Tailwind CSS v4
* React Router DOM
* Axios

**Backend (`/todo-backend`)**
* Node.js & Express.js (ES6 Modules)
* MongoDB & Mongoose
* Bcrypt.js (Password Hashing)
* Dotenv

## 📁 Project Structure

```text
react-express-todo/
├── package.json          # Root package (contains 'dev' concurrent script)
├── todo-backend/         # Express API Server
│   ├── .env              # Environment variables (MongoDB URI, Port)
│   ├── package.json      
│   ├── server.js         # Backend entry point
│   └── src/
│       ├── app.js        # Express & CORS configuration
│       ├── config/
│       │   └── db.js     # MongoDB connection setup
│       ├── controllers/  # Route logic (authController, todoController)
│       ├── models/       # Mongoose schemas (User, Todo)
│       └── routes/       # API endpoints (/api/auth, /api/todos)
└── todo-frontend/        # React Application
    ├── package.json
    ├── vite.config.js    
    └── src/
        ├── App.jsx       # React Router setup
        ├── Auth.jsx      # Login/Signup Glassmorphism UI
        ├── TodoApp.jsx   # Main application dashboard
        └── TodoItem.jsx  # Individual task component
```

## 🛠️ Installation & Setup

**1. Clone the repository and install root dependencies:**
```bash
git clone <your-repo-url>
cd react-express-todo
npm install
```

**2. Setup the Backend:**
```bash
cd todo-backend
npm install
```
Create a `.env` file in the `todo-backend` directory and add your MongoDB connection string:
```env
MONGO_URI=mongodb://127.0.0.1:27017
DB_NAME=taskmaster
PORT=5000
```

**3. Setup the Frontend:**
```bash
cd ../todo-frontend
npm install
```

## 🏃‍♂️ Running the Application

Navigate back to the **root** folder of the project (`react-express-todo`) and run the concurrent dev script:

```bash
npm run dev
```

This will automatically boot up:
* **Backend API** connected to MongoDB on `http://localhost:5000`
* **Frontend UI** on `http://localhost:5173`

Open your browser and navigate to **[http://localhost:5173](http://localhost:5173)** to create an account and start organizing your universe!
```