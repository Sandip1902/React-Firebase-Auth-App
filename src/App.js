import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Router>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 5000,
          style: {
            fontSize: "1.25rem",
            padding: "20px",
            borderRadius: "10px",
          },
        }}
      />
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
