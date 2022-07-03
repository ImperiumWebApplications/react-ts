import { Todo } from "../models/Todo";
import TodoItem from "./Todo";

const Todos: React.FC<{ todos: Todo[] }> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default Todos;
