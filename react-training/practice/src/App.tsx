import { useState } from "react";
import TodoItem from "./TodoItem";

// Börja med att skapa en interface/type för hur en Todo kommer vara uppbyggd. Denna måste finnas med där "Todo" används
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  // Skapa en useState för Todo-lista
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  // Skapa en hantering för input-fältet och nya todos
  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    // Om sökfältet är tomt så "return" = "Gör ingenting"
    if (newTodo.trim() === "") return;

    // Skapa ett nytt todo-objekt

    const todo: Todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };

    // Tar den befintliga listan av todos och lägger till den nya todon sist i arrayen
    setTodos([...todos, todo]);
    // Tömmer input-fältet
    setNewTodo("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="bg-linear-to-b from-blue-950 to-blue-900 h-dvh flex items-center flex-col">
      <h1 className="text-5xl text-gray-200 font-semibold mt-10">Todo</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Skriv din todo.."
          className="bg-white h-10 w-2xs mt-8 rounded p-4 mb-12"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </form>
      <div>
        {/* Använd .map() för att rendera varje todo och skicka information till TodoItem via prop */}
        {todos.map((todo) => (
          <div key={todo.id}>
            <ul>
              <TodoItem todo={todo} toggleTodo={toggleTodo} />
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
