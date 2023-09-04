"use client";
import React from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import TestimonialCard from "../Sliders/TestimonialCard";
const HomeTestimonial = () => {
  return (
    <section className="py-12 xl:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h6 className="text-xl md:text-3xl xl:text-5xl text-center font-bold mb-8 lg:mb-16 ">
          An Experience
          <br />
          People Love to Talk About
        </h6>
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          autoplay={true}
          loop={true}
          pagination={{ clickable: true }}
          //   onSwiper={(swiper) => console.log(swiper)}
          //   onSlideChange={() => console.log("slide change")}
          className="homeSwiper"
        >
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default HomeTestimonial;
