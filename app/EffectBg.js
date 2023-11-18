"use client";
import { usePathname } from "next/navigation";

export default function EffectBg() {
    const pathName = usePathname();
    return (
        <div>
            <div className="fixed top-0 left-0 bg-gradient-to-b from-slate-500/20 to-white/0 w-full lg:h-[50vh] -z-50" />

            <div
                className={`w-full hidden absolute top-0 left-0 -z-10 lg:flex h-[40vh] rotate-45 rounded-xl bg-gradient-to-tr from-gray-400/90 items-center shadow-xl ${
                    pathName === "/oferta" ? "lg:hidden" : ""
                } `}
            />
        </div>
    );
}
