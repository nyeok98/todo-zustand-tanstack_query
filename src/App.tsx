import TodoContextProvider from "./context/TodosContextProvider";
import { Todo } from "./Todo";

function App() {
  return (
    <TodoContextProvider>
      <Todo />
    </TodoContextProvider>
  );
}

export default App;
