import styles from "./List.module.css";
import { useFetchTodos, useDeleteTodo } from "../hooks/useTodos";
import Spinner from "./Spinner";

const List = () => {
  const { data: todos, isLoading } = useFetchTodos();
  const { mutate: deleteTodo, isError: isErrorDelete } = useDeleteTodo();

  if (isLoading) return <Spinner width="100%" height="50px" color="#a2a2a2" />;

  return (
    <ul className={styles.root}>
      {todos?.map((todo) => (
        <li key={`list-todo-${todo.id}`} className={styles.list}>
          <p className={styles.listBox}>{todo.title}</p>
          <button
            className={styles.listButton}
            onClick={() => deleteTodo(todo.id)}
          >
            {!isErrorDelete ? "Delete" : "Error"}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
