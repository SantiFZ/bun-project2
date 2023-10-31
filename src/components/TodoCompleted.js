import { faCheck, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

export const TodoCompleted = ({ todos, setTodos }) => {
  const deleteTodo = async (id) => {
    console.log("Eliminado todo completed", id)
    const user = localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));
    if (!user) return;
    const response = await axios.delete(`/tasks/${user.username}/${id}`)
    if (response.status === 200) {
      toast("Tarea eliminada", {
        icon: '👏',
        duration: 1000,
      })
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  }
  return (
    <div className="TodoCompleted">
      <h1>Tareas Completadas</h1>
      {
        todos && todos.filter((todo) => Boolean(todo.done) === true).map((todo) => (
          <div key={todo.id} className="Todo">
            <p>{todo.description}</p>
            <div className='icon-container'>
              <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(todo.id)} />
            </div>
          </div>
        ))
      }
    </div>
  );
};
