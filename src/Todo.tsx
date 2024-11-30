/* Components */
import Headliner from "./components/Headliner";
import Header from "./components/Header";
import ListInput from "./components/ListInput";
import { Suspense, lazy } from "react";
import Spinner from "./components/Spinner";

const List = lazy(() => import("./components/List"));

const Todo = () => {
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
        <Suspense
          fallback={<Spinner width="100%" height="50px" color="#a2a2a2" />}
        >
          <List />
        </Suspense>
      </div>
    </>
  );
};

export default Todo;
