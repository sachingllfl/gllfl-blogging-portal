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
const points = [
  "You can be a Developer, Designer, Blogger, Freelancer or A Digital Marketing agency to participate in our affiliate partner program.",
  "Our affiliate partner program is also for for various types of companies such as a co-working company or companies that offer SaaS.",
  "You could also be a group of evangelists/investors to participate in our affiliate partner program.",
  "IOP's affiliate program is for everyone who wants to offer their customers a comprehensive payment gateway solution and more!",
  "In addition, you can keep on carrying residual commission till the time merchant continues their business online!",
];
const AffiliateFeature = () => {
  return (
    <section className="py-8" id="home_feature">
      <div className="max-w-6xl mx-auto px-4">
        <div className="px-4 lx:px-36 ">
          <h6 className="text-xl md:text-3xl xl:text-5xl text-center font-bold py-4">
            Who can become
            <br />
            an Affiliate partner?
          </h6>
          <div className="max-w-5xl mx-auto text-left py-4">
            <div className="flex flex-col gap-2 xl:gap-4 span-y-4">
              {points.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="before:bg-[url('./assets/check_point.png')] before:w-4 before:h-4 xl:before:w-6 xl:before:h-6 before:bg-cover flex gap-4 text-sm xl:text-base  font-light text-slate-900"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          {/* <Swiper
            modules={[A11y, Autoplay]}
            slidesPerView={1}
            spaceBetween={10}
            autoplay={true}
            loop={true}
            className="AffiliateFeatureSwiper !px-0 md:!px-8 !pt-6 !pb-10"
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
          </Swiper> */}
        </div>
      </div>
    </section>
  );
};

export default AffiliateFeature;
