import "./App.css";
import { TodoWrapper } from "./components/TodoWrapper";
import { TodoCompleted } from "./components/TodoCompleted";
import Login from "./components/Login";
import React from "react";
import { Toaster } from "react-hot-toast"
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/header";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/todo"
          element={
            <TodoView />
          }
        />
      </Routes>
      <Toaster position="top-right" />
    </>
  );
}

const TodoView = () => {
  if (!localStorage.getItem("user")) {
    return <Navigate to="/Login" />
  }
  return (
    <>
      <div className="App">
        <Header />
        <TodoWrapper />
        <TodoCompleted />
      </div>
    </>
  )
}

export default App;
