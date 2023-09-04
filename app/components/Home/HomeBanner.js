"use client";
import React from "react";
import Image from "next/image";
import BANNERPATTERN from "@/app/assets/home/pattern_home_banner.png";
import "./../../styles/scroll.css";
const points = [
  "Widest Range of Payment Options",
  "Payment Gateway for all Businesses",
  "All Payment Methods accepted",
  "Payment Options in various languages",
  "Domestic and International Payment Processing",
];
const HomeBanner = () => {
  const scrollToSection = () => {
    const innerDivPos = document.getElementById("home_feature").offsetTop;
    const header = document.getElementById("header").clientHeight;
    window.scrollTo({ top: innerDivPos - header, behavior: "smooth" });
  };
  return (
    <section className="min-h-screen homeBanner pt-32 xl:pt-44 text-white flex justify-between flex-col">
      <div className="max-w-6xl mx-auto px-4">
        <div className="w-full xl:w-[60%] lg:w-[80%] mx-auto xl:mx-0 pb-32">
          <h6 className="text-2xl xl:text-3xl mb-4 font-montserrat">
            The future of cashless
          </h6>
          <h4 className="text-3xl lg:text-4xl xl:text-6xl font-bold font-montserrat">
            New world in case
            <br />
            of transaction
          </h4>
          <p className="py-8 text-white/90 font-light">
            We process domestic and international payments through various
            financial channels securely and efficiently for your customers. Our
            payment gateway is designed and developed to facilitate merchants
            payment processing requirements, globally!
          </p>
          <div className="flex flex-col gap-2 xl:gap-4">
            {points.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="before:bg-[url('./assets/check_point.png')] before:w-4 before:h-4 xl:before:w-6 xl:before:h-6 before:bg-cover flex gap-4 text-sm xl:text-base text-white/90 font-light"
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="scrolldown" onClick={scrollToSection}>
        <div className="chevrons">
          <div className="chevrondown"></div>
          <div className="chevrondown"></div>
        </div>
      </div>
      <Image
        src={BANNERPATTERN}
        style={{
          maxWidth: "100%",
          height: "auto",
          margin: "0 auto",
          width: "100%",
        }}
        alt="pattern"
      />
    </section>
  );
};

export default HomeBanner;
