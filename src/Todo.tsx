/* Components */
import Headliner from "./components/Headliner";
import Header from "./components/Header";
import ListInput from "./components/ListInput";
import List from "./components/List";
/* Styles */
import styles from "./Todo.module.css";

export const Todo = () => {
  return (
    <>
      <Headliner />
      <div className={styles.root}>
        <div className={styles.container}>
          <Header />
          <ListInput />
          <List />
        </div>
      </div>
    </>
  );
};
