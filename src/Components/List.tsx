import { useContext } from "react";
import styles from "./List.module.css";
import TodosContext from "../Context/TodosContext";

const List = () => {
  const { todos, deleteTodo } = useContext(TodosContext);
  return (
    <ul className={styles.root}>
      {todos?.map((todo, index) => (
        <>
          <li key={index} className={styles.list}>
            <p className={styles.listBox}>{todo.title}</p>
            <button
              className={styles.listButton}
              onClick={() => deleteTodo(index)}
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
