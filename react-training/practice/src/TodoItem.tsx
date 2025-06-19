interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type TodoItemProp = {
  todo: Todo;
  toggleTodo: (id: number) => void;
};

const TodoItem = ({ todo, toggleTodo }: TodoItemProp) => {
  return (
    <li
      className=" mb-2 text-white text-2xl bg-gray-900 rounded-2xl w-90 p-4 hover:bg-gray-800 cursor-pointer"
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        color: todo.completed ? "#888" : "#fff",
      }}
      onClick={() => toggleTodo(todo.id)}
    >
      {todo.text}
    </li>
  );
};

export default TodoItem;
