import Categories from "./Categories";

export default function RootLayout({ children }) {
    return (
        <main className="flex max-w-screen-2xl mx-auto mb-20">
            <div>
                <Categories />
            </div>
            <div className="flex-1 lg:ml-2">{children}</div>
        </main>
    );
}
