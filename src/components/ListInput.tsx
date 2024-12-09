import useTodoInput from "../hooks/useTodoInput";
import classnames from "classnames/bind";
import styles from "./ListInput.module.css";

const cx = classnames.bind(styles);

const ListInput = () => {
  const {
    inputValue,
    completed,
    priority,
    isError,
    handleSubmit,
    handleInputChange,
    handlePriorityChange,
    handleCompletedChange,
  } = useTodoInput();

  return (
    <form className={styles.root} onSubmit={handleSubmit}>
      <span
        className={cx("checkBox", { checked: completed })}
        onClick={() => handleCompletedChange(!completed)}
      />
      <span
        className={cx("priorityBox", { [priority]: true })}
        onClick={handlePriorityChange}
      />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
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
