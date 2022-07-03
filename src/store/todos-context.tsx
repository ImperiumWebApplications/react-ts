import React, { createContext, useState } from "react";
import { Todo } from "../models/Todo";

export const TodosContext = createContext<{
  todos: Todo[];
  addTodo: (todoString: string) => void;
  removeTodo: (id: number) => void;
}>({
  todos: [],
  addTodo: (todoString: string) => {},
  removeTodo: (id: number) => {},
});

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todoString: string) => {
    const newTodo = new Todo(todos.length + 1, todoString);
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodosContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
