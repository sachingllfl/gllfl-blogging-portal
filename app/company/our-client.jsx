import React from "react";
import Image from "next/image";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ELOGO1 from "@/app/assets/company/clients/ELOGO1.jpg";
import ELOGO2 from "@/app/assets/company/clients/ELOGO2.jpg";
import ELOGO3 from "@/app/assets/company/clients/ELOGO3.jpg";
import ELOGO4 from "@/app/assets/company/clients/ELOGO4.jpg";
import SLOGO1 from "@/app/assets/company/clients/SLOGO1.jpg";
import SLOGO2 from "@/app/assets/company/clients/SLOGO2.jpg";
import SLOGO3 from "@/app/assets/company/clients/SLOGO3.jpg";
import SLOGO4 from "@/app/assets/company/clients/SLOGO4.jpg";
import TLOGO1 from "@/app/assets/company/clients/TLOGO1.jpg";
import TLOGO2 from "@/app/assets/company/clients/TLOGO2.jpg";
import TLOGO3 from "@/app/assets/company/clients/TLOGO3.jpg";
import TLOGO4 from "@/app/assets/company/clients/TLOGO4.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
const travelData = {
  title: "Travel",
  logos: [
    {
      logo: TLOGO1,
    },
    {
      logo: TLOGO2,
    },
    {
      logo: TLOGO3,
    },
    {
      logo: TLOGO4,
    },
    {
      logo: TLOGO1,
    },
    {
      logo: TLOGO2,
    },
    {
      logo: TLOGO3,
    },
    {
      logo: TLOGO4,
    },
  ],
};
const shoppingData = {
  title: "Shopping",
  logos: [
    {
      logo: SLOGO1,
    },
    {
      logo: SLOGO2,
    },
    {
      logo: SLOGO3,
    },
    {
      logo: SLOGO4,
    },
    {
      logo: SLOGO1,
    },
    {
      logo: SLOGO2,
    },
    {
      logo: SLOGO3,
    },
    {
      logo: SLOGO4,
    },
  ],
};
const educationData = {
  title: "Education",
  logos: [
    {
      logo: ELOGO1,
    },
    {
      logo: ELOGO2,
    },
    {
      logo: ELOGO3,
    },
    {
      logo: ELOGO4,
    },
    {
      logo: ELOGO1,
    },
    {
      logo: ELOGO2,
    },
    {
      logo: ELOGO3,
    },
    {
      logo: ELOGO4,
    },
  ],
};
const OurClient = () => {
  return (
    <>
      <section>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center px-0 lg:px-20">
            India Online Pay is India biggest and the most popular payment
            gateway solution, which is currently processing e-commerce
            transactions of thousands of eMerchants.
            <br />
            <br />A partial list of eMerchants using the India Online Payment
            Gateway solution is displayed below:-
          </div>
          <div className="space-y-12 py-8">
            {travelData?.title && (
              <div>
                <div className="text-center text-custom_orange font-bold text-xl">
                  {travelData?.title}
                </div>
                <Swiper
                  modules={[Navigation, A11y, Autoplay]}
                  spaceBetween={0}
                  slidesPerView={2}
                  navigation
                  autoplay={true}
                  loop={true}
                  className="logoSwiper"
                  breakpoints={{
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 30,
                    },
                  }}
                >
                  {travelData?.logos.map((logo, idx) => {
                    return (
                      <SwiperSlide key={idx} className="p-4">
                        <div className="hover:shadow-md transition-all duration-300 rounded-xl w-full">
                          <Image
                            src={logo.logo}
                            alt="logo client"
                            className="mx-auto"
                            style={{ maxWidth: "100%" }}
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            )}
            {shoppingData?.title && (
              <div>
                <div className="text-center text-custom_orange font-bold text-xl">
                  {shoppingData?.title}
                </div>
                <Swiper
                  modules={[Navigation, A11y, Autoplay]}
                  spaceBetween={0}
                  slidesPerView={2}
                  navigation
                  autoplay={true}
                  loop={true}
                  className="logoSwiper"
                  breakpoints={{
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 30,
                    },
                  }}
                >
                  {shoppingData?.logos.map((logo, idx) => {
                    return (
                      <SwiperSlide key={idx} className="p-4">
                        <div className="hover:shadow-md transition-all duration-300 rounded-xl w-full">
                          <Image
                            src={logo.logo}
                            alt="logo client"
                            className="mx-auto"
                            style={{ maxWidth: "100%" }}
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            )}
            {educationData?.title && (
              <div>
                <div className="text-center text-custom_orange font-bold text-xl">
                  {educationData?.title}
                </div>
                <Swiper
                  modules={[Navigation, A11y, Autoplay]}
                  spaceBetween={0}
                  slidesPerView={2}
                  navigation
                  autoplay={true}
                  loop={true}
                  className="logoSwiper"
                  breakpoints={{
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 30,
                    },
                  }}
                >
                  {educationData?.logos.map((logo, idx) => {
                    return (
                      <SwiperSlide key={idx} className="p-4">
                        <div className="hover:shadow-md transition-all duration-300 rounded-xl w-full">
                          <Image
                            src={logo.logo}
                            alt="logo client"
                            className="mx-auto"
                            style={{ maxWidth: "100%" }}
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurClient;
