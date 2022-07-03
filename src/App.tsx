import "./App.css";
import Todos from "./components/Todos";
import { Todo } from "./models/Todo";

function App() {
  const todos = [
    new Todo(1, "Buy firstItem"),
    new Todo(2, "Buy secondItem"),
    new Todo(3, "Buy thirdItem"),
  ];
  return <Todos todos={todos} />;
}

export default App;
