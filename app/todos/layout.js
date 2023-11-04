import TodosList from "./TodosList";

export default function RootLayoutRootLayout({ children }) {
    return (
        <main className="flex max-w-screen-2xl mx-auto">
            <div>
                <TodosList />
            </div>
            <div className="flex-1">{children}</div>
        </main>
    );
}
