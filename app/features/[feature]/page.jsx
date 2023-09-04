"use client";
import React from "react";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { HiArrowLongRight } from "react-icons/hi2";
import { useParams } from "next/navigation";
import { featuresData } from "@/app/utils/featureData";
import parse from "html-react-parser";
import Breadcrums from "@/app/components/Breadcrums";

const Page = () => {
  const params = useParams();
  const data = featuresData.find((item) => {
    return item.slug === params.feature;
  });
  return (
    <>
      <Breadcrums>
        <Link href={""}>Features</Link> <FiChevronRight /> {data?.title}
      </Breadcrums>
      <section className="py-2 xl:py-4 pt-0 xl:pt-0">
        <div className="max-w-6xl mx-auto md:px-4 px-0">
          <div
            style={{ backgroundImage: `url(${data?.bannerbg.src})` }}
            className={`bg-cover bg-center bg-no-repeat py-24 px-6 text-white flex flex-col mb-3 xl:mb-6 relative`}
          >
            <h6 className="text-xl md:text-3xl xl:text-5xl font-bold mb-6 text-white w-full">
              {data?.title}
            </h6>
            <div className="mb-6 text-white/90">{data?.subtitle}</div>
            <Link
              href={"/"}
              className="bg-custom_orange text-white flex items-center justify-center gap-2 self-start group py-1.5 px-4 text-sm lg:text-base lg:py-3 lg:px-8 rounded lg:rounded-lg"
            >
              Get Started{" "}
              <HiArrowLongRight className="group-hover:translate-x-2 transition-all duration-150" />
            </Link>
          </div>
        </div>
      </section>
      <section className="py-4 xl:py-8 pt-0 xl:pt-0">
        <div className="max-w-6xl mx-auto px-4">
          <h6 className="text-xl md:text-2xl xl:text-3xl  font-bold ">
            {data?.title}
          </h6>
          <div className="text-custom_orange font-medium mb-4 ">
            {data?.asdasd}
          </div>
          {parse(data?.description)}
        </div>
      </section>
      <section className="py-4 xl:py-8 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h6 className="text-2xl font-medium ">Let more than before</h6>
          <p className="text-custom_orange font-medium mb-4">
            Powerful tool sdesigned to complement your business needs
          </p>
          <div className="flex flex-wrap justify-center mt-6">
            <div className="group w-full md:w-1/3 xl:w-1/5 px-4 mb-6">
              <div className="w-[110px] h-[110px] flex items-center justify-center border border-custom_orange rounded-full mx-auto mb-4 group-hover:-translate-y-2 transition-all duration-300">
                <div className="w-[75px] h-[75px] bg-[url('assets/features/feature_sprite.png')]"></div>
              </div>
              <h6 className="font-bold">Dynamic Event Notification</h6>
              <p className="text-sm text-slate-500">
                Notifies you about the events that occur in your IOP account for
                timely action
              </p>
            </div>
            <div className="group w-full md:w-1/3 xl:w-1/5 px-4 mb-6">
              <div className="w-[110px] h-[110px] flex items-center justify-center border border-custom_orange rounded-full mx-auto mb-4 group-hover:-translate-y-2 transition-all duration-300">
                <div className="w-[75px] h-[75px] bg-[url('assets/features/feature_sprite.png')]  bg-[-75px_0]"></div>
              </div>
              <h6 className="font-bold">Marketing Tools</h6>
              <p className="text-sm text-slate-500">
                Innovative tools that complement your marketing efforts & help
                nurture key customers
              </p>
            </div>
            <div className="group w-full md:w-1/3 xl:w-1/5 px-4 mb-6">
              <div className="w-[110px] h-[110px] flex items-center justify-center border border-custom_orange rounded-full mx-auto mb-4 group-hover:-translate-y-2 transition-all duration-300">
                <div className="w-[75px] h-[75px] bg-[url('assets/features/feature_sprite.png')] bg-[-150px_0]"></div>
              </div>
              <h6 className="font-bold">Shopping Cart Plugins</h6>
              <p className="text-sm text-slate-500">
                Intergration API&apos;s to help you easily integrate with 3rd
                party shopping carts
              </p>
            </div>
            <div className="group w-full md:w-1/3 xl:w-1/5 px-4 mb-6">
              <div className="w-[110px] h-[110px] flex items-center justify-center border border-custom_orange rounded-full mx-auto mb-4 group-hover:-translate-y-2 transition-all duration-300">
                <div className="w-[75px] h-[75px] bg-[url('assets/features/feature_sprite.png')] bg-[-225px_0]"></div>
              </div>
              <h6 className="font-bold">IOP Smart Analytics</h6>
              <p className="text-sm text-slate-500">
                Derive complete insight on transactions through intuitive graphs
                and reports
              </p>
            </div>
            <div className="group w-full md:w-1/3 xl:w-1/5 px-4 mb-6">
              <div className="w-[110px] h-[110px] flex items-center justify-center border border-custom_orange rounded-full mx-auto mb-4 group-hover:-translate-y-2 transition-all duration-300">
                <div className="w-[75px] h-[75px] bg-[url('assets/features/feature_sprite.png')] bg-[-300px_0]"></div>
              </div>
              <h6 className="font-bold">24/7 Support</h6>
              <p className="text-sm text-slate-500">
                We treat every customer as a priority and go out of the way to
                assist you
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
