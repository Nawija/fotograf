import Link from "next/link";

export default function NotFoundPage() {
    return (
        <div className="flex flex-col space-y-6 items-center justify-center h-[80vh] font-semibold text-2xl">
            <div className="text-center">
                <p>Uupss..</p>
                <p className="text-3xl">Error 404</p>
            </div>
            <Link href="/" className="btn-main px-3">
                Strona Główna
            </Link>
        </div>
    );
}
