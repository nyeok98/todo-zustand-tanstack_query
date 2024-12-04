import styles from "./List.module.css";
import { useTodos, useDeleteTodo } from "../hooks/useTodos";

const List = () => {
  const { data: todos } = useTodos();
  const { mutate: deleteTodo } = useDeleteTodo();

  const handleDelete = async (id: string) => {
    deleteTodo(id);
  };

  return (
    <ul className={styles.root}>
      {todos?.map((todo) => (
        <li key={`list-todo-${todo.id}`} className={styles.list}>
          <p className={styles.listBox}>{todo.title}</p>
          <button
            className={styles.listButton}
            onClick={() => handleDelete(todo.id)}
          >
            Delete
            {/* {!hasError ? "Delete" : "Error"} */}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
