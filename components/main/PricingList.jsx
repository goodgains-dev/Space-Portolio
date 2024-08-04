import { pricing } from "@/constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="relative z-20 flex gap-12 flex-wrap justify-center text-white">
      {pricing.map((item) => (
        <div
          key={item.id}
          className={`relative w-full md:w-[19rem] h-full px-6 py-8 rounded-[2rem] ${
            item.id === "0"
              ? "bg-gradient-to-r from-purple-500 to-pink-500"
              : item.id === "1"
              ? "bg-gradient-to-r from-green-500 to-blue-500"
              : "bg-gradient-to-r from-yellow-500 to-blue-500"
          }`}
        >
          <h4 className="text-[24px] font-semibold mb-4 text-white">{item.title}</h4>

          <p className="text-[16px] min-h-[4rem] mb-3 text-white">
            {item.description}
          </p>

          <div className="flex items-center h-[5.5rem] mb-6 text-white">
            {item.price && (
              <>
                <div className="text-[24px] font-bold">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>

          <div className="flex flex-col space-y-4 z-10 relative">
            {(item.id === "0" || item.id === "1") && (
              <Button href="https://goodgainswork.com" className="w-full">
                Get started
              </Button>
            )}
            {item.id === "2" && (
              <Button
                href="mailto:austinkarisny@goodgainsexchange.com"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-500 hover:from-blue-400 hover:via-green-600 hover:to-blue-400"
              >
                Contact us
              </Button>
            )}
          </div>

          <ul className="mt-4">
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-white text-white"
              >
                <p className="text-[16px] ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
