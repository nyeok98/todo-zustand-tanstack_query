/* Components */
import Headliner from "./components/Headliner";
import Header from "./components/Header";
import ListInput from "./components/ListInput";
import { Suspense, lazy, ReactNode } from "react";
import Spinner from "./components/Spinner";

const List = lazy(() => import("./components/List"));
const FallbackSpinner = <Spinner width="100%" height="50px" color="#a2a2a2" />;
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
        <Suspense fallback={FallbackSpinner}>
          <List />
        </Suspense>
      </Layout>
    </>
  );
};

export default Todo;
