import { useState } from "react";
import styles from "./ListInput.module.css";
import useTodo from "../hooks/useTodo";

const ListInput = () => {
  const { addTodo } = useTodo();
  const [inputValue, setInputValue] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addTodo(inputValue);
    setInputValue("");
  };

  const onChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <form className={styles.root} onSubmit={onSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Add a new todo..."
        className={styles.inputBox}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default ListInput;
