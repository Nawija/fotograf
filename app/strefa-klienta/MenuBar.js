"use client";

const LinkStyle =
    "transition-colors py-1.5 text-white px-3 w-max text-sm bg-gray-500 rounded-xl mx-2 hover:bg-gray-200 transition-colors hover:text-red-900";

export default function MenuBar() {
    return (
        <div className="flex mt-10 lg:mt-0 ml-1 items-start justify-center text-sm relative space-x-2">
            <button className={LinkStyle}>Wyczysc Serduszka</button>
            <button className={LinkStyle}>Pobierz wszystko</button>
            <button className={LinkStyle}>Pobierz ulubione</button>
            <button className={LinkStyle}>Napisz wiadomość</button>
        </div>
    );
}
