import { FC } from "react";
import styles from "./Headliner.module.css";

interface HeadlinerProps {
  todos: string[];
}

const EmptyHeadliner: FC = () => {
  return <div className={styles.emptyHeadliner}></div>;
}

const Headliner: FC<HeadlinerProps> = ({ todos }) => {
  if (!todos.length) return <EmptyHeadliner/>

  return (
    <div className={styles.headliner}>
      <div className={styles.todos}>
        {todos.map((todo) => {
          return <div className={styles.todo}>{todo}</div>;
        })}
      </div>
    </div>
  );
};

export default Headliner;
