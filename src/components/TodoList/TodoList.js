import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  const addTodo = () => {
    if (todoText.trim() !== "") {
      setTodos([...todos, { text: todoText, completed: false }]);
      setTodoText("");
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => toggleTodo(index)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
