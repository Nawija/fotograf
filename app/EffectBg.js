"use client";
import { usePathname } from "next/navigation";

export default function EffectBg() {
    const pathName = usePathname();
    return (
        <div>
            <div className="fixed top-0 left-0 bg-gradient-to-b from-slate-500/30 to-white/0 w-full lg:h-[50vh] -z-50" />
            <div
                className={`lg:w-[86%] w-40 h-[60vh] rotate-45 rounded-xl bg-gradient-to-tr -z-10 lg:from-gray-300/50 from-gray-400/50 absolute top-0 left-0 shadow-2xl ${
                    pathName === "/oferta" ? "lg:hidden" : ""
                } `}
            />
            <div
                className={`lg:w-[88%] w-40 h-[50vh] rotate-45 rounded-xl bg-gradient-to-tr -z-10 lg:from-gray-300/70 from-gray-400/70 absolute top-0 left-0 shadow-2xl ${
                    pathName === "/oferta" ? "lg:hidden" : ""
                } `}
            />

            <div
                className={`lg:w-[90%] w-40  hidden absolute top-0 left-0 -z-10 lg:flex h-[40vh] rotate-45 rounded-xl bg-gradient-to-tr lg:from-gray-300/90 from-gray-400/90 items-center shadow-2xl ${
                    pathName === "/oferta" ? "lg:hidden" : ""
                } `}
            />
        </div>
    );
}
