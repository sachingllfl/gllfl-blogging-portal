"use client";
import Image from "next/image";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import Link from "next/link";
import { featuresData } from "@/app/utils/featureData";
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
const HomeFeature = () => {
  return (
    <section className="py-8" id="home_feature">
      <div className="max-w-6xl mx-auto px-4">
        <div className="px-4 lx:px-36">
          <h6 className="text-xl md:text-3xl xl:text-5xl text-center font-bold">
            Explore all features of India Online Pay powered by GLLFL
          </h6>
          <div className="flex gap-3 items-center justify-center pt-8 xl:pt-12 pb-6 flex-col md:flex-row">
            <div className="w-full">
              <input
                type="text"
                placeholder="How can we help"
                className=" border border-slate-100 drop-shadow flex items-center justify-center gap-2 self-start group py-1.5 px-4 text-sm lg:text-base lg:py-3 lg:px-8 rounded lg:rounded-lg shrink-0 w-full outline-none focus:drop-shadow-2xl transition-all duration-300"
              />
            </div>
            <button className="bg-custom_blue text-white flex items-center justify-center gap-2 self-start group py-1.5 px-4 text-sm lg:text-base lg:py-3 lg:px-8 rounded lg:rounded-lg shrink-0">
              Find a solution{" "}
              <HiArrowLongRight className="group-hover:translate-x-2 transition-all duration-150" />
            </button>
          </div>
          <p className="text-center">
            India Online Pay encompasses an array of features to facilitate your
            payment process!
          </p>
        </div>
        <div>
          <Swiper
            modules={[A11y, Autoplay]}
            slidesPerView={1}
            spaceBetween={10}
            autoplay={true}
            loop={true}
            className="homeFeatureSwiper !px-0 md:!px-8 !pt-6 !pb-10"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {featuresData?.map((item, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <Link
                    href={"/"}
                    className="py-6 pb-8 px-4 rounded-lg hover:shadow-xl transition-all duration-300 block text-center"
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={150}
                      height={150}
                      className="mx-auto mb-5"
                    />
                    <div className="md:text-xl font-semibold  font-montserrat mb-3 ">
                      {item.title}
                    </div>
                    <p className="line-clamp-5">
                      A multi-currency processing service not only enhances the
                      image of your company but it also gives you and your
                      company a competitive edge! You can now improve your
                      customers
                    </p>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HomeFeature;
