"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Info } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/hooks/useTheme";
import Navbar from "./navbar";
import Footer from "./footer";

const projects = [
  { src: "/assets/fitness_projects/1.mp4", title: "Urban Fitness" },
  { src: "/assets/fitness_projects/2.mp4", title: "Nature Workout" },
  { src: "/assets/fitness_projects/3.mp4", title: "Studio Session" },
  { src: "/assets/fitness_projects/4.mp4", title: "Beach Training" },
  { src: "/assets/fitness_projects/5.mp4", title: "Mountain Challenge" },
  { src: "/assets/fitness_projects/6.mp4", title: "City Run" },
  { src: "/assets/fitness_projects/7.mp4", title: "Gym Intensity" },
  { src: "/assets/fitness_projects/8.mp4", title: "Yoga Serenity" },
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
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg shadow-lg ${
        index === 0 ? "col-span-2 row-span-2" : ""
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

export default function VideoShowcase() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div
      className={
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }
    >
      <button
        onClick={toggleTheme}
        className={`p-2 ${
          isDarkMode ? "bg-gray-900" : "bg-gray-200"
        } absolute top-0 right-0 rounded`}
      >
        Toggle Theme
      </button>
      <Navbar isDarkMode={isDarkMode} />
      <div className={`min-h-screen ${isDarkMode ? "bg-gray-900" : "bg-white"} ${isDarkMode ? "text-white" : "text-gray-900"} py-12`}>
        <div className="container mx-auto px-4">
          <h1 className={`text-4xl font-bold mb-8 text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Fitness in Motion
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[300px]">
            {projects.map((project, index) => (
              <VideoCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>
      </div>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
