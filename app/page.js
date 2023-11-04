import Image from "next/image";
import heroImg from "../images/jarek-olszewski.jpg";
import s1Img from "../images/s1.jpg";
import s2Img from "../images/s2.jpg";
import s3Img from "../images/s3s.jpg";
import s4Img from "../images/s4.jpg";

export default function Home() {
    const heroImgAlt = "Jarek Olszewski Fotograf";

    const ImgClass = "h-full w-full object-cover image-scaleAnim";

    return (
        <div className="flex justify-center px-5 lg:py-20 py-2 opacityAnimation">
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
                            <div className="lg:w-40 w-64 h-40  overflow-hidden rounded-xl ">
                                <Image
                                    className={ImgClass}
                                    style={{ animationDuration: "15s" }}
                                    width={300}
                                    height={500}
                                    src={s1Img}
                                    alt={heroImgAlt}
                                />
                            </div>
                            <div className="flex flex-row lg:flex-col space-x-3 lg:space-y-6 items-center justify-center">
                                <div className="w-32 lg:w-40 h-32  overflow-hidden rounded-xl ">
                                    <Image
                                        className={ImgClass}
                                        style={{ animationDuration: "16s" }}
                                        width={300}
                                        height={500}
                                        src={s4Img}
                                        alt={heroImgAlt}
                                    />
                                </div>
                                <div className="w-32 lg:w-40 h-48  overflow-hidden rounded-xl ">
                                    <Image
                                        className={ImgClass}
                                        style={{ animationDuration: "18s" }}
                                        width={300}
                                        height={500}
                                        src={s2Img}
                                        alt={heroImgAlt}
                                    />
                                </div>
                            </div>
                            <div className="lg:w-60 w-64 h-96 hidden lg:flex overflow-hidden rounded-xl ">
                                <Image
                                    className={ImgClass}
                                    style={{ animationDuration: "7s" }}
                                    width={300}
                                    height={500}
                                    src={heroImg}
                                    alt={heroImgAlt}
                                />
                            </div>
                            <div className="flex flex-row lg:flex-col space-x-3 lg:space-y-6 items-center justify-center ">
                                <div className="w-32 lg:w-40 h-48  overflow-hidden rounded-xl ">
                                    <Image
                                        className={ImgClass}
                                        style={{ animationDuration: "16s" }}
                                        width={300}
                                        height={500}
                                        src={s1Img}
                                        alt={heroImgAlt}
                                    />
                                </div>
                                <div className="w-32 lg:w-40 h-32  overflow-hidden rounded-xl ">
                                    <Image
                                        className={ImgClass}
                                        style={{ animationDuration: "15s" }}
                                        width={300}
                                        height={500}
                                        src={s2Img}
                                        alt={heroImgAlt}
                                    />
                                </div>
                            </div>
                            <div className="lg:w-40 w-64 h-40 hidden lg:flex  overflow-hidden rounded-xl ">
                                <Image
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
        </div>
    );
}
