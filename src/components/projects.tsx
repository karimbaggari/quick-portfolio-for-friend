"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Info } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "./footer";

const projects = [
  { src: "https://ik.imagekit.io/p2myilloy/fitness_projects/5.mp4", title: "Urban Fitness" },
  { src: "https://ik.imagekit.io/p2myilloy/fitness_projects/7.mp4", title: "Nature Workout" },
];

const VideoCard = ({
  src,
  title,
  index,
}: {
  src: string;
  title: string;
  index: number;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const parallaxOffset = useParallax(0.2);

  const togglePlay = () => {
    const video = document.getElementById(`video-${index}`) as HTMLVideoElement;
    if (video.paused) {
      video.currentTime = video.duration;
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg shadow-lg ${index === 0 ? "col-span-2 row-span-2" : ""
        }`}
      style={{ y: parallaxOffset }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <video
        id={`video-${index}`}
        src={src}
        className="w-full h-full object-cover"
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 hover:bg-opacity-20">
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={togglePlay}
            className="text-white"
          >
            {isPlaying ? (
              <Pause className="h-6 w-6" />
            ) : (
              <Play className="h-6 w-6" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowInfo(!showInfo)}
            className="text-white"
          >
            <Info className="h-6 w-6" />
          </Button>
        </div>
      </div>
      {showInfo && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center"
        >
          <Card className="bg-transparent border-none text-white">
            <CardContent>
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p>A captivating fitness journey captured on film.</p>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </motion.div>
  );
};

export default function VideoShowcase({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div className={`h-[650px] ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>

      <div
        className={
          isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }
      >
        <div className={`${isDarkMode ? "bg-gray-900" : "bg-white"} ${isDarkMode ? "text-white" : "text-gray-900"} py-12`}>
          <div className="container mx-auto px-4">
            <h1 className={`text-4xl font-bold mb-8 text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Click to view
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[300px]">
              {projects.map((project, index) => (
                <VideoCard key={index} {...project} index={index} />
              ))}
            </div>
          </div>

        </div>

      </div>
      <div className="flex items-center justify-center mt-20 p-[15px] relative bottom-20 gap-4 lg:justify-center">
        <span className={`text-sm font-semibold uppercase tracking-widest ${isDarkMode ? 'text-gray-400' : 'text-gray-400'} sm:text-base`}>
          More Projects on Instagram to see !
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
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}