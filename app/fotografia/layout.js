import Categories from "./Categories";

export default function RootLayout({ children }) {
    return (
        <main className="flex max-w-screen-2xl mx-auto">
            <div>
                <Categories showMenu={showMenu} setShowMenu={setShowMenu} />
            </div>
            <div
                showMenu={showMenu}
                setShowMenu={setShowMenu}
                className="flex-1"
            >
                {children}
            </div>
        </main>
    );
}
