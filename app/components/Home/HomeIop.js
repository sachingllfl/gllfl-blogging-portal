import React from "react";
import Image from "next/image";
import HOMEIOPIMF from "@/app/assets/home/pattern_home_banner_2.png";
import HOMEIOPIMFICON1 from "@/app/assets/home/icon_payment_solution.png";
import HOMEIOPIMFICON2 from "@/app/assets/home/best_success_rates.png";
import HOMEIOPIMFICON3 from "@/app/assets/home/icon_easy_integration.png";
import Link from "next/link";
const HomeIop = () => {
  return (
    <section className="relative pb-10 xl:pb-20 bg-[url('./assets/home/bg_home_Iop.png')] bg-cover bg-center">
      <Image
        src={HOMEIOPIMF}
        style={{
          maxWidth: "100%",
          height: "auto",
          margin: "0 auto",
          width: "100%",
        }}
        alt="pattern"
      />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h6 className="text-xl md:text-3xl xl:text-5xl text-center font-bold mb-4 text-white">
          India Online Pay
          <br />
          completely reimagined
        </h6>
        <p className="text-center text-white">
          Easy, fast & secure simply the best
          <br />
          Payment Gateway you can get
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10 text-center mt-14">
          <div className="bg-white rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:drop-shadow-xl group">
            <Image
              src={HOMEIOPIMFICON1}
              alt="icon1"
              width={120}
              height={120}
              className="mx-auto mb-4"
            />
            <div className="text-xl xl:text-2xl font-semibold font-montserrat mb-2">
              Payments Solution
            </div>
            <p className="mb-2">
              Accept payments through mutiple channels. We provide secure and
              reliable transaction.
            </p>
            <Link
              href={"/"}
              className="hover:underline group-hover:text-custom_blue"
            >
              Know more
            </Link>
          </div>
          <div className="bg-white rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:drop-shadow-xl group">
            <Image
              src={HOMEIOPIMFICON2}
              alt="icon2"
              width={120}
              height={120}
              className="mx-auto mb-4"
            />
            <div className="text-xl xl:text-2xl font-semibold font-montserrat mb-2">
              Best Success Rates
            </div>
            <p className="mb-2">
              Switch transactions dynamically, recapture abandoned transactions
              & retry failures
            </p>
            <Link
              href={"/"}
              className="hover:underline group-hover:text-custom_blue"
            >
              Know more
            </Link>
          </div>
          <div className="bg-white rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:drop-shadow-xl group">
            <Image
              src={HOMEIOPIMFICON3}
              alt="icon3"
              width={120}
              height={120}
              className="mx-auto mb-4"
            />
            <div className="text-xl xl:text-2xl font-semibold font-montserrat mb-2">
              Easy Integration
            </div>
            <p className="mb-2">
              With plugins for all major platforms and languages, integrate and
              go live with IOP in less than an hour.
            </p>
            <Link
              href={"/"}
              className="hover:underline group-hover:text-custom_blue"
            >
              Know more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeIop;
