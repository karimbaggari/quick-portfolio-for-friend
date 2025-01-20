import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Navbar from "@/components/navbar";
import React from "react";
import { useTheme } from '@/hooks/useTheme';

const page = () => {
  // const { isDarkMode } = useTheme();
  return (
    <>
      <Navbar isDarkMode={isDarkMode} />
      <Gallery />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
};

export default page;
