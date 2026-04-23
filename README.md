# Task Master 📝✨

A beautiful, responsive, full-stack Todo application built with React, Node.js, and Express, featuring a modern **Glassmorphism** design powered by Tailwind CSS v4.

## 🚀 Features

* **Full CRUD Operations:** Create, read, update, and delete tasks instantly.
* **User Tracking:** Keeps track of who added or is currently editing a task.
* **Modern UI:** Stunning Glassmorphism aesthetics with dynamic gradients, frosted glass effects, and smooth hover animations.
* **Single-Command Startup:** Launch both the React frontend and Express backend simultaneously using `concurrently`.
* **Secure:** Configured with specific CORS policies to ensure secure frontend-to-backend communication.

## 💻 Tech Stack

**Frontend:**
* React
* Vite
* Tailwind CSS v4

**Backend:**
* Node.js
* Express.js
* In-memory data store (Ready for MongoDB integration)

## 📁 Project Structure

```text
task-master/
├── package.json          # Root package.json (contains the 'dev' concurrent script)
├── todo-backend/         # Express API Server
│   ├── package.json
│   └── server.js         # Backend logic, CORS, and API routes
└── todo-frontend/        # React Application
    ├── package.json
    ├── vite.config.js    # Vite & Tailwind v4 configuration
    ├── index.html
    └── src/
        ├── index.css     # Tailwind imports
        ├── main.jsx      # React entry point
        ├── App.jsx       # Main application state and Glassmorphism UI
        └── TodoItem.jsx  # Individual task component with edit/view modes