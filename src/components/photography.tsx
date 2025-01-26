import Image from "next/image";

const gallery = () => {
    const Images = [
        "/assets/photography/1.jpg",
        "/assets/photography/2.jpg",
        "/assets/photography/3.jpg",
        "/assets/photography/4.jpg",
        "/assets/photography/5.jpg",
        "/assets/photography/6.jpg",
        "/assets/photography/7.jpg",
        "/assets/photography/8.jpg",
        "/assets/photography/9.jpg",
        "/assets/photography/10.jpg",
        "/assets/photography/11.jpg",
        "/assets/photography/12.jpg",
        "/assets/photography/13.jpg",
        "/assets/photography/14.jpg",
        "/assets/photography/15.jpg",
        "/assets/photography/16.jpg",
        "/assets/photography/17.jpg",
        "/assets/photography/18.jpg",
        "/assets/photography/19.jpg",
        "/assets/photography/20.jpg",
        "/assets/photography/21.jpg",
        "/assets/photography/22.jpg",
        "/assets/photography/23.jpg",
        "/assets/photography/24.jpg",
        "/assets/photography/25.jpg",
        "/assets/photography/26.jpg",
        "/assets/photography/27.jpg",
        "/assets/photography/28.jpg",
        "/assets/photography/29.jpg",
        "/assets/photography/30.jpg",
        "/assets/photography/31.jpg",
    ]
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
          Photography
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

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Image {index + 1}
              </span>
            </a>
          ))}
        </div>
     
      </div>
    </div>
  )
}

export default gallery
