import { Todo } from "../types/todo";
import useTodoInput from "../hooks/useTodoInput";
import classnames from "classnames/bind";
import styles from "./ListElement.module.css";

type ListElementProps = {
  todo: Todo;
};

const cx = classnames.bind(styles);

const ListElement = ({ todo }: ListElementProps) => {
  const {
    inputValue,
    priority,
    completed,
    handleSubmit,
    handleInputChange,
    handlePriorityChange,
    handleCompletedChange,
    handleDelete,
  } = useTodoInput({ todo });
  const isInput = todo.id === "";

  return (
    <li key={`list-todo-${todo.id}`} className={styles.list}>
      <span
        className={cx("checkBox", { checked: completed })}
        onClick={() => handleCompletedChange(!completed)}
      />
      <span
        className={cx("priorityBox", { [priority]: true })}
        onClick={handlePriorityChange}
      />
      {isInput ? (
        <>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="Add a new todo..."
            className={styles.listBox}
          />
          <button onClick={handleSubmit} className={styles.addButton}>
            Add
          </button>
        </>
      ) : (
        <>
          <p className={styles.listBox}>{todo.title}</p>
          <button
            className={styles.listButton}
            onClick={() => handleDelete(todo.id)}
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
};

export default ListElement;
