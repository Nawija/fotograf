"use client";

import { useState } from "react";
import Image from "next/image";
import HeroImg from "../../images/jarek-olszewski.jpg";
import Link from "next/link";

export default function OfertaPage() {
    const initialValues = Array.from({ length: 10 }, () => null);
    const [values, setValues] = useState(initialValues);

    const totalValue = values.reduce((acc, cur) => acc + cur, 0);

    const handleRadioChange = (event, categoryIndex) => {
        const { value } = event.target;
        const newValues = [...values];
        newValues[categoryIndex] = parseInt(value);
        setValues(newValues);
    };

    const handleCheckboxChange = (event, categoryIndex) => {
        const { value, checked } = event.target;
        const newValues = [...values];
        newValues[categoryIndex] = checked ? parseInt(value) : null;
        setValues(newValues);
    };

    return (
        <div className="flex flex-wrap items-start justify-center max-w-screen-2xl mx-auto relative mt-[45vh] md:mt-[60vh] opacityAnimation">
            <div className="w-full h-[30vh] fixed -z-10 left-0 top-[4.1rem]">
                <Image src={HeroImg} />
                <div className="absolute right-1/3 lg:right-1/4 top-1/2 text-base text-white text-center lg:text-start lg:text-black lg:text-4xl lg:font-light font-semibold">
                    <p>Wypełnij Formularz</p>
                    <p className=" lg:text-red-600">lub</p>
                    <p>Zadzwoń</p>
                    <Link href="tel:570750307">570750307</Link>
                </div>
            </div>
            <form
                className="p-6 rounded-lg border bg-white shadow-xl"
                action="https://public.herotofu.com/v1/d1061fe0-e21a-11ed-8300-fd92f9e8911a"
                method="post"
                accept-charset="UTF-8"
            >
                <div className="mb-2 mt-2">
                    <p className="font-semibold mb-1">
                        Jakiej usługi potrzebujesz?
                    </p>
                    <div className="ml-2 py-2 flex flex-col">
                        <label>
                            <input
                                className="mr-2 scale-110 cursor-pointer"
                                type="radio"
                                name="PageType"
                                value="2400"
                                checked={values[0] === 2400}
                                onChange={(e) => handleRadioChange(e, 0)}
                            />
                            Fotograf ślubny
                        </label>

                        <label>
                            <input
                                className="mr-2 scale-110"
                                type="radio"
                                name="PageType"
                                value="900"
                                checked={values[0] === 900}
                                onChange={(e) => handleRadioChange(e, 0)}
                            />
                            Reportaz Chrztu
                        </label>

                        <label>
                            <input
                                className="mr-2 scale-110"
                                type="radio"
                                name="PageType"
                                value="500"
                                checked={values[0] === 500}
                                onChange={(e) => handleRadioChange(e, 0)}
                            />
                            Sesja indywidualna
                        </label>

                        <label>
                            <input
                                className="mr-2 scale-110"
                                type="radio"
                                name="PageType"
                                value="700"
                                checked={values[0] === 700}
                                onChange={(e) => handleRadioChange(e, 0)}
                            />
                            Studniówka
                        </label>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start px-1 py-3">
                    <label className="font-semibold mb-1" htmlFor="t1">
                        Opisz swoją wizję
                    </label>
                    <textarea
                        className="mr-2 w-full px-4 py-3 h-24 rounded-lg border"
                        type="text"
                        id="t1"
                        name="OpisFirmy"
                    />
                </div>
                <div className="flex flex-col items-start justify-start px-1 py-3">
                    <label className="font-semibold mb-1" htmlFor="t4">
                        Posiadasz identyfikację wizualną firmy?
                    </label>
                    <textarea
                        className="mr-2 w-full px-4 py-3 h-24 rounded-lg border"
                        type="text"
                        id="t4"
                        name="IdentyfikacjaFirmy"
                    />
                    <p className="text-sm text-gray-700 mt-1 px-1 md:w-[80%]">
                        Opisz czy posiadasz kolory firmowe, logo lub wykonane
                        grafiki jak wizytówki czy grafiki socialmedia. Będzie to
                        miało wpływ na ujednolicenie strony z Twoją marką.
                    </p>
                </div>
                <div className="flex flex-col items-start justify-start px-1 py-3">
                    <label className="font-semibold mb-1" htmlFor="t5">
                        Wygląd strony - Inspirację
                    </label>
                    <textarea
                        className="mr-2 w-full px-4 py-3 h-24 rounded-lg border"
                        type="text"
                        id="t5"
                        placeholder="Pomoze okreslic wyglad strony internetowej"
                        name="Inspiracja"
                    />
                    <p className="text-sm text-gray-700 mt-1 px-1 md:w-[80%]">
                        Jeżeli istnieją strony, które Ci się podobają to załącz
                        powyżej linki do nich lub skorzystaj z takich źródeł
                        inspiracji jak{" "}
                    </p>
                </div>

                <div className="mb-2 mt-2">
                    <p className="font-semibold mb-1">Posiadasz domenę?</p>
                    <div className="ml-2 py-2 flex flex-col">
                        <label>
                            <input
                                className="mr-2 scale-110 cursor-pointer"
                                type="radio"
                                name="Domena"
                                value="0"
                                checked={values[1] === 0}
                                onChange={(e) => handleRadioChange(e, 1)}
                            />
                            Tak
                        </label>

                        <label>
                            <input
                                className="mr-2 scale-110"
                                type="radio"
                                name="Domena"
                                value="50"
                                checked={values[1] === 50}
                                onChange={(e) => handleRadioChange(e, 1)}
                            />
                            Nie
                        </label>
                    </div>
                </div>

                <div className="mb-2 mt-2">
                    <p className="font-semibold mb-1">Posiadasz Hosting?</p>
                    <div className="ml-2 py-2 flex flex-col">
                        <label>
                            <input
                                className="mr-2 scale-110 cursor-pointer"
                                type="radio"
                                name="Hosting"
                                value="0"
                                checked={values[2] === 0}
                                onChange={(e) => handleRadioChange(e, 2)}
                            />
                            Tak
                        </label>

                        <label>
                            <input
                                className="mr-2 scale-110"
                                type="radio"
                                name="Hosting"
                                value="300"
                                checked={values[2] === 300}
                                onChange={(e) => handleRadioChange(e, 2)}
                            />
                            Nie
                        </label>
                    </div>
                </div>

                <div className="mb-2 mt-2">
                    <p className="font-semibold mb-1">
                        Ile podstron ma posiadać strona internetowa?
                    </p>

                    <div className="ml-2 py-2 flex flex-col">
                        <label>
                            <input
                                className="mr-2 scale-110 cursor-pointer"
                                type="radio"
                                name="Podstrona"
                                value="0"
                                checked={values[3] === 0}
                                onChange={(e) => handleRadioChange(e, 3)}
                            />
                            1-3 podstron
                        </label>

                        <label>
                            <input
                                className="mr-2 scale-110"
                                type="radio"
                                name="Podstrona"
                                value="300"
                                checked={values[3] === 300}
                                onChange={(e) => handleRadioChange(e, 3)}
                            />
                            4-6 podstron
                        </label>
                        <label>
                            <input
                                className="mr-2 scale-110"
                                type="radio"
                                name="Podstrona"
                                value="600"
                                checked={values[3] === 600}
                                onChange={(e) => handleRadioChange(e, 3)}
                            />
                            7-9 podstron
                        </label>
                        <label>
                            <input
                                className="mr-2 scale-110"
                                type="radio"
                                name="Podstrona"
                                value="900"
                                checked={values[3] === 900}
                                onChange={(e) => handleRadioChange(e, 3)}
                            />
                            Więcej
                        </label>
                    </div>
                </div>

                <div className="mb-2 mt-2">
                    <p className="font-semibold mb-1">Funkcje</p>
                    <div className="ml-2 py-2 flex flex-col">
                        <label>
                            <input
                                className="mr-2 scale-110 cursor-pointer"
                                type="checkbox"
                                name="Sekcja Blog"
                                value="100"
                                checked={values[4] === 100}
                                onChange={(e) => handleCheckboxChange(e, 4)}
                            />
                            Sekcja Blog
                        </label>

                        <label>
                            <input
                                className="mr-2 scale-110"
                                type="checkbox"
                                name="Sekcja News"
                                value="100"
                                checked={values[5] === 100}
                                onChange={(e) => handleCheckboxChange(e, 5)}
                            />
                            Sekcja News
                        </label>
                        <label>
                            <input
                                className="mr-2 scale-110"
                                type="checkbox"
                                name="Formularz Kontaktowy"
                                value="50"
                                checked={values[6] === 50}
                                onChange={(e) => handleCheckboxChange(e, 6)}
                            />
                            Formularz Kontaktowy
                        </label>
                        <label>
                            <input
                                className="mr-2 scale-110"
                                type="checkbox"
                                name="Mapa Google 2D/3D"
                                value="50"
                                checked={values[7] === 50}
                                onChange={(e) => handleCheckboxChange(e, 7)}
                            />
                            Mapa Google 2D/3D
                        </label>
                        <label>
                            <input
                                className="mr-2 scale-110"
                                type="checkbox"
                                name="Kalkulator wyceny"
                                value="150"
                                checked={values[8] === 150}
                                onChange={(e) => handleCheckboxChange(e, 8)}
                            />
                            Kalkulator wyceny
                        </label>
                        <label>
                            <input
                                className="mr-2 scale-110"
                                type="checkbox"
                                name="Chat"
                                value="50"
                                checked={values[9] === 50}
                                onChange={(e) => handleCheckboxChange(e, 9)}
                            />
                            Chat
                        </label>
                    </div>
                    <div className="mb-2 mt-2">
                        <p className="font-semibold mb-1">
                            Kto dostarczy treści?
                        </p>
                        <div className="ml-2 py-2 flex flex-col">
                            <label>
                                <input
                                    className="mr-2 scale-110 cursor-pointer"
                                    type="radio"
                                    name="Zleceniodawca"
                                    value="0"
                                    checked={values[10] === 0}
                                    onChange={(e) => handleRadioChange(e, 10)}
                                />
                                Zleceniodawca
                            </label>

                            <label>
                                <input
                                    className="mr-2 scale-110"
                                    type="radio"
                                    name="Wykonawca"
                                    value="600"
                                    checked={values[10] === 600}
                                    onChange={(e) => handleRadioChange(e, 10)}
                                />
                                Wykonawca
                            </label>

                            <input
                                checked
                                className="hidden"
                                type="radio"
                                id="totalValue"
                                value={totalValue}
                                name="Suma"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between px-1 mt-8 md:mt-16">
                    <p className="font-semibold text-green-700 w-max">
                        Cena: {totalValue}
                    </p>
                    <button className="btn-main py-2 px-4">
                        Wyślij Formularz
                    </button>
                </div>
            </form>
        </div>
    );
}
