// src/components/TodoForm.js
import React, { useState, useEffect } from 'react';

const TodoForm = ({ addTodo, editTodo, editExistingTodo }) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.text);
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      addTodo({
        id: Date.now(),
        text: input,
      });
    } else {
      editExistingTodo({
        ...editTodo,
        text: input,
      });
    }
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo"
      />
      <button type="submit">{editTodo ? 'Update Todo' : 'Add Todo'}</button>
    </form>
  );
};

export default TodoForm;
