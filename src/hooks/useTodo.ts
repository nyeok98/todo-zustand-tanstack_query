import { useContext } from "react";
import TodosContext from "../context/TodosContext";

const useTodos = () => {
  return useContext(TodosContext);
};

export default useTodos;
