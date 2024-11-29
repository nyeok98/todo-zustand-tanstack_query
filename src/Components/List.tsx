import { useContext } from "react";
import styles from "./List.module.css";
import TodosContext from "../context/TodosContext";

const List = () => {
  const { todos, deleteTodo } = useContext(TodosContext);
  return (
    <ul className={styles.root}>
      {todos?.map((todo) => (
        <>
          <li key={todo.id} className={styles.list}>
            <p className={styles.listBox}>{todo.title}</p>
            <button
              className={styles.listButton}
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        </>
      ))}
    </ul>
  );
};

export default List;
