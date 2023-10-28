import React, { useState } from "react";

export const TodoCompleted = () => {
  const [todos, setTodos] = useState([]);


  return (
    <div className="TodoCompleted">
      <h1>Tareas Completadas</h1>
    </div>
  );
};
