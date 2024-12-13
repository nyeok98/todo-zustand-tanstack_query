import ListElement from "./ListElement";
// Hooks
import { useFetchTodos } from "../hooks/useTodos";
// Styles
import styles from "./List.module.css";
import Spinner from "./Spinner";

const List = () => {
  const { data: todos, isLoading } = useFetchTodos();

  if (isLoading) return <Spinner width="100%" height="50px" color="#a2a2a2" />;

  return (
    <ul className={styles.root}>
      {todos?.map((todo) => <ListElement key={todo.id} todo={todo} />)}
    </ul>
  );
};

export default List;
