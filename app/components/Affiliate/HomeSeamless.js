import React from "react";
import BGSEAM from "@/app/assets/home/bg_seamless_integration.png";
import Image from "next/image";
import LogoSlider from "../LogoSlider";
const HomeSeamless = () => {
  return (
    <section className="py-12 xl:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h6 className="text-xl md:text-3xl xl:text-5xl text-center font-bold mb-4 ">
          Seamless integration
        </h6>
        <p className="text-center">
          We make it easier for you to focus on building great products while
          <br /> we work on simplifying your payments.
        </p>
      </div>
      <div className="mt-12 relative py-8 md:py-0">
        <Image
          src={BGSEAM}
          alt="seamless integration"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <div className=" marqueeOuter ">
          <LogoSlider />
        </div>
      </div>
    </section>
  );
};

export default HomeSeamless;
