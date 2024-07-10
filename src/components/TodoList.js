// src/components/TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, setEditTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          setEditTodo={setEditTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
