import { useEffect } from "react";
import { useTodoStore } from "../store/todo";
import styles from "./List.module.css";

const List = () => {
  const { todos, fetchTodos, deleteTodo, hasError, setHasError } =
    useTodoStore();

  const handleDelete = async (id: string) => {
    try {
      await deleteTodo(id);
    } catch {
      // UI 관련 코드
      setHasError(true);
      setTimeout(() => {
        setHasError(false);
      }, 2000);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

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
