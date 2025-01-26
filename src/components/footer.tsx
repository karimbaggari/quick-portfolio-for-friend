import React from 'react'

const Footer = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <footer className={`py-6 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className={`mx-auto max-w-screen-2xl px-4 md:px-8 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        <div className="flex flex-col items-center">
          <p className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2025 Omis Visual. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
