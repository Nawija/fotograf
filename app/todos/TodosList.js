import Link from "next/link";

const fetchTodos = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
    const todos = await res.json();
    return todos;
};

export default async function TodosList() {
    const todos = await fetchTodos();
    return (
        <div className="flex border-r-2 flex-col pr-10 py-4 text-center h-screen overflow-y-auto">
            {todos.map((todo) => (
                <Link
                    key={todo.id}
                    href={`/todos/${todo.id}`}
                    className="hover:text-red-600 transition-colors p-1"
                >
                    Todo {todo.id}
                </Link>
            ))}
        </div>
    );
}
