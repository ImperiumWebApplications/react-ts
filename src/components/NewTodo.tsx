import { useRef } from "react";

const NewTodo = () => {
  const textRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let enteredText = textRef.current!.value;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={textRef} />
      <button type="submit">Add</button>
    </form>
  );
};

export default NewTodo;
