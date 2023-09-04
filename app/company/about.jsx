"use client";
import React, { useState } from "react";
import Image from "next/image";
import ABOUTBG from "@/app/assets/company/about/about_banner.png";
import IOPLOGO from "@/app/assets/iop_logo.png";
import LOGO_AADHAR from "@/app/assets/company/about/awards/2018/aadhar.png";
import LOGO_BUSINESS_TODAY from "@/app/assets/company/about/awards/2018/business_today.png";
import LOGO_BW from "@/app/assets/company/about/awards/2018/bw_logo.png";
import LOGO_CNBC from "@/app/assets/company/about/awards/2018/cnbc.png";
import LOGO_IBLA from "@/app/assets/company/about/awards/2018/ibla.png";
import LOGO_OUTLOOK_MONEY from "@/app/assets/company/about/awards/2018/outlook_money.png";
import { HiChevronDown } from "react-icons/hi";
const awardsList = [
  {
    year: "2018",
    awards: [
      {
        logo: LOGO_AADHAR,
        title: "Aadhaar Excellence Awards 2018",
        description: "Openning Highest Percentage of Aadhaar Centres",
      },
      {
        logo: LOGO_CNBC,
        title: "CNBC Awaaz CEO Awards 2018",
        description: "Most Promising Compnay of The Year",
      },
      {
        logo: LOGO_IBLA,
        title: "IBLA Awards 2018",
        description: "Most Promising Compnay of The Year",
      },
      {
        logo: LOGO_OUTLOOK_MONEY,
        title: "Outlook Money Awards 2018",
        description: "Most Usable App",
      },
      {
        logo: LOGO_BUSINESS_TODAY,
        title: "Business Today Banking Awards",
        description: "Best Small Bank",
      },
      {
        logo: LOGO_BW,
        title: "Magna Awards 2018",
        description: "Fastest Growing Small-Sized Bank",
      },
    ],
  },
  {
    year: "2019",
    awards: [
      {
        logo: LOGO_AADHAR,
        title: "Aadhaar Excellence Awards 2018",
        description: "Openning Highest Percentage of Aadhaar Centres",
      },
      {
        logo: LOGO_CNBC,
        title: "CNBC Awaaz CEO Awards 2018",
        description: "Most Promising Compnay of The Year",
      },
      {
        logo: LOGO_IBLA,
        title: "IBLA Awards 2018",
        description: "Most Promising Compnay of The Year",
      },
      {
        logo: LOGO_OUTLOOK_MONEY,
        title: "Outlook Money Awards 2018",
        description: "Most Usable App",
      },
      {
        logo: LOGO_BUSINESS_TODAY,
        title: "Business Today Banking Awards",
        description: "Best Small Bank",
      },
      {
        logo: LOGO_BW,
        title: "Magna Awards 2018",
        description: "Fastest Growing Small-Sized Bank",
      },
    ],
  },
  {
    year: "2020",
    awards: [
      {
        logo: LOGO_AADHAR,
        title: "Aadhaar Excellence Awards 2018",
        description: "Openning Highest Percentage of Aadhaar Centres",
      },
      {
        logo: LOGO_CNBC,
        title: "CNBC Awaaz CEO Awards 2018",
        description: "Most Promising Compnay of The Year",
      },
      {
        logo: LOGO_IBLA,
        title: "IBLA Awards 2018",
        description: "Most Promising Compnay of The Year",
      },
      {
        logo: LOGO_OUTLOOK_MONEY,
        title: "Outlook Money Awards 2018",
        description: "Most Usable App",
      },
      {
        logo: LOGO_BUSINESS_TODAY,
        title: "Business Today Banking Awards",
        description: "Best Small Bank",
      },
      {
        logo: LOGO_BW,
        title: "Magna Awards 2018",
        description: "Fastest Growing Small-Sized Bank",
      },
    ],
  },
  {
    year: "2021",
    awards: [
      {
        logo: LOGO_AADHAR,
        title: "Aadhaar Excellence Awards 2018",
        description: "Openning Highest Percentage of Aadhaar Centres",
      },
      {
        logo: LOGO_CNBC,
        title: "CNBC Awaaz CEO Awards 2018",
        description: "Most Promising Compnay of The Year",
      },
      {
        logo: LOGO_IBLA,
        title: "IBLA Awards 2018",
        description: "Most Promising Compnay of The Year",
      },
      {
        logo: LOGO_OUTLOOK_MONEY,
        title: "Outlook Money Awards 2018",
        description: "Most Usable App",
      },
      {
        logo: LOGO_BUSINESS_TODAY,
        title: "Business Today Banking Awards",
        description: "Best Small Bank",
      },
      {
        logo: LOGO_BW,
        title: "Magna Awards 2018",
        description: "Fastest Growing Small-Sized Bank",
      },
    ],
  },
];
const About = () => {
  const [clicked, setClicked] = useState(0);
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked(0);
    }
    setClicked(index);
  };
  return (
    <>
      <section>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            <Image
              src={ABOUTBG}
              alt="about"
              width={"auto"}
              height={"auto"}
              className="max-w-full w-full"
            />
            <div className="space-y-4">
              <Image
                src={IOPLOGO}
                alt="IOP Logo"
                width={"auto"}
                height={"auto"}
                className="max-w-full md:ml-auto md:mr-0"
              />
              <p>
                Today, India Online Pay is a leading payment gateway solution
                that adheres to the international regulatory standards of PCI
                DSS 3.2.1. India Online Pay is developed with the sole focus of
                protecting our customers data while providing them with advanced
                payment gateway solutions!
              </p>

              <p>
                Our developing team comprises of professionals that have an
                expertise in the banking sector for over 15 years and their sole
                focus is to provide you with leading payment gateway solutions.
                Along with payment gateway solutions, India Online Pay has
                integrated its system with various multifaceted options to
                offers its merchants a complete end to end solution.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h6 className="text-2xl font-bold mb-4">Awards & Recognition</h6>
          {awardsList?.length > 0 && (
            <div className="space-y-4">
              {awardsList.map((award, index) => {
                return (
                  <AccordionPanel
                    key={index}
                    award={award}
                    onToggle={() => handleToggle(index)}
                    active={clicked === index}
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default About;

const AccordionPanel = ({ award, onToggle, active }) => {
  return (
    <div className={`cursor-pointer`}>
      <div
        className="bg-gray-200 p-4 font-semibold flex justify-between items-center"
        onClick={onToggle}
      >
        {award.year}
        <HiChevronDown
          className={`${
            active ? "rotate-0" : "-rotate-90"
          } text-xl transition-all duration-300`}
        />
      </div>
      {active && (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6 md:p-4">
          {award.awards.map((item, idx) => {
            return (
              <div
                key={idx}
                className="text-center p-4 hover:shadow-xl transition-all duration-300 rounded-xl"
              >
                <Image
                  src={item.logo}
                  alt={item.title}
                  width={"auto"}
                  height={"auto"}
                  className="max-w-full mx-auto"
                />
                <div className="text-custom_orange font-semibold mt-4 mb-2">
                  {item.title}
                </div>
                <div className="text-slate-600 text-sm md:text-base">
                  {item.description}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
