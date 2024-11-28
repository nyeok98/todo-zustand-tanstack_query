import { useEffect, useState } from "react";
import Header from "./Components/Header";
import ListInput from "./Components/ListInput";
import List from "./Components/List";
import Headliner from "./Components/Headliner";
import styles from "./App.module.css";

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodos([...todos, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const fetchTodos = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const data = response.json();

      console.log(data);
    } catch {
      console.log("err");
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <Headliner todos={todos} />
      <div className={styles.root}>
        <div className={styles.container}>
          <Header title="TODO LIST" />
          <ListInput
            value={inputValue}
            onChange={(e) => setInputValue(e)}
            onSubmit={handleAddTodo}
          />
          <List todos={todos} onDelete={handleDeleteTodo} />
        </div>
      </div>
    </>
  );
}

export default App;
