import { useContext } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { TodosContext } from "./store/todos-context";

function App() {
  const todoCtx = useContext(TodosContext);
  return (
    <>
      <NewTodo />
      <Todos todos={todoCtx.todos} />;
    </>
  );
}

export default App;
