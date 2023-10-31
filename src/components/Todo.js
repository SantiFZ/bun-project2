import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({ task, deleteTodo, editTodo, checkTodo, toggleComplete }) => {
  return (
    <div className="Todo">
      <p className={`${task.done ? "completada" : "En proceso"}`} onClick={() => toggleComplete(task.id)}>{task.description}</p>
      <div className='icon-container'>
        <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
        <FontAwesomeIcon className="check-icon" icon={faCheck} onClick={() => toggleComplete(task.id)} />
      </div>
    </div>
  )
}
