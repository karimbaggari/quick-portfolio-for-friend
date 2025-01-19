import About from "@/components/about";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Footer />
    </div>
  );
};

export default page;
