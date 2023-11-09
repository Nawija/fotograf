import Link from "next/link";

export default function Adm() {
    return (
        <>
            <div className="lg:w-full w-80 h-1/2 rotate-45 rounded-xl bg-gradient-to-tr -z-10 from-gray-400/90 absolute top-0 left-0 shadow-xl" />
            <div className="flex items-center justify-center h-[80vh] ">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col  max-w-7xl justify-center items-center space-y-3 w-full ">
                        <p className="font-semibold text-4xl mb-12">
                            Panel Administracyjny
                        </p>
                        <div className="flex items-center justify-center space-x-6">
                            <Link
                                href="https://photo-5996.admin.datocms.com/editor"
                                target="_blank"
                                className="btn-main py-2 px-4"
                            >
                                Panel CMS
                            </Link>
                            <Link
                                href="/adm"
                                target="_blank"
                                className="btn-main py-2 px-4"
                            >
                                Wiadomości
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
