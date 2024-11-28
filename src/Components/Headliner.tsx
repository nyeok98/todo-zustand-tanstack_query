import { FC, useContext } from "react";
import styles from "./Headliner.module.css";
import TodosContext from "../Context/TodosContext";

const EmptyHeadliner: FC = () => {
  return <div className={styles.emptyHeadliner}></div>;
};

const Headliner = () => {
  const { todos } = useContext(TodosContext);
  if (!todos || todos.length === 0) return <EmptyHeadliner />;

  return (
    <div className={styles.headliner}>
      <div className={styles.todos}>
        {todos.map((todo) => {
          return <div className={styles.todo}>{todo.content}</div>;
        })}
      </div>
    </div>
  );
};

export default Headliner;
