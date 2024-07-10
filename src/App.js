// src/App.js
import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import SearchBar from './components/SearchBar';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [editTodo, setEditTodo] = useState(null);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const editExistingTodo = (updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));
    setEditTodo(null);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const searchTodos = (query) => {
    setSearchQuery(query);
  };

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SearchBar searchTodos={searchTodos} />
      <TodoForm addTodo={addTodo} editTodo={editTodo} editExistingTodo={editExistingTodo} />
      <TodoList todos={filteredTodos} deleteTodo={deleteTodo} setEditTodo={setEditTodo} />
    </div>
  );
};

export default TodoApp;
