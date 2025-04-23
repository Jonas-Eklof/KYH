import { useState } from "react";
import TodoApp from "./TodoApp";

function TodoAppContainer() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: inputValue, completed: false },
      ]);
      setInputValue("");
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoApp
      todos={todos}
      inputValue={inputValue}
      setInputValue={setInputValue}
      handleSubmit={handleSubmit}
      toggleComplete={toggleComplete}
      deleteTodo={deleteTodo}
    />
  );
}

export default TodoAppContainer;
