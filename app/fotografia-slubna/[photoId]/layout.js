import MenuLeftBar from "./MenuLeftBar";

export default async function RootLayout({ children }) {
    return (
        <main className="flex lg:flex-row flex-col max-w-screen-2xl mx-auto mb-20">
            <div className="w-full">{children}</div>
            <MenuLeftBar />
        </main>
    );
}
