import useTodos from "../hooks/useTodo";
import styles from "./List.module.css";

const List = () => {
  const { todos, deleteTodo, hasError, setHasError } = useTodos();

  const handleDelete = async (id: string) => {
    try {
      await deleteTodo(id);
    } catch {
      setHasError(true);
      setTimeout(() => {
        setHasError(false);
      }, 2000);
    }
  };

  return (
    <ul className={styles.root}>
      {todos?.map((todo) => (
        <>
          <li key={todo.id} className={styles.list}>
            <p className={styles.listBox}>{todo.title}</p>
            <button
              className={styles.listButton}
              onClick={() => handleDelete(todo.id)}
            >
              {!hasError ? "Delete" : "Error"}
            </button>
          </li>
        </>
      ))}
    </ul>
  );
};

export default List;
