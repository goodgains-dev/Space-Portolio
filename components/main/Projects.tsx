import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Our Products
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/nextwebsite.PNG"
          title="Your social productivity App"
          description="streamline communication with GoodGains Work, with a UI that's not only intuitive but fully customizable."
        />
        <ProjectCard
          src="/Customize.PNG"
          title="End to End Customization"
          description="Fully customizable with your choice of level of data encryption, themes, AI model, and even different fonts."
        />
        <ProjectCard
          src="/Chat.PNG"
          title="Socialize and Chat"
          description="This all-in-one solution is designed to enhance collaboration, socialize in your digital third place, and optimize scheduling, making it an indispensable tool for both educational institutions and businesses."
        />
      </div>
    </div>
  );
};

export default Projects;
