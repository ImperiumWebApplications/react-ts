import { Todo } from "../models/Todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{ todos: Todo[] }> = ({ todos }) => {
  return (
    <ul className={classes.todos}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default Todos;
