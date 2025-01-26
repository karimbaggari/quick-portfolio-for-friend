"use client";
import Image from "next/image";
import Footer from "./footer";
import Navbar from "./navbar";
import { useTheme } from "@/hooks/useTheme";

const Gallery = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const Images = [
    "/assets/photography/1.jpg",
    "/assets/photography/2.jpg",
    "/assets/photography/3.jpg",
    "/assets/photography/4.jpg",
    "/assets/food/1.jpg",
    "/assets/food/2.jpg",
    "/assets/food/3.jpg",
    "/assets/photography/11.jpg",
    "/assets/photography/12.jpg",
    "/assets/photography/13.jpg",
    "/assets/photography/14.jpg",
    "/assets/photography/15.jpg",
    "/assets/photography/16.jpg",
    "/assets/photography/17.jpg",
    "/assets/photography/18.jpg",
    "/assets/photography/19.jpg",
    "/assets/food/4.jpg",
    "/assets/food/5.jpg",
    "/assets/food/6.jpg",
    "/assets/photography/20.jpg",
    "/assets/photography/21.jpg",
    "/assets/photography/22.jpg",
    "/assets/photography/23.jpg",
    "/assets/photography/25.jpg",
    "/assets/photography/26.jpg",
    "/assets/photography/27.jpg",
    "/assets/photography/28.jpg",
    "/assets/photography/29.jpg",
  ];
  return (
    <div
      className={
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }
    >
      <Navbar isDarkMode={isDarkMode} />
      <div
        className={`${
          isDarkMode ? "bg-gray-900" : "bg-white"
        } py-6 sm:py-8 lg:py-12`}
      >
        <button
          onClick={toggleTheme}
          className="p-2 bg-gray-200 absolute top-0 right-0 rounded"
        >
          Toggle Theme
        </button>
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className={`mb-4 text-center text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} md:mb-8 lg:text-3xl xl:mb-12`}>
            Gallery
          </h2>

          <div className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 md:gap-6 xl:gap-8">
            {Images.map((src, index) => (
              <a
                key={index}
                href="#"
                className="group relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg h-[450px]"
              >
                <Image
                  src={src}
                  width={550}
                  height={550}
                  loading="lazy"
                  alt={`Photo ${index + 1}`}
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent ${isDarkMode ? 'opacity-50' : 'opacity-30'}`}></div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer isDarkMode={isDarkMode} />
    </div>
  )
}

export default Gallery
