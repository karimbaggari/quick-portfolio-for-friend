import Image from "next/image";
import Link from "next/link";

const Header = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <section className={`mx-auto max-w-screen-2xl px-4 md:px-8 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="flex flex-wrap justify-between ">
        <div className={`flex w-full flex-col justify-center lg:w-1/3 lg:pb-24 lg:pt-48 ${isDarkMode ? 'text-white' : 'text-black'}`}>
          <h1 className="text-4xl font-bold sm:text-5xl leading-tight mb-6">
            Omis Visual
            <br />
            Photography
          </h1>

          <p className={`max-w-md leading-relaxed xl:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-900'} leading-relaxed mb-8`}>
            Explore a collection of moments, frozen in time. Each photograph tells a unique story, from intimate portraits to breathtaking landscapes. Discover your perfect shot today.
            <span className="text-indigo-700 font-bold">
              &nbsp;&nbsp;&nbsp;Capture Your Story
            </span>
          </p>
        </div>

        <div className=" flex w-full  lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              src="https://ik.imagekit.io/p2myilloy/assets/about.jpeg"
              loading="lazy"
              width={550}
              height={550}
              alt="Photo by Kaung Htet"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src="https://ik.imagekit.io/p2myilloy/assets/pic2.JPG"
              loading="lazy"
              width={550}
              height={550}
              alt="Photo by Manny Moreno"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className={`flex h-12 w-80 divide-x overflow-hidden rounded-lg border ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>

          <Link
            href="/food"
            className={`flex w-1/2 items-center justify-center transition duration-100 ${isDarkMode ? 'text-white hover:bg-gray-700 active:bg-gray-600' : 'text-gray-500 hover:bg-gray-100 active:bg-gray-200'}`}
          >
            Food
          </Link>
          <Link
            href="/photography"
            className={`flex w-1/2 items-center justify-center transition duration-100 ${isDarkMode ? 'text-white hover:bg-gray-700 active:bg-gray-600' : 'text-gray-500 hover:bg-gray-100 active:bg-gray-200'}`}
          >
            Photography
          </Link>
       

        </div>

        <div className="flex items-center justify-center gap-4 lg:justify-start">
          <span className={`text-sm font-semibold uppercase tracking-widest ${isDarkMode ? 'text-gray-400' : 'text-gray-400'} sm:text-base`}>
            Social
          </span>
          <span className="h-px w-12 bg-gray-200"></span>

          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/omis.visual/"
              target="_blank"
              className={`transition duration-100 ${isDarkMode ? 'text-gray-400 hover:text-gray-500 active:text-gray-600' : 'text-gray-400 hover:text-gray-500 active:text-gray-600'}`}
            >
              <svg
                className="h-5 w-5"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
