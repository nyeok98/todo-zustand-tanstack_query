import { PRIORITY } from "../types/todo";
import ListElement from "./ListElement";

const listInputStyle = {
  display: "block",
  paddingBottom: "var(--section-margin)",
  marginBottom: "var(--section-margin)",
  borderBottom: "var(--border)",
};

const emptyTodo = {
  id: "",
  title: "",
  completed: false,
  priority: PRIORITY.LOW,
  createdAt: new Date(),
};

const ListInput = () => {
  return (
    <div style={listInputStyle}>
      <ListElement todo={emptyTodo} />
    </div>
  );
};

export default ListInput;
