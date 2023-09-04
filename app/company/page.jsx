"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import About from "./about";
import ManagementTeam from "./management-team";
import OurClient from "./our-client";
import "@/app/styles/company.css";
import Breadcrums from "@/app/components/Breadcrums";

const Page = () => {
  const [selectedId, setSelectedId] = useState(0);
  const tabTypes = ["About Us", "Management Team", "Our Clients"];
  return (
    <>
      <Breadcrums>
        <Link href={"/"}>Home</Link> <FiChevronRight />
        Company
      </Breadcrums>
      <section>
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-custom_orange font-semibold px-0 lg:px-20 text-center">
            India Online Pay (IOP), the first e-Commerce and fintech company
            listed on the Indian Stock exchange, is one of India&apos;s leading
            digital payments and e-commerce technology solutions provider.
          </p>
        </div>
      </section>
      <section className="py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="bg-gray-200 grid grid-cols-3 text-sm lg:text-xl font-medium rounded-sm lg:rounded-3xl overflow-hidden text-center cursor-pointer">
            {tabTypes.map((item, index) => {
              return (
                <div
                  key={item}
                  className={`${
                    selectedId === index ? "bg-custom_orange text-white" : ""
                  } rounded-sm lg:rounded-3xl py-3 transition-all duration-300 font-montserrat font-semibold`}
                  onClick={() => setSelectedId(index)}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {selectedId === 0 && <About />}
      {selectedId === 1 && <ManagementTeam />}
      {selectedId === 2 && <OurClient />}
    </>
  );
};

export default Page;
