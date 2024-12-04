import { useTodos } from "../hooks/useTodos";
import styles from "./Headliner.module.css";

const EmptyHeadliner = () => {
  return <div className={styles.emptyHeadliner}></div>;
};

const Headliner = () => {
  const { data: todos } = useTodos();
  if (!todos || todos.length === 0) return <EmptyHeadliner />;

  return (
    <div className={styles.headliner}>
      <div className={styles.todos}>
        {todos.map((todo, index) => {
          return (
            <div key={`headliner-todo-${index}`} className={styles.todo}>
              {todo.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Headliner;
