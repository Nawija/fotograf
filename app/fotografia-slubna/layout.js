"use client";
import { useState } from "react";
import Categories from "./Categories";

export default function RootLayout({ children }) {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <main className="flex max-w-screen-2xl mx-auto mb-20">
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
