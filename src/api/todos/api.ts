import { db } from "../../services/firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { Todo } from "../../types/todo";

const todosCollection = collection(db, "todos");

export const fetchTodos = async () => {
  try {
    const snapshot = await getDocs(todosCollection);
    return snapshot.docs
      .map(
        (doc) =>
          ({
            id: doc.ref.id,
            title: doc.data().title,
            completed: doc.data().completed,
            priority: doc.data().priority,
            createdAt: doc.data().createdAt?.toDate() || new Date(),
          }) as Todo
      )
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  } catch (e) {
    throw Error("Todo list를 불러오지 못했습니다.");
  }
};

export const addTodo = async (todo: Todo) => {
  try {
    const docRef = await addDoc(todosCollection, todo);
    return { ...todo, id: docRef.id } as Todo;
  } catch (e) {
    throw Error("Todo를 추가하지 못했습니다.");
  }
};

export const deleteTodo = async (id: string) => {
  try {
    const docRef = doc(db, "todos", id);
    await deleteDoc(docRef);
  } catch (e) {
    throw Error("Todo를 삭제하지 못했습니다.");
  }
};
