import Link from "next/link";

export default function Adm() {
    return (
        <>
            
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
                                MongoDB
                            </Link>
                            <Link
                                href="/adm"
                                target="_blank"
                                className="btn-main py-2 px-4"
                            >
                                Hosting
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
