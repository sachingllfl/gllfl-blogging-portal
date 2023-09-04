import React from "react";
import Image from "next/image";
import HOMEIOPIMF from "@/app/assets/home/pattern_home_banner_2.png";
import HOMEIOPIMFICON1 from "@/app/assets/home/icon_payment_solution.png";
import HOMEIOPIMFICON2 from "@/app/assets/home/best_success_rates.png";
import HOMEIOPIMFICON3 from "@/app/assets/home/icon_easy_integration.png";
import Link from "next/link";
const AffiliateWhyPartnerWithUs = () => {
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
          Why partner with us?
        </h6>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-10 text-center mt-14">
          <div className="bg-white rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:drop-shadow-xl group">
            <Image
              src={HOMEIOPIMFICON1}
              alt="icon1"
              width={120}
              height={120}
              className="mx-auto mb-4"
            />
            <div className="text-xl xl:text-2xl font-semibold font-montserrat mb-2">
              Access your own dashboard
            </div>
            <p className="mb-2">
              monitor your commission and your merchants returns.
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
              Fast and seamless
            </div>
            <p className="mb-2">onboarding of your merchants.</p>
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
          <div className="bg-white rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:drop-shadow-xl group">
            <Image
              src={HOMEIOPIMFICON3}
              alt="icon3"
              width={120}
              height={120}
              className="mx-auto mb-4"
            />
            <div className="text-xl xl:text-2xl font-semibold font-montserrat mb-2">
              Increase your revenue
            </div>
            <p className="mb-2">
              Increase your revenue with our partnership model.
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
              Wide variety of products
            </div>
            <p className="mb-2">
              Capacity to offer your customers a wide variety of products such
              as Credit Cards, Debit Cards, Net Banking, ATM Cards, prepaid
              cards, wallets, EMI Options, UPI and vault-based cards.
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
              No maintenance fee
            </div>
            <p className="mb-2">
              Offer your customers a free set-up and no maintenance fee for the
              first year!
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
              Timely pay-out&apos;s
            </div>
            <p className="mb-2">
              Expect timely pay-out&apos;s as it is an automated process with
              merchant pay-outs. The pay-out for affiliate partner is scheduled
              the very next day of the merchant pay-out!
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

export default AffiliateWhyPartnerWithUs;
