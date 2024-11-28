import { useContext, useState } from "react";
import TodosContext from "../Context/TodosContext";
import styles from "./ListInput.module.css";

const ListInput = () => {
  const { addTodo } = useContext(TodosContext);
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(inputValue);
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
