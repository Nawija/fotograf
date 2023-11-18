"use client";

const LinkStyle =
    "transition-colors py-1.5 px-3 w-max text-sm bg-white rounded-xl mx-2 hover:bg-red-50 transition-colors border";

export default function MenuBar() {
    return (
        <div className="lg:flex hidden items-start justify-center flex-col text-start h-full lg:pl-0 text-sm border-l-2 pr-8 transition-all relative space-y-2 mt-2">
            <button className={LinkStyle}>Wyczysc Serduszka</button>
            <button className={LinkStyle}>Pobierz wszystko</button>
            <button className={LinkStyle}>Pobierz ulubione</button>
            <button className={LinkStyle}>Napisz wiadomość</button>
        </div>
    );
}
