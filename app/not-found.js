import React from "react";
import PAGENOTFOUND from "@/app/assets/404error.gif";
import Image from "next/image";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";

const NotFound = () => {
  return (
    <section className="py-4">
      <div className="max-w-6xl mx-auto px-4">
        <Image
          src={PAGENOTFOUND}
          alt="page not found"
          style={{ maxWidth: "100%" }}
          className="mx-auto"
        />
        <p className="text-custom_blue text-xl font-semibold text-center">
          Sorry we are unable to find what you&apos;re looking for
        </p>
        <div className="flex items-center justify-center mt-6">
          <Link
            href={"/"}
            className="bg-custom_orange text-white flex items-center justify-center gap-2 self-start group py-1.5 px-4 text-sm lg:text-base lg:py-3 lg:px-8 rounded lg:rounded-lg"
          >
            Back to Home{" "}
            <HiArrowLongRight className="group-hover:translate-x-2 transition-all duration-150" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
