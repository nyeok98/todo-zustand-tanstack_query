import styles from "./ListInput.module.css";
import useTodoInput from "../hooks/useTodoInput";

const ListInput = () => {
  const { inputValue, hasError, handleSubmit, handleChange } = useTodoInput();

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
