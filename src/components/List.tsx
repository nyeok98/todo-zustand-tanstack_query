import useTodos from "../hooks/useTodo";
import styles from "./List.module.css";

const List = () => {
  const { todos, deleteTodo } = useTodos();
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
