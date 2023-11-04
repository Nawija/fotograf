import { Todo } from "@/typings";
import { notFound } from "next/navigation";

export const dynamicParams = true;

type PageProps = {
    params: {
        todoId: string;
    };
};

const fetchTodo = async (todoId: string) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`,
        { next: { revalidate: 60 } }
    );
    const todo = await res.json();
    return todo;
};

export default async function TodoPage({ params: { todoId } }: PageProps) {
    const todo = await fetchTodo(todoId);

    if (!todo.id) return notFound();

    return (
        <div className="p-10">
            <p className="text-4xl font-semibold text-gray-800">#{todo.id}</p>
            <div className="flex items-start justify-center flex-col space-y-1">
                <p className="text-lg font-semibold tracking-wide mt-2">{todo.title}</p>
                <p>Completed: {todo.completed ? "yes" : "no"}</p>
                <p> By User: {todo.userId}</p>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
    const todos: Todo[] = await res.json();

    // SSG for 10 first elements in todos
    const trimmedTodos = todos.splice(0, 10);

    return trimmedTodos.map((todo) => ({
        todoId: todo.id.toString(),
    }));
}
