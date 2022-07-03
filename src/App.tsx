import { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { Todo } from "./models/Todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addToDoHandler = (text: string) => {
    const newTodo = new Todo(todos.length + 1, text);
    setTodos([...todos, newTodo]);
  };
  const removeToDoHandler = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <NewTodo onAddTodo={addToDoHandler} />
      <Todos todos={todos} onDelete={removeToDoHandler} />;
    </>
  );
}

export default App;
