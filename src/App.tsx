import TodoContextProvider from "./Context/TodosContextProvider";
import { Todo } from "./Todo";

function App() {
  return (
    <TodoContextProvider>
      <Todo />
    </TodoContextProvider>
  );
}

export default App;
