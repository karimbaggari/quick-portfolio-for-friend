"use client"
import Image from "next/image";
import Footer from "./footer";
import Navbar from "./navbar";
import { useTheme } from "@/hooks/useTheme";

const Gallery = () => {
  const Images = [
    "https://ik.imagekit.io/p2myilloy/assets/food/1.jpg",
    "https://ik.imagekit.io/p2myilloy/assets/food/2.jpg",
    "https://ik.imagekit.io/p2myilloy/assets/food/3.jpg",
    "https://ik.imagekit.io/p2myilloy/assets/food/4.jpg",
    "https://ik.imagekit.io/p2myilloy/assets/food/5.jpg",
    "https://ik.imagekit.io/p2myilloy/assets/food/6.jpg",
  ];
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div className={isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <button
        onClick={toggleTheme}
        className={`p-2 ${isDarkMode ? "bg-gray-900" : "bg-gray-200"} absolute top-0 right-0 rounded`}
      >
        Toggle Theme
      </button>
      <Navbar isDarkMode={isDarkMode} />
      <div className={`py-6 sm:py-8 lg:py-12 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className={`mb-4 text-center text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"} md:mb-8 lg:text-3xl xl:mb-12`}>
            Photography
          </h2>

          <div className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-3 md:gap-6 xl:gap-8">
            {Images.map((src, index) => (
              <a
                key={index}
                href="#"
                className={`group relative flex items-end overflow-hidden rounded-lg ${isDarkMode ? "bg-gray-900" : "bg-gray-100"} shadow-lg h-[450px]`}
              >
                <Image
                  src={src}
                  width={550}
                  height={550}
                  loading="lazy"
                  alt={`Photo ${index + 1}`}
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${isDarkMode ? "from-gray-900" : "from-gray-800"} via-transparent to-transparent opacity-50`}></div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default Gallery;
