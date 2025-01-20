import React from "react";
import Image from "next/image";
const about = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div>
            <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
              <Image
                src={"/assets/about.jpeg"}
                width={500}
                height={500}
                alt="About"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="md:pt-8">
            <p className="text-center font-bold text-indigo-500 md:text-left">
              Who am i
            </p>

            <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
              Mohammed Abada
            </h1>
            <h2>Rabat, Morocco</h2>
            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
              Experienced Video Editor, Videographer, and Photographer with over 7 years of expertise in producing commercial content, fitness videos, food photography, and behind-the-scenes footage. Skilled in managing all phases of production, from concept to post-production, with a proven ability to meet tight deadlines while maintaining exceptional quality. Passionate about crafting visually compelling stories that highlight the unique aspects of brands and exceed client expectations.
            </p>

            <h2 className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
              About us
            </h2>

            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated. It may be used to
              display a sample of fonts or generate text for testing. Filler
              text is dummy text which has no meaning however looks very similar
              to real text.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
