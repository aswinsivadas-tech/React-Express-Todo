import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./Auth";
import TodoApp from "./TodoApp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Make the login page the default route */}
        <Route path="/" element={<Auth />} />

        {/* The actual todo application */}
        <Route path="/app" element={<TodoApp />} />

        {/* Catch-all route to redirect unknown URLs back to login */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
