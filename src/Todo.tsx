/* Components */
import Headliner from "./Components/Headliner";
import Header from "./Components/Header";
import ListInput from "./Components/ListInput";
import List from "./Components/List";
/* Styles */
import styles from "./App.module.css";

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
