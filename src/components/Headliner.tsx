import { useTodoStore } from "../store/todo";
import styles from "./Headliner.module.css";

const EmptyHeadliner = () => {
  return <div className={styles.emptyHeadliner}></div>;
};

const Headliner = () => {
  const { todos } = useTodoStore();
  if (!todos || todos.length === 0) return <EmptyHeadliner />;

  return (
    <div className={styles.headliner}>
      <div className={styles.todos}>
        {todos.map((todo) => {
          return <div className={styles.todo}>{todo.title}</div>;
        })}
      </div>
    </div>
  );
};

export default Headliner;
