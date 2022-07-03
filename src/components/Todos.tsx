// todos is an array of objects with the following properties:
// id: number
// text: string
type Todo = {
  id: number;
  text: string;
};

const Todos: React.FC<{ todos: Todo[] }> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
