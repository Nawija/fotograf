import Image from "next/image";
import Link from "next/link";
import heroImg from "../images/jarek-olszewski.jpg";
import s1Img from "../images/s1.jpg";
import s2Img from "../images/s2.jpg";
import s3Img from "../images/s3s.jpg";
import s4Img from "../images/s4.jpg";

export default function Home() {
    const heroImgAlt = "Jarek Olszewski Fotograf";

    const ImgClass = "h-full w-full object-cover image-scaleAnim";

    return (
        <>
            <section className="flex justify-center px-5 lg:py-20 py-2 opacityAnimation relative">
                <div className="w-full h-1/2 rotate-45 rounded-xl bg-gradient-to-tr from-gray-400/90 to absolute top-0 shadow-xl" />
                <div className="flex justify-center  ">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex flex-col  max-w-7xl justify-center items-center space-y-3 w-full ">
                            <div className="flex flex-col   md:items-start items-center justify-center  space-y-3 px-8 text-center ">
                                <h1 className="text-2xl w-max md:text-7xl font-bold relative mb-20 lg:mb-4">
                                    Odkryj Sztukę Fotografii
                                    <br /> Fotograf Siedlce
                                    <span className="text-base md:text-xl absolute w-max -bottom-6 right-6 font-light">
                                        Jarek Olszewski
                                    </span>
                                </h1>
                            </div>
                            <div className="flex flex-col lg:flex-row space-x-2 space-y-3 md:space-x-6   w-full items-center justify-center scale-110 ">
                                <div className="lg:w-40 w-64 h-40  overflow-hidden rounded-xl shadow-xl ">
                                    <Image
                                        loading="eager"
                                        className={ImgClass}
                                        style={{ animationDuration: "15s" }}
                                        width={300}
                                        height={500}
                                        src={s1Img}
                                        alt={heroImgAlt}
                                    />
                                </div>
                                <div className="flex flex-row lg:flex-col space-x-3 lg:space-y-6 items-center justify-center">
                                    <div className="w-32 lg:w-40 h-32  overflow-hidden rounded-xl shadow-xl ">
                                        <Image
                                            loading="eager"
                                            className={ImgClass}
                                            style={{ animationDuration: "16s" }}
                                            width={300}
                                            height={500}
                                            src={s4Img}
                                            alt={heroImgAlt}
                                        />
                                    </div>
                                    <div className="w-32 lg:w-40 h-48  overflow-hidden rounded-xl shadow-xl ">
                                        <Image
                                            loading="eager"
                                            className={ImgClass}
                                            style={{ animationDuration: "18s" }}
                                            width={300}
                                            height={500}
                                            src={s2Img}
                                            alt={heroImgAlt}
                                        />
                                    </div>
                                </div>
                                <div className="lg:w-60 w-64 h-96 hidden lg:flex overflow-hidden rounded-xl shadow-xl ">
                                    <Image
                                        loading="eager"
                                        className={ImgClass}
                                        style={{ animationDuration: "6s" }}
                                        width={300}
                                        height={500}
                                        src={heroImg}
                                        alt={heroImgAlt}
                                    />
                                </div>
                                <div className="flex flex-row lg:flex-col space-x-3 lg:space-y-6 items-center justify-center ">
                                    <div className="w-32 lg:w-40 h-48  overflow-hidden rounded-xl shadow-xl ">
                                        <Image
                                            loading="eager"
                                            className={ImgClass}
                                            style={{ animationDuration: "16s" }}
                                            width={300}
                                            height={500}
                                            src={s1Img}
                                            alt={heroImgAlt}
                                        />
                                    </div>
                                    <div className="w-32 lg:w-40 h-32  overflow-hidden rounded-xl shadow-xl ">
                                        <Image
                                            loading="eager"
                                            className={ImgClass}
                                            style={{ animationDuration: "15s" }}
                                            width={300}
                                            height={500}
                                            src={s2Img}
                                            alt={heroImgAlt}
                                        />
                                    </div>
                                </div>
                                <div className="lg:w-40 w-64 h-40 hidden lg:flex  overflow-hidden rounded-xl shadow-xl ">
                                    <Image
                                        loading="eager"
                                        className={ImgClass}
                                        style={{ animationDuration: "16s" }}
                                        width={300}
                                        height={500}
                                        src={s3Img}
                                        alt={heroImgAlt}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="text-gray-800">
                <div class="container px-5 lg:px-12 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 lg:w-1/3">
                            <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <p class="tracking-widest text-xs  font-medium text-gray-400 mb-1">
                                    CATEGORY
                                </p>
                                <h2 class=" sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                                    Raclette Blueberry Nextious Level
                                </h2>
                                <p class="leading-relaxed mb-3">
                                    Photo booth fam kinfolk cold-pressed
                                    sriracha leggings jianbing microdosing
                                    tousled waistcoat.
                                </p>
                                <Link
                                    href="/"
                                    class="text-red-600 inline-flex items-center"
                                >
                                    Learn More
                                    <svg
                                        class="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                                <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                    <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <svg
                                            class="w-4 h-4 mr-1"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="3"
                                            ></circle>
                                        </svg>
                                        1.2K
                                    </span>
                                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                        <svg
                                            class="w-4 h-4 mr-1"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                        6
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/3">
                            <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <p class="tracking-widest text-xs  font-medium text-gray-400 mb-1">
                                    CATEGORY
                                </p>
                                <h1 class=" sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                                    Ennui Snackwave Thundercats
                                </h1>
                                <p class="leading-relaxed mb-3">
                                    Photo booth fam kinfolk cold-pressed
                                    sriracha leggings jianbing microdosing
                                    tousled waistcoat.
                                </p>
                                <Link
                                    href="/"
                                    class="text-red-600 inline-flex items-center"
                                >
                                    Learn More
                                    <svg
                                        class="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                                <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                    <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <svg
                                            class="w-4 h-4 mr-1"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="3"
                                            ></circle>
                                        </svg>
                                        1.2K
                                    </span>
                                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                        <svg
                                            class="w-4 h-4 mr-1"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                        6
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/3">
                            <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <p class="tracking-widest text-xs  font-medium text-gray-400 mb-1">
                                    CATEGORY
                                </p>
                                <h1 class=" sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                                    Selvage Poke Waistcoat Godard
                                </h1>
                                <p class="leading-relaxed mb-3">
                                    Photo booth fam kinfolk cold-pressed
                                    sriracha leggings jianbing microdosing
                                    tousled waistcoat.
                                </p>
                                <Link
                                    href="/"
                                    class="text-red-600 inline-flex items-center"
                                >
                                    Learn More
                                    <svg
                                        class="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                                <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                    <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <svg
                                            class="w-4 h-4 mr-1"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="3"
                                            ></circle>
                                        </svg>
                                        1.2K
                                    </span>
                                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                        <svg
                                            class="w-4 h-4 mr-1"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                        6
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-6 sm:py-8 lg:py-12">
                <div class="mx-auto max-w-screen-xl px-4 md:px-8">
                    <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
                        Pick your plan
                    </h2>
                    <div class="mb-6 grid gap-x-6 gap-y-12 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-x-8">
                        <div class="flex flex-col space-y-4">
                            <div class="flex flex-col gap-4 rounded-lg border p-4 pt-6">
                                <h3 class="text-center text-2xl font-semibold text-gray-800">
                                    Free
                                </h3>
                                <div class="flex items-end justify-center gap-1">
                                    <span class="text-4xl font-bold text-gray-800">
                                        $0
                                    </span>
                                    <span class="text-gray-600">/ month</span>
                                </div>
                                <div class="mb-4 flex items-center justify-center gap-1 text-sm text-gray-600">
                                    14-day money backguarantee
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-4 w-4"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <a class="block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-600 outline-none ring-red-400 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">
                                    Select Free
                                </a>
                            </div>
                            <div class="flex-1 space-y-3 rounded-lg bg-gray-100 px-4 py-6">
                                <div class="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 shrink-0 text-red-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    <span class="text-gray-600">
                                        1.000 MB file storage
                                    </span>
                                </div>
                                <div class="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 shrink-0 text-red-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    <span class="text-gray-600">
                                        2.000 MB bandwidth per month
                                    </span>
                                </div>
                                <div class="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 shrink-0 text-red-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    <span class="text-gray-600">
                                        200 tasks per month
                                    </span>
                                </div>
                                <div class="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 shrink-0 text-red-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    <span class="text-gray-600">
                                        Comunity support
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col space-y-4">
                            <div class="relative flex flex-col gap-4 rounded-lg border border-red-600 p-4 pt-6">
                                <div class="absolute inset-x-0 -top-3 flex justify-center">
                                    <span class="flex h-6 items-center justify-center rounded-full bg-red-700 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-white">
                                        POPULARNE
                                    </span>
                                </div>
                                <h3 class="text-center text-2xl font-semibold text-gray-800">
                                    Team
                                </h3>
                                <div class="flex items-end justify-center gap-1">
                                    <span class="text-4xl font-bold text-gray-800">
                                        $19
                                    </span>
                                    <span class="text-gray-600">/ month</span>
                                </div>
                                <div class="mb-4 flex items-center justify-center gap-1 text-sm text-gray-600">
                                    14-day money backguarantee
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-4 w-4"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <Link
                                    href="/"
                                    class="block rounded-lg bg-red-700 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-red-600 transition duration-100 hover:bg-red-600 focus-visible:ring active:bg-red-600 md:text-base"
                                >
                                    Select Team
                                </Link>
                            </div>
                            <div class="flex-1 space-y-3 rounded-lg bg-gray-100 px-4 py-6">
                                <div class="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 shrink-0 text-red-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    <span class="text-gray-600">
                                        Unlimited file storage
                                    </span>
                                </div>
                                <div class="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 shrink-0 text-red-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    <span class="text-gray-600">
                                        10 GB bandwidth per month
                                    </span>
                                </div>
                                <div class="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 shrink-0 text-red-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    <span class="text-gray-600">
                                        10.000 tasks per month
                                    </span>
                                </div>
                                <div class="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 shrink-0 text-red-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    <span class="text-gray-600">
                                        Email support
                                    </span>
                                </div>
                                <div class="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 shrink-0 text-red-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    <span class="text-gray-600">
                                        100 Webhooks
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col space-y-4">
                            <div class="flex flex-col gap-4 rounded-lg border p-4 pt-6">
                                <h3 class="text-center text-2xl font-semibold text-gray-800">
                                    Enterprise
                                </h3>
                                <div class="flex items-end justify-center gap-1">
                                    <span class="text-4xl font-bold text-gray-800">
                                        $49
                                    </span>
                                    <span class="text-gray-600">/ month</span>
                                </div>
                                <div class="mb-4 flex items-center justify-center gap-1 text-sm text-gray-600">
                                    14-day money backguarantee
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-4 w-4"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <a class="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-red-600 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">
                                    Select Enterprise
                                </a>
                            </div>
                            <div class="flex-1 space-y-3 rounded-lg bg-gray-100 px-4 py-6">
                                <div class="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 shrink-0 text-red-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    <span class="text-gray-600">
                                        Unlimited file storage
                                    </span>
                                </div>
                                <div class="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 shrink-0 text-red-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    <span class="text-gray-600">
                                        Unlimited bandwidth per month
                                    </span>
                                </div>
                                <div class="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 shrink-0 text-red-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    <span class="text-gray-600">
                                        1.000.000 tasks per month
                                    </span>
                                </div>
                                <div class="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 shrink-0 text-red-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    <span class="text-gray-600">
                                        Email and phone support
                                    </span>
                                </div>
                                <div class="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6 shrink-0 text-red-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    <span class="text-gray-600">
                                        Unlimited Webhooks
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
