import { useFetchTodos } from "../hooks/useTodos";
import styles from "./Headliner.module.css";

const EmptyHeadliner = () => {
  return <div className={styles.emptyHeadliner}></div>;
};

const Headliner = () => {
  const { data: todos, isLoading } = useFetchTodos();
  if (isLoading || !todos || todos.length === 0) return <EmptyHeadliner />;

  return (
    <div className={styles.headliner}>
      <ul className={styles.todos}>
        {todos.map((todo, index) => {
          return (
            <div key={`headliner-todo-${index}`} className={styles.todo}>
              {todo.title}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Headliner;
