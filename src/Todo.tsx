/* Components */
import Headliner from "./components/Headliner";
import Header from "./components/Header";
import ListInput from "./components/ListInput";
import { lazy, ReactNode } from "react";

const List = lazy(() => import("./components/List"));
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        width: "20vw",
        height: "100%",
      }}
    >
      {children}
    </div>
  );
};

const Todo = () => {
  return (
    <>
      <Headliner />
      <Layout>
        <Header />
        <ListInput />
        <List />
      </Layout>
    </>
  );
};

export default Todo;
