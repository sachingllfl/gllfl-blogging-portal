"use client";
import Link from "next/link";
import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { HiChevronDown } from "react-icons/hi2";
import { useSelector } from "react-redux";
import Breadcrums from "@/app/components/Breadcrums";
import DomesticPayments from "@/app/pricing/components/DomesticPayments";
import QRCode from "@/app/pricing/components/QRCode";
import POSPayments from "@/app/pricing/components/POSPayments";
import Optimizer from "@/app/pricing/components/Optimizer";
import InternationalPayments from "@/app/pricing/components/InternationalPayments";

const paymentsData = [
  {
    id: 1,
    heading: "Domestic Payment",
    component: <DomesticPayments />,
  },
  {
    id: 2,
    heading: "International Payments",
    component: <InternationalPayments />,
  },
  {
    id: 3,
    heading: "Optimizer",
    component: <Optimizer />,
  },
  {
    id: 4,
    heading: "POS Payments",
    component: <POSPayments />,
  },
  {
    id: 5,
    heading: "QR Code",
    component: <QRCode />,
  },
];
const Page = () => {
  const { isMobile } = useSelector((state) => state.global);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Breadcrums>
        <Link href={"/"}>Home</Link> <FiChevronRight />
        Pricing
      </Breadcrums>
      <section>
        <div className="max-w-6xl mx-auto px-4">
          <h4 className="text-4xl uppercase text-slate-700 font-semibold mb-8 text-center">
            Accepting Payments
          </h4>
          {isMobile ? (
            <div>
              <AccordionBox />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-5 bg-gray-100 rounded-3xl overflow-hidden">
                {paymentsData.map((item, index) => {
                  return (
                    <div
                      className={`cursor-pointer py-3 text-center ${
                        index === activeTab
                          ? "bg-custom_orange text-white transition-all duration-300"
                          : ""
                      } `}
                      key={index}
                      onClick={() => setActiveTab(index)}
                    >
                      {item.heading}
                    </div>
                  );
                })}
              </div>
              <div className="bg-white">
                {paymentsData[activeTab].component}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};
export default Page;

const AccordionBox = () => {
  const [value, setValue] = useState(0);
  const handleToggle = (index) => {
    if (value === index) {
      return setValue(0);
    }
    setValue(index);
  };
  return (
    <div className="space-y-4">
      {paymentsData.map((data, index) => {
        return (
          <AccordionTab
            data={data}
            key={index}
            onToggle={() => handleToggle(index)}
            active={value === index}
          />
        );
      })}
    </div>
  );
};

const AccordionTab = ({ data, active, onToggle }) => {
  const handleToggle = () => {
    onToggle();
    setTimeout(() => {
      const accordionHeigh = document.getElementById(data.id)?.offsetTop;
      window.scrollTo({ top: accordionHeigh - 60, behavior: "smooth" });
    }, 100);
  };
  return (
    <div>
      <div
        id={data.id}
        onClick={handleToggle}
        className="bg-gray-200 p-4 font-semibold flex justify-between items-center"
      >
        {data.heading}
        <HiChevronDown
          className={`${
            active ? "rotate-0" : "-rotate-90"
          } text-xl transition-all duration-300`}
        />
      </div>
      {active && <div className="">{data.component}</div>}
    </div>
  );
};
