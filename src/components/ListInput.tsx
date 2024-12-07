import useTodoInput from "../hooks/useTodoInput";
import styles from "./ListInput.module.css";

const ListInput = () => {
  const { inputValue, isError, handleSubmit, handleChange } = useTodoInput();

  return (
    <form className={styles.root} onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Add a new todo..."
        className={styles.inputBox}
      />
      <button type="submit" className={styles.addButton}>
        {!isError ? "Add" : "Error"}
      </button>
    </form>
  );
};

export default ListInput;
