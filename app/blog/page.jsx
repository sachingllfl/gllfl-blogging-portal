import Link from "next/link";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import BlogGrid from "@/app/components/Blog/BlogGrid";
import { dummyData } from "@/app/utils/dummyData";
import { FiChevronRight } from "react-icons/fi";
import Breadcrums from "../components/Breadcrums";

const page = () => {
  return (
    <>
      <Breadcrums>
        <Link href={""}>Home</Link> <FiChevronRight />
        Blog
      </Breadcrums>
      <section className="w-full">
        <div className="max-w-6xl mx-auto md:px-4 px-0">
          <div className="bannerImage bg-[url('assets/blog/home_banner.png')] bg-cover bg-center bg-no-repeat py-24 px-6  flex flex-col mb-6">
            <h6 className="text-xl md:text-3xl xl:text-5xl font-bold mb-6 text-white">
              IOP Blog
            </h6>
            <div className="mb-6 text-white/90">
              Change the billable currency for any customer to accept multiple
              currencies.
            </div>
            <Link
              href={"/"}
              className="bg-custom_orange text-white flex items-center justify-center gap-2 self-start group py-1.5 px-4 text-sm lg:text-base lg:py-3 lg:px-8 rounded lg:rounded-lg"
            >
              Get Started{" "}
              <HiArrowLongRight className="group-hover:translate-x-2 transition-all duration-150" />
            </Link>
          </div>
          <p className="text-center">
            India Online Pay is India biggest and the most popular payment
            gateway solution, which is currently processing e-commerce
            transactions of thousands of eMerchants.
            <br />A partial list of eMerchants using the India Online Payment
            Gateway solution is displayed below:-
          </p>
        </div>
      </section>
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <BlogGrid data={dummyData} />
          <div className="flex items-center justify-center mt-6">
            <Link
              href={"/"}
              className="bg-zinc-100 text-slate-900 py-1.5 px-4 text-sm lg:text-base lg:py-3 lg:px-8 rounded lg:rounded-lg drop-shadow-md "
            >
              Load More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
