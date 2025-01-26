import Image from "next/image";

const section = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <div className={`py-6 sm:py-8 lg:py-12 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className={`mx-auto max-w-screen-2xl px-4 md:px-8 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} lg:text-3xl`}>Collections</h2>
  
          <a href="#" className={`inline-block rounded-lg border ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-500'} ${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'} px-4 py-2 text-center text-sm font-semibold outline-none ring-indigo-300 transition duration-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base`}>Show more</a>
        </div>
  
        <div className="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          <div>
            <a href="#" className={`group mb-2 block h-96 overflow-hidden rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} shadow-lg lg:mb-3`}>
              <Image src="/assets/about.jpeg" width={550} height={550} loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>
          </div>
  
          <div>
            <a href="#" className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
              <Image src="/assets/about.jpeg" width={550} height={550} loading="lazy" alt="Photo by engin akyurt" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>
           </div>
          <div>
            <a href="#" className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
              <Image src="/assets/about.jpeg" width={550} height={550} loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>
          </div>
          <div>
            <a href="#" className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
              <Image src="/assets/about.jpeg" width={550} height={550} loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default section
