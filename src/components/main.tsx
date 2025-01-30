"use client"
import Footer from '@/components/footer';
import Header from '@/components/header';
import Navbar from '@/components/navbar';
import Reviews from '@/components/reviews';
import Section from '@/components/section';
import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import Projects from '@/components/projects';

const App = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={isDarkMode ? 'bg-gray-900' : 'bg-white'}>
      <button onClick={toggleTheme} className="p-2 bg-gray-200 absolute top-0 right-0 rounded">
        Toggle Theme
      </button>
      <Navbar isDarkMode={isDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <Section isDarkMode={isDarkMode} />
      <Projects />
      <Reviews isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;