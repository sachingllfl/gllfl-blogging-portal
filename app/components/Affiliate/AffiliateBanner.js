"use client";
import React from "react";
import Image from "next/image";
import BANNERPATTERN from "@/app/assets/home/pattern_home_banner.png";
import "@/app/styles/scroll.css";

const AffiliateBanner = () => {
  const scrollToSection = () => {
    const innerDivPos = document.getElementById("home_feature").offsetTop;
    const header = document.getElementById("header").clientHeight;
    window.scrollTo({ top: innerDivPos - header, behavior: "smooth" });
  };
  return (
    <section className="min-h-screen homeBanner pt-32 xl:pt-44 text-white flex justify-between flex-col">
      <div className="w-full md:w-8/12 mx-auto px-4">
        <div className="w-full xl:w-[90%] lg:w-[80%] mx-auto xl:mx-0 pb-32">
          <h6 className="text-2xl xl:text-3xl mb-4 font-montserrat">
            Welcome to
          </h6>
          <h4 className="text-3xl lg:text-4xl xl:text-6xl font-bold font-montserrat">
            The world of digital
            <br /> payment solutions!
          </h4>
          <p className="py-8 text-white/90 font-light text-2xl xl:text-3xl mb-4 font-montserrat">
            We welcome you to expand your business <br />
            with IOP’s affiliate partner program.
          </p>
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

export default AffiliateBanner;
