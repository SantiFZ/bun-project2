import React, { Fragment, useEffect, useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { EditTodoForm } from "./EditTodoForm";
import axios from "axios";
import toast from "react-hot-toast";

export const TodoWrapper = ({ todos, setTodos, setCompletedTodos, completedTodos }) => {
  const getUser = () => {
    const userInLocalStorage = localStorage.getItem("user");
    if (userInLocalStorage) {
      return JSON.parse(userInLocalStorage);
    }
    return null
  }
  const addTodo = async (todo) => {
    const user = getUser();
    if (!user) return;
    const response = await axios.post("/tasks/", {
      description: todo,
      username: user.username,
    })
    if (response.status === 200) {
      toast("Tarea agregada", {
        duration: 1000,
        icon: '👏'
      })
      setTodos([
        ...todos,
        { id: response.data.task.id, description: todo, done: response.data.task.done, isEditing: false },
      ]);
    }
  };

  const deleteTodo = async (id) => {
    const user = getUser();
    if (!user) return;
    const response = await axios.delete(`/tasks/${user.username}/${id}`)
    if (response.status === 200) {
      toast("Tarea eliminada", {
        icon: '👏',
        duration: 1000,
      })
      setTodos([...todos.filter((todo) => todo.id !== id)]);
    }
  }

  const toggleComplete = async (id) => {
    const user = getUser();
    if (!user) return;
    const currentTodo = todos.find((todo) => todo.id === id);
    const response = await axios.put(`/tasks/${user.username}/${id}`, {
      done: !Boolean(currentTodo.done),
      description: currentTodo.description
    })
    if (response.status === 200) {
      setTodos([...todos.filter((todo) => todo.id !== id), { ...currentTodo, done: !Boolean(currentTodo.done) ? 1 : 0 }]);
      toast.success(`Tarea Completada!`)
    }
  };

  const editTodo = async (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = async (task, id) => {
    const user = getUser();
    if (!user) return;
    const response = await axios.put(`/tasks/${user.username}/${id}`, {
      description: task,
    })
    if (response.status === 200) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, description: task, isEditing: !todo.isEditing } : todo
        )
      );
    }

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, description: task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <img src="/bunpng.png" />
      <TodoForm addTodo={addTodo} />
      {/* display todos */}
      {todos && todos.filter((todo) => Boolean(todo.done) === false).map((todo) =>
        <Fragment key={todo.id}>
          {
            todo.isEditing ? (
              <EditTodoForm editTodo={editTask} task={todo} />
            ) : (
              <Todo
                key={todo.id}
                task={todo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                toggleComplete={toggleComplete}
              />
            )
          }
        </Fragment>
      )}

    </div>
  );
};
