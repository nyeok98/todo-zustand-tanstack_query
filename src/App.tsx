import Todo from "./Todo";
import TodoContextProvider from "./context/TodosContextProvider";

function App() {
  return (
    <TodoContextProvider>
      <Todo />
    </TodoContextProvider>
  );
}

export default App;
