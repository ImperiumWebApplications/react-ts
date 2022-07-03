import { Todo } from "../models/Todo";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ todo: Todo; onDelete: (id: number) => void }> = ({
  todo,
  onDelete,
}) => {
  return (
    <li className={classes.item} onClick={() => onDelete(todo.id)}>
      {todo.text}
    </li>
  );
};
export default TodoItem;
