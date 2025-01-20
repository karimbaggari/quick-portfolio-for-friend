import React from 'react'

const Footer = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <footer className={`py-6 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className={`mx-auto max-w-screen-2xl px-4 md:px-8 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        <div className="flex flex-col items-center">
          <p className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2023 Your Company. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className={`transition duration-100 ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-500'}`}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className={`transition duration-100 ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-500'}`}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
