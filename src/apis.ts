interface Todo {
    content: string;
}

export const fetchTodos = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
        const data = await response.json();
        return data.slice(0, 10).map((todo: any) => ({ content: todo.title }));
    } catch {
        console.log("err");
    }
};