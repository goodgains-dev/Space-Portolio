import React from "react";
import PricingList from "@/components/main/PricingList";
import { LeftLine, RightLine } from "@/components/sub/Pricing2";

const Pricing = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4" id="pricing">
      <h1 className="text-[48px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 text-center">
        Pricing
      </h1>
      <h2 className="text-[24px] font-medium text-gray-300 mb-10 text-center">
        Choose the plan that&apos;s right for you
      </h2>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1200px] flex justify-center">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <a
          className="text-sm font-bold tracking-wider uppercase border-b text-white"
          href="/pricing"
        >
        </a>
      </div>
    </div>
  );
};

export default Pricing;
