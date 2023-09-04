import React from "react";
import AVATAR from "@/app/assets/home/user_avatar.png";
import CLOGO from "@/app/assets/home/medilife_logo.png";
import Image from "next/image";
import Link from "next/link";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
const TestimonialCard = () => {
  return (
    <div className="w-full px-10 md:px-28 flex gap-6 xl:gap-28 lg:gap-6 flex-col lg:flex-row">
      <Image
        src={AVATAR}
        width={320}
        height={320}
        alt="avatar"
        className="rounded-2xl shrink-0 mx-auto"
      />
      <div>
        <div className="mb-8">
          <BiSolidQuoteAltLeft className="-scale-y-100 text-gray-200 text-6xl" />
          <p className="text-2xl">
            Readymade Closed Wallet Solution For Quick Refunds
          </p>
          <Link href={"/"} className="text-sm underline text-custom_blue">
            Know more
          </Link>
        </div>
        <div className="text-left md:text-center">
          <p className="text-xl font-semibold">Ashish Bhatia</p>
          <p className="text-sm">GM, Strategy and Planning</p>
          <Image
            src={CLOGO}
            alt="medilife"
            width={190}
            height={37}
            className="mt-4 mx-0 md:mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
