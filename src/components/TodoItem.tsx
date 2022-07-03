import { Todo } from "../models/Todo";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  return <li className={classes.item}>{todo.text}</li>;
};
export default TodoItem;
