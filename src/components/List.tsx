// Hooks
import { useFetchTodos, useDeleteTodo } from "../hooks/useTodos";
// Styles
import styles from "./List.module.css";
import classnames from "classnames/bind";
import Spinner from "./Spinner";

const cx = classnames.bind(styles);

const List = () => {
  const { data: todos, isLoading } = useFetchTodos();
  const { mutate: deleteTodo, isError: isErrorDelete } = useDeleteTodo();

  if (isLoading) return <Spinner width="100%" height="50px" color="#a2a2a2" />;

  return (
    <ul className={styles.root}>
      {todos?.map((todo) => (
        <li key={`list-todo-${todo.id}`} className={styles.list}>
          <span
            className={cx("checkBox", { checked: todo.completed })}
            onClick={() => {}}
          />
          <span
            className={cx("priorityBox", { [todo.priority]: true })}
            onClick={() => {}}
          />
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
