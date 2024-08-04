import ProjectSlider from "@/components/main/ProjectSlider";
import React from "react";

const Page = () => {
  return (
    <div className="flex items-center justify-center gap-5 flex-col md:flex-row h-screen bg-[#0C011A]">

      <div className="flex flex-col gap-3">
        <h1 className="text-[50px] text-white font-semibold">
          Digital Third Place<span className="text-red-500">.</span>
        </h1>
        <p className="max-w-[400px] text-[16px] text-gray-200 md:text-gray-400">
          Use our badge system on our apps to show off your affliation or interests. Can also be used to show off your skills or achievements.
        </p>
      </div>
      <ProjectSlider /> 
    </div>
  );
};

export default Page;
