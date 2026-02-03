import React from "react";
import config from "../index.json";

const Hero = () => {
  const hero = config.hero;

  return (
    <section className="h-screen bg-white overflow-x-hidden">
      <div className="px-52 flex flex-col lg:flex-row items-center justify-center h-full gap-8">

        {/* Left Column - Introduction */}
        <div className="flex flex-col justify-center lg:w-1/2 w-full items-center h-full">
          <h1 className="text-6xl font-bold tracking-wide">
            Hi, my name is  
            <span className="ml-3 whitespace-nowrap text-primary bg-clip-text">
              {hero.name}
            </span>
          </h1>
          <h1 className="text-2xl font-bold tracking-wide mt-4">{hero.subtitle}</h1>
          <a href="#About" className="text-2xl font-bold p-0.5 mt-6 w-44">
            <div>
              <span className="block text-center py-0.5 px-2 font-semibold text-secondary bg-clip-text">
                Know more
              </span>
            </div>
          </a> 
        </div>

        {/* Right Column - Picture */}
        <div className="lg:w-1/2 flex items-center justify-left w-full h-auto">
          <img 
            src={hero.picture}
            alt={hero.name}
            className="w-full max-w-md rounded-lg shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;