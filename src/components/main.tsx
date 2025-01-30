"use client"
import Header from '@/components/header';
import Navbar from '@/components/navbar';
import Reviews from '@/components/reviews';
import Section from '@/components/section';
import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import Projects from '@/components/projects';
import { ThemeToggle } from './toggleTheme';

const App = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={isDarkMode ? 'bg-gray-900' : 'bg-white'}>
    <div className="flex justify-end relative top-2 right-4"> 
     <ThemeToggle theme={isDarkMode} setTheme={toggleTheme} />
     </div>
    
     <Navbar isDarkMode={isDarkMode} />
      <Header isDarkMode={isDarkMode} />

      <Section isDarkMode={isDarkMode} />
      <Reviews isDarkMode={isDarkMode} />      
      <Projects isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;