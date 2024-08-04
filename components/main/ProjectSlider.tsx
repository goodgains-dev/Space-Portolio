"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { ProImages, ProImages2 } from "@/constants";
import Image from "next/image";

const ProjectSlider = () => {
  return (
    <div className="w-[70%] md:w-[40%]">
      <Swiper
        breakpoints={{
          700: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
      >
        <SwiperSlide className="mb-14">
          <div className="grid grid-cols-2 gap-4 md:px-16">
            {ProImages.map((image) => (
              <div
                className="relative group w-[150px] h-[150px]  md:w-[230px] md:h-[230px]"
                key={image.src}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  width={280}
                  height={280}
                  className="rounded-md h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-500 text-white">
                  <div className="text-center">
                    <div className="text-lg md:text-xl font-semibold">
                      {image.title}
                    </div>
                    <div className="text-sm md:text-base mt-2">
                      {image.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide className="mb-14">
          <div className="grid grid-cols-2 gap-4 md:px-16">
            {ProImages2.map((image) => (
              <div
                className="relative group w-[150px] h-[150px]  md:w-[230px] md:h-[230px]"
                key={image.src}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  width={280}
                  height={280}
                  className="rounded-md w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-70 text-white">
                  <div className="text-center">
                    <div className="text-lg md:text-xl font-semibold">
                      {image.title}
                    </div>
                    <div className="text-sm md:text-base mt-2">
                      {image.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProjectSlider;
