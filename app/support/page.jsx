import React from "react";
import Link from "next/link";
import Breadcrums from "@/app/components/Breadcrums";
import { FiChevronRight } from "react-icons/fi";
import { HiMagnifyingGlass } from "react-icons/hi2";
const popularQuestions = [
  {
    id: "1",
    question: "Getting Started",
    questionUrl: "/",
  },
  {
    id: "2",
    question: "Payment Links",
    questionUrl: "/",
  },
  {
    id: "3",
    question: "Transfers",
    questionUrl: "/",
  },
];
const page = () => {
  return (
    <>
      <Breadcrums>
        <Link href={""}>Home</Link> <FiChevronRight />
        Support
      </Breadcrums>
      <section className="w-full">
        <div className="max-w-6xl mx-auto md:px-4 px-0">
          <div className="bannerImage bg-[url('assets/support/support_bg.png')] bg-cover bg-center bg-no-repeat md:py-16 md:px-6 px-2 text-white flex flex-col  py-8">
            <div className="px-2 md:px-4 ">
              <h1 className="text-center font-medium  text-xl md:text-4xl">
                How can we help you?
              </h1>
              <div className="flex items-center justify-center pt-8 xl:pt-6 pb-6 flex-col md:flex-row">
                <div className="md:w-10/12 w-full">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter a Keyword..."
                      className=" border border-slate-100 drop-shadow flex items-center justify-center gap-2 self-start group py-1.5 px-12 text-sm md:text-base md:py-3 md:px-12 rounded md:rounded-lg shrink-0 w-full outline-none focus:drop-shadow-2xl transition-all duration-300"
                    />
                    <button
                      type="submit"
                      className="absolute top-1/2 -translate-y-1/2  text-xl text-slate-500 left-4"
                    >
                      <HiMagnifyingGlass />
                    </button>
                  </div>
                  {/* <div className="flex items-center justify-center py-4  px-4">
                  
                  </div> */}
                  <div className="w-full flex items-center  justify-start gap-4 py-4 md:px-4 md:flex-nowrap flex-wrap">
                    <span className="text-xs">Popular questions:</span>
                    <div className="flex flex-row gap-2 flex-wrap">
                      {/* <Link
                        className="bg-white rounded-full  bg-opacity-40 px-4 py-2 text-xs hover:bg-custom_orange hover:text-black-500"
                        href="/"
                      >
                        Getting Started
                      </Link>
                      <Link
                        className="bg-white rounded-full  bg-opacity-40 px-4 py-2 text-xs  hover:bg-custom_orange hover:text-black-500"
                        href="/"
                      >
                        Payment Links
                      </Link>
                      <Link
                        className="bg-white rounded-full  bg-opacity-40 px-4 py-2 text-xs  hover:bg-custom_orange hover:text-black-500"
                        href="/"
                      >
                        Transfers
                      </Link> */}
                      {popularQuestions.map((item, idx) => {
                        return (
                          // <div
                          //   key={idx}
                          //   className="before:bg-[url('./assets/check_point.png')] before:w-4 before:h-4 xl:before:w-6 xl:before:h-6 before:bg-cover flex gap-4 text-sm xl:text-base"
                          // >
                          //   {item}
                          // </div>
                          <Link
                            key={idx}
                            className="bg-white rounded-full  bg-opacity-40 px-4 py-2 text-xs  hover:bg-custom_orange hover:text-black-500 transition-all duration-300"
                            href={item.questionUrl}
                          >
                            {item.question}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full relative">
        <div className="max-w-6xl mx-auto md:p-8 p-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-center md:gap-4 lg:gap-10 md:text-left md:mt-14 my-8 md:px-0 px-8">
            <div className=" bg-transparent rounded-xl  hover:scale-105   transition-all duration-300 hover:drop-shadow-xl group ">
              <div className="w-full  borderl mx-auto mb-4 group-hover:-translate-y-2 transition-all duration-300">
                <div className="w-[100px] h-[100px] bg-[url('assets/support/support_sprite.png')]  mx-auto md:mx-0"></div>
                <h6 className="md:text-lg  text-md font-bold mb-2">
                  Contact Us
                </h6>
                <p className="text-sm mb-2 text-custom_orange md:pr-8 pr-0">
                  Send us a message or chat when someone is available.
                </p>
              </div>
            </div>
            <div className=" bg-transparent rounded-xl  hover:scale-105 transition-all duration-300 hover:drop-shadow-xl group ">
              <div className="w-full  borderl mx-auto mb-4 group-hover:-translate-y-2 transition-all duration-300">
                <div className="w-[100px] h-[100px] bg-[url('assets/support/support_sprite.png')] bg-[-100px_0]  mx-auto md:mx-0"></div>
                <h6 className="md:text-lg  text-md font-bold mb-2">
                  Frequently Asked Questions
                </h6>
                <p className="text-sm mb-2 text-custom_orange md:pr-8 pr-0">
                  Find answers to the most common questions asked by IOP clients
                </p>
              </div>
            </div>
            <div className=" bg-transparent rounded-xl  hover:scale-105   transition-all duration-300 hover:drop-shadow-xl group ">
              <div className="w-full  borderl mx-auto mb-4 group-hover:-translate-y-2 transition-all duration-300">
                <div className="w-[100px] h-[100px] bg-[url('assets/support/support_sprite.png')] bg-[-200px_0]  mx-auto md:mx-0"></div>
                <h6 className="md:text-lg  text-md font-bold mb-2">
                  Suggest an Improvement
                </h6>
                <p className="text-sm mb-2 text-custom_orange md:pr-8 pr-0">
                  If you spot something that can be better, let us know.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4 xl:py-8 w-full relative">
        <div className="max-w-6xl mx-auto px-4 text-center md:text-left ">
          <h6 className=" text-2xl md:text-4xl font-bold mb-4 md:mb-8">
            Getting Started
          </h6>
        </div>
        <div className="max-w-6xl  mx-auto px-2 flex flex-col md:flex-row gap-8">
          <div className="md:w-2/4 bg-custom_orange md:p-12  p-8 shadow-sm ring-1 ring-gray-500/5 hover:shadow-xl hover:ring-1 hover:ring-gray-900/5 group-hover:-translate-y-2 transition-all duration-300 sm:rounded-lg group">
            <h5 className="text-xl text-white font-bold md:pb-8 pb-2">
              Talk to our sales team
            </h5>
            <p className="text-white text-sm  px-0 md:pr-14 md:pb-8 pb-2 sm:pr-0">
              Find out which of our products fit your business needs and get all
              your questions answered.
            </p>
            <div className="flex justify-start items-center text-white">
              <Link
                href={""}
                className="flex justify-between p-2 px-0 gap-2 items-center group self-start"
              >
                Contact Sales
                <FiChevronRight className="group-hover:translate-x-2 transition-all duration-150" />
              </Link>
            </div>

            {/*
             */}
          </div>
          {/*  */}

          <div className="md:w-2/4 bg-custom_orange md:p-12  p-8  shadow-sm ring-1 ring-gray-500/5 hover:shadow-xl hover:ring-1 hover:ring-gray-900/5 group-hover:-translate-y-2 transition-all duration-300 sm:rounded-lg group">
            <h5 className="text-xl text-white font-bold md:pb-8 pb-2">
              Live Chat with our Expert
            </h5>
            <p className="text-white text-sm  px-0 md:pr-14 md:pb-8 pb-2">
              Get access to helpful tips, articles and FAQs to get the most out
              of Squad.
            </p>
            <div className="flex justify-start items-center text-white">
              <Link
                href={""}
                className="flex justify-between p-2 px-0 gap-2 items-center group self-start"
              >
                One Click Chat Box
                <FiChevronRight className="group-hover:translate-x-2 transition-all duration-150" />
              </Link>
            </div>
          </div>
          {/*
           */}
        </div>
      </section>
      <section className="w-full relative">
        <div className="max-w-6xl mx-auto md:px-4 px-2 md:py-8 py-4">
          <div className="flex md:flex-row flex-col justify-between items-center">
            <div className="py-4 sm:py-8">
              <h4 className="  text-2xl  md:text-4xl  font-bold md:text-left text-center">
                Start accepting
                <br className="hidden md:block" />
                <span className="inline sm:hidden "></span> payments in minutes
              </h4>
            </div>
            <div>
              <a
                className="bg-custom_orange text-white flex items-center justify-center gap-2 self-start group py-1.5 px-4 text-sm md:text-base md:py-3 md:px-8 rounded md:rounded-lg"
                href="/"
              >
                Create a free account
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
