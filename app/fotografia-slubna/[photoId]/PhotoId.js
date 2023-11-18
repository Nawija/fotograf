"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function PhotoId({
  photos,
  nextPhotoId,
  prevPhotoId,
  photoIndex,
}) {
  const router = useRouter();
  const arrowBtn =
    "p-2 border font-semibold rounded-lg bg-gray-100 text-gray-900 absolute top-[100%] lg:top-1/2 hover:bg-white hover:text-red-600 transition-colors";

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = touchEndX.current - touchStartX.current;

    if (deltaX > 50) {
      // Swipe right, go to the previous link
      router.push(`/fotografia-slubna/${prevPhotoId}`);
    } else if (deltaX < -50) {
      // Swipe left, go to the next link
      router.push(`/fotografia-slubna/${nextPhotoId}`);
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  useEffect(() => {
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [router, prevPhotoId, nextPhotoId]);

  return (
    <div className="flex items-start justify-center">
      <div
        className={`p-1 lg:p-6 flex items-center justify-center text-center mx-auto top-0 left-0 h-full w-full relative`}
      >
        <Link
          href={`/fotografia-slubna/${nextPhotoId}`}
          className={`${arrowBtn} lg:left-2 left-0`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
        </Link>
        <div className="w-full min-h-[86vh] max-h-[86vh] relative flex items-center justify-center overflow-hidden -z-10 object-fill">
          <img
            className="w-full lg:w-auto h-auto object-fill"
            src={photos[photoIndex].url}
            alt="photo"
          />
        </div>
        <Link
          href={`/fotografia-slubna/${prevPhotoId}`}
          className={`${arrowBtn} lg:right-2 right-0`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
