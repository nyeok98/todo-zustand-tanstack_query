import { useState } from "react";
import styles from "./ListInput.module.css";
import useTodo from "../hooks/useTodo";

const ListInput = () => {
  const { addTodo, hasError, setHasError } = useTodo();
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();
    if (!trimmedValue) return;
    try {
      await addTodo(trimmedValue);
      setInputValue("");
    } catch {
      setHasError(true);
    }
  };

  const handleChange = (inputValue: string) => {
    if (hasError) setHasError(false);
    setInputValue(inputValue);
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Add a new todo..."
        className={styles.inputBox}
      />
      <button
        type="submit"
        className={styles.addButton}
        disabled={!inputValue.trim() || hasError}
      >
        {!hasError ? "Add" : "Error"}
      </button>
    </form>
  );
};

export default ListInput;
