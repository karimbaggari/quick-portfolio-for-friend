import React from 'react'

const Reviews = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const reviews = [
    {
      name: "John McCulling",
      date: "August 28, 2021",
      rating: 5,
      review: "I couldn't be happier with the photos! The attention to detail and ability to capture raw emotions is truly exceptional. The portraits of my family were stunning, and we now have memories that will last a lifetime."
    },
    {
      name: "Sophia Rodriguez",
      date: "October 5, 2022",
      rating: 4,
      review: "Fantastic experience! The photographer was professional and made me feel at ease throughout the shoot. The photos turned out beautifully, but I would have loved a few more candid moments captured."
    },
    {
      name: "Mark Williams",
      date: "March 10, 2024",
      rating: 5,
      review: "Incredible photographer with a unique ability to capture the essence of every moment. The event photos were stunning, and I couldn't have asked for a better experience. Professional, creative, and skilled!"
    }
  ]

  return (
    <div className={`py-6 sm:py-8 lg:py-12 md:py-12 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <h2 className={`mb-4 text-center text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} md:mb-8 lg:text-3xl xl:mb-12`}>
        Customer Reviews
      </h2>

      <div className={`grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:mt-[40px] md:mt-[400px] md:gap-6 sm:mt-[400px]`}>
        {reviews.map((review, index) => (
          <div key={index} className={`flex flex-col gap-3 rounded-lg border p-4 md:p-6 ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            <div>
              <span className={`block text-sm font-bold md:text-base ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{review.name}</span>
              <span className={`block text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{review.date}</span>
            </div>

            <div className="-ml-1 flex gap-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>

            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {review.review}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews
