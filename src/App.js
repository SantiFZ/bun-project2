import "./App.css";
import { TodoWrapper } from "./components/TodoWrapper";
import { TodoCompleted } from "./components/TodoCompleted";
import Login from "./components/Login";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast"
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import axios from "axios";

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
  const [todos, setTodos] = useState([]);
  const getUser = () => {
    const userInLocalStorage = localStorage.getItem("user");
    if (userInLocalStorage) {
      return JSON.parse(userInLocalStorage);
    }
    return null
  }
  useEffect(() => {
    getAllTodos();
  }, [])

  const getAllTodos = async () => {
    const user = getUser();
    if (!user) return;
    const response = await axios.get("/tasks/", {
      params: {
        username: user.username,
      }
    })
    if (response.status === 200) {
      setTodos(response.data);
    }
  }
  if (!localStorage.getItem("user")) {
    return <Navigate to="/Login" />
  }
  return (
    <>
      <div className="App">
        <Header />
        <TodoWrapper todos={todos} setTodos={setTodos} />
        <TodoCompleted todos={todos} setTodos={setTodos} />
      </div>
    </>
  )
}

export default App;
