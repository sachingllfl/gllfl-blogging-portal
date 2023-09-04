"use client";
import React, { useState } from "react";
import Link from "next/link";
import Breadcrums from "@/app/components/Breadcrums";
import { FiChevronRight } from "react-icons/fi";
import { HiArrowLongRight, HiChevronDown } from "react-icons/hi2";
import Image from "next/image";
import IntegrateZero from "@/app/assets/developer/integrate_zero.png";
import { useSelector } from "react-redux";

const developerList = [
  "Retrieve all your transaction data",
  "Verify your customer’s identity",
  "Make instant transfers",
  "Collect one- time payment, recurring payment and donations",
];

const iopApisData = [
  {
    title: "Bet Company",
    data: [
      {
        label: "Virtual Accounts API",
        desc: "IOP API for Virtual Accounts allows you to create and reserve bank account numbers for receiving payments from your customers via transfers.",
        path: "",
      },
      {
        label: "Process Refunds API",
        desc: "Verify the identity of your customers with their Bank Verification Number (BVN).",
        path: "",
      },
      {
        label: "Verify Transactions",
        desc: "Verify if the bank account details provided by customers are correct.",
        path: "",
      },
      {
        label: "Transactions API",
        desc: "Get paid by your customers in multiple currencies.",
        path: "",
      },
      {
        label: "Transfer API",
        desc: "Automatically transfer money directly to your customers' bank accounts.",
        path: "",
      },
      {
        label: "Resolve NUBAN API",
        desc: "Verify if the bank account details provided by customers are correct.",
        path: "",
      },
    ],
  },
  {
    title: "Online Marketplace",
    data: [
      {
        label: "Transactions API",
        desc: "Get paid by your customers in multiple currencies",
        path: "",
      },
      {
        label: "Settlement API",
        desc: "Maximize load repayments by collecting small amounts over time.",
        path: "",
      },
      {
        label: "List Transactions API",
        desc: "Verify the identity of your customers with their Bank Verification Number (BVN).",
        path: "",
      },
      {
        label: "Product API",
        desc: "Verify if the bank account details provided by customers are correct.",
        path: "",
      },
      {
        label: "Verify Transactions API",
        desc: "Automatically transfer money directly to your customers' bank accounts.",
        path: "",
      },
      {
        label: "Process Refund API",
        desc: "Debit a customer and get a unique token you can use for future charges.",
        path: "",
      },
    ],
  },
  {
    title: "Ride Hailing",
    data: [
      {
        label: "Resolve BVN API",
        desc: "Verify the identity of your customers with their Bank Verification Number (BVN).",
        path: "",
      },
      {
        label: "Verify Transactions",
        desc: "Maximize load repayments by collecting small amounts over time.",
        path: "",
      },
      {
        label: "Transactions API",
        desc: "Get paid by your customers in multiple currencies",
        path: "",
      },
      {
        label: "Virtual Accounts API",
        desc: "SQUAD API for Virtual Accounts allows you to create and reserve bank account numbers for receiving payments from your customers via transfer.",
        path: "",
      },
      {
        label: "Process Refunds API",
        desc: "Automatically transfer money directly to your customers' bank accounts.",
        path: "",
      },
    ],
  },
  {
    title: "Subscription Services",
    data: [
      {
        label: "Transactions API",
        desc: "Get paid by your customers in multiple currencies",
        path: "",
      },
      {
        label: "Process Refunds API",
        desc: "Maximize load repayments by collecting small amounts over time.",
        path: "",
      },
      {
        label: "Subscription (Recurring Charges) API",
        desc: "Automatically transfer money directly to your customers' bank accounts.",
        path: "",
      },
      {
        label: "Verify Transactions API",
        desc: "Verify the identity of your customers with their Bank Verification Number (BVN).",
        path: "",
      },
      {
        label: "Resolve NUBAN API",
        desc: "Verify if the bank account details provided by customers are correct.",
        path: "",
      },
    ],
  },
];

export default function Page() {
  const { isMobile } = useSelector((state) => state.global);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Breadcrums>
        <Link href={""}>Home</Link> <FiChevronRight /> Developer
      </Breadcrums>

      <section className="py-4 xl:py-8 pt-0 xl:pt-0">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h4 className="text-2xl font-medium mb-3 font-montserrat">
            IOP for Developers
          </h4>
          <p className="text-custom_orange font-normal text-base mb-4 ">
            Integrate with IOP API&apos;s to build world-class business
            solutions.
            <br />
            Set up your dashboard and start receiving payments.
          </p>
        </div>
      </section>

      <section className="mt-12 mb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="w-full flex lg:flex-row flex-col gap-24 justify-between">
            <div className="lg:w-3/6 w-full">
              <Image
                src={IntegrateZero}
                width={"auto"}
                height={"auto"}
                alt="Integrate Zero"
                priority={true}
                className="w-full"
              />
            </div>
            <div className="lg:w-3/6 w-full flex flex-col justify-between">
              <h4 className="text-4xl font-semibold font-montserrat">
                Integrate IOP with zero complexities
              </h4>
              <p className="my-12 font-normal text-base">
                With IOP easy-to-integrate, well-documented API&apos;s
                you&apos;ll be able to seamlessly build any type of payment
                flow. From online collections to payouts and every sophisticated
                or simple financial project in between.
              </p>
              <ul className="flex flex-col gap-1">
                {developerList?.length &&
                  developerList.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="before:bg-[url('./assets/circle_check_point.png')] before:w-4 before:h-4 xl:before:w-6 xl:before:h-6 before:bg-cover flex gap-4 text-sm xl:text-base mb-2"
                      >
                        {item}
                      </li>
                    );
                  })}
              </ul>
              <Link href="\" className="text-custom_orange underline mt-6 flex">
                <div className="group flex items-center">
                  Get started with IOP API
                  <HiArrowLongRight className="ml-2 group-hover:translate-x-5 transition-all duration-300" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12 h-[100%]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h4 className="text-4xl font-semibold mb-6 font-montserrat">
              What you can do with IOP APIs
            </h4>
            <p className="mb-12 font-normal text-base text-custom_orange">
              What amazing product can you build with IOP? <br />
              Here&apos;s how IOP APIs come together to bring ideas to life.
            </p>
          </div>
          {isMobile ? (
            iopApisData?.length > 0 && (
              <div>
                <AccordionBox />
              </div>
            )
          ) : (
            <>
              <div className="flex text-sm lg:text-base gap-3 lg:gap-16 items-center justify-center border-b border-gray-300 py-2">
                {iopApisData?.length > 0 &&
                  iopApisData.map((item, index) => {
                    return (
                      <div
                        key={item.title}
                        className={`cursor-pointer hover:text-custom_orange ${
                          index === activeTab
                            ? "text-custom_orange font-semibold"
                            : "text-slate-900"
                        }`}
                        onClick={() => setActiveTab(index)}
                      >
                        {item.title}
                      </div>
                    );
                  })}
              </div>
              <div className="py-10 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
                {iopApisData[activeTab]?.data.map((api, index) => (
                  <DevCard key={index} api={api} />
                ))}
              </div>
            </>
          )}
          <Link
            href="\"
            className="text-custom_orange underline flex mt-10 md:mt-0"
          >
            <div className="group flex items-center">
              See the entire IOP developer documentation
              <HiArrowLongRight className="ml-2 group-hover:translate-x-5 transition-all duration-300" />
            </div>
          </Link>
        </div>
      </section>

      <section className="mt-20 mb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="w-full flex lg:flex-row flex-col gap-28 justify-between">
            <div className="lg:w-3/6 w-full">
              <h4 className="text-4xl font-semibold pr-14 font-montserrat">
                Payments with no limitations
              </h4>
              <p className="my-12 font-normal text-base">
                IOP has made accepting payments from around the world, whether
                in Dollars or Naira as easy as possible. Don&apos;t limit your
                business. Accept payments using Cards, Bank transfers, QR or
                USSD.
              </p>
              <div className="flex gap-3 text-center">
                <div className="">
                  <div className="bg-[url('./assets/developer/developer_sprite.png')] w-20 h-20"></div>
                  <div>Cards</div>
                </div>
                <div className="">
                  <div className="bg-[url('./assets/developer/developer_sprite.png')] w-20 h-20 bg-[-80px_0]"></div>
                  <div>Transfer</div>
                </div>
                <div className="">
                  <div className="bg-[url('./assets/developer/developer_sprite.png')] w-20 h-20 bg-[-160px_0]"></div>
                  <div>USSD</div>
                </div>
                <div className="">
                  <div className="bg-[url('./assets/developer/developer_sprite.png')] w-20 h-20 bg-[-240px_0]"></div>
                  <div>QR</div>
                </div>
              </div>
            </div>
            <div className="lg:w-3/6 w-full">
              <Image
                src={IntegrateZero}
                width={"auto"}
                height={"auto"}
                alt="Integrate Zero"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

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
      {iopApisData.map((data, index) => {
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
  return (
    <div>
      <div
        onClick={() => onToggle()}
        className="bg-gray-200 p-4 font-semibold flex justify-between items-center"
      >
        {data.title}
        <HiChevronDown
          className={`${
            active ? "rotate-0" : "-rotate-90"
          } text-xl transition-all duration-300`}
        />
      </div>
      {active && (
        <div className="py-4 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {data?.data.map((api, index) => (
            <DevCard key={index} api={api} />
          ))}
        </div>
      )}
    </div>
  );
};

const DevCard = ({ api }) => {
  return (
    <div className="border rounded-md p-6 border-slate-300 group hover:shadow-lg space-y-3 transition-all duration-300 hover:bg-custom_orange hover:border-custom_orange hover:scale-105">
      <h3 className="text-lg font-semibold group-hover:text-white">
        {api.label}
      </h3>
      <p className="text-gray-600 group-hover:text-white text-sm min-h-[100px]">
        {api.desc}
      </p>
      <Link
        href="\"
        className="text-slate-900 underline mt-6 flex group-hover:text-white group items-center justify-start linkBtn"
      >
        Learn more
        <HiArrowLongRight className="ml-2 [.linkBtn:hover_&]:translate-x-3 transition-all duration-300" />
      </Link>
    </div>
  );
};
