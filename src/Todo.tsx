/* Components */
import Headliner from "./components/Headliner";
import Header from "./components/Header";
import ListInput from "./components/ListInput";
import List from "./components/List";

export const Todo = () => {
  return (
    <>
      <Headliner />
      <div
        style={{
          width: "20vw",
          height: "100%",
        }}
      >
        <Header />
        <ListInput />
        <List />
      </div>
    </>
  );
};
