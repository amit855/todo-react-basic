// src/components/TodoItem.js
import React from 'react';

const TodoItem = ({ todo, deleteTodo, setEditTodo }) => {
  return (
    <li>
      <span>{todo.text}</span>
      <button onClick={() => setEditTodo(todo)}>Edit</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
