import "./App.css";
import { TodoWrapper } from "./components/TodoWrapper";
import { TodoCompleted } from "./components/TodoCompleted";
import Login from "./components/Login";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/header";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Login" />} />
      <Route path="/Login" element={<Login />} />
      <Route
        path="/todo"
        element={
          <div className="App">
            <Header />
            <TodoWrapper />
            <TodoCompleted />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
