import { Todo } from "../models/Todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{ todos: Todo[]; onDelete: (id: number) => void }> = ({
  todos,
  onDelete,
}) => {
  return (
    <ul className={classes.todos}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default Todos;
