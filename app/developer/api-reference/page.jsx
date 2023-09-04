"use client";
import React, { useState } from "react";
import Link from "next/link";
import parse from "html-react-parser";
import Breadcrums from "@/app/components/Breadcrums";
import { FiChevronRight } from "react-icons/fi";
import { HiArrowLongRight, HiChevronDown } from "react-icons/hi2";
import Image from "next/image";
import IntegrateZero from "@/app/assets/developer/integrate_zero.png";
import { useSelector } from "react-redux";

const iopApisData = [
  {
    cardpic: "",
    label: "Payments",
    desc: "IndiaOnlinePay API for accepting transactions.",
    path: "https://developer.authorize.net/api/reference/features/payment_transactions.html#Payment_Processors",
  },
  {
    cardpic: "",
    label: "Accept SNAP <br/>(Social Network Activated Payments)",
    desc: "WebHooks for social media Platforms",
    path: "",
  },
  {
    cardpic: "",
    label: "Customer Profiles",
    desc: "Store customer&apos;s sensitive data for quick retrieval on return purchases.",
    path: "https://developer.authorize.net/api/reference/features/customer-profiles.html#Payment_Processors",
  },
];

export default function Page() {
  const { isMobile } = useSelector((state) => state.global);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Breadcrums>
        <Link href={"/"}>Home</Link> <FiChevronRight />
        <Link href={"/developer"}>Developer</Link>
        <FiChevronRight />
        API Reference
      </Breadcrums>

      <section className=" py-12 h-[100%]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h4 className="text-4xl font-semibold mb-6 font-montserrat">
              API Reference
            </h4>
          </div>

          <>
            <div className="py-10 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center text-center">
              {iopApisData.map((api, index) => (
                <div
                  key={index}
                  api={api}
                  className="border rounded-md p-6 border-slate-300 group hover:shadow-lg space-y-3 transition-all duration-300 hover:bg-custom_orange hover:border-custom_orange hover:scale-105"
                >
                  <h3 className="text-lg font-semibold group-hover:text-white">
                    {parse(api.label)}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white text-sm min-h-[100px]">
                    {api.desc}
                  </p>
                  <Link
                    href={api.path}
                    className="text-slate-900 underline mt-6 flex group-hover:text-white group items-center justify-start linkBtn"
                  >
                    Learn more
                    <HiArrowLongRight className="ml-2 [.linkBtn:hover_&]:translate-x-3 transition-all duration-300" />
                  </Link>
                </div>
              ))}
            </div>
          </>
        </div>
      </section>

      <section className="mt-20 mb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="w-full flex lg:flex-row flex-col gap-12 justify-between">
            <div className="lg:w-3/6 w-full">
              <h4 className="text-4xl font-semibold pr-14 font-montserrat">
                API Endpoints & Authentication
              </h4>
              <p className="my-4 font-normal text-base">
                All requests to the Authorize.Net API are sent via the HTTP POST
                method to one of our API endpoint URLs.
              </p>
              <ul>
                <li>
                  HTTP Request Method: <code>POST</code>
                </li>
                <li>
                  Sandbox API Endpoint:
                  <code>https://apitest.authorize.net/xml/v1/request.api</code>
                </li>
                <li>
                  Production API Endpoint:
                  <code>https://api.authorize.net/xml/v1/request.api</code>
                </li>
                <li>
                  XML Content-Type: <code>text/xml</code>
                </li>
                <li>
                  JSON Content-Type:<code> application/json</code>
                </li>
                <li>
                  API Schema (XSD):
                  <code>
                    https://api.authorize.net/xml/v1/schema/AnetApiSchema.xsd
                  </code>
                </li>
              </ul>
              <p class="my-4 font-normal text-base">
                All calls to the Authorize.Net API require merchant
                authentication. Sign up for a sandbox account to quickly get
                started.
              </p>
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
      <section className="mt-20 mb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="w-full flex lg:flex-row flex-col gap-12 justify-between">
            <div className="lg:w-3/6 w-full">
              <Image
                src={IntegrateZero}
                width={"auto"}
                height={"auto"}
                alt="Integrate Zero"
                className="w-full"
              />
            </div>
            <div className="lg:w-3/6 w-full">
              <h4 className="text-4xl font-semibold pr-14 font-montserrat">
                A Note Regarding JSON Support
              </h4>
              <p className="my-4 font-normal text-base">
                The Authorize.Net API, which is not based on REST, offers JSON
                support through a translation of JSON elements to XML elements.
                While JSON does not typically require a set order to the
                elements in an object, XML requires strict ordering. Developers
                using the Authorize.Net API should force the ordering of
                elements to match this API Reference. Alternately, consider
                using the Authorize.Net SDKs for a seamless integration.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20 mb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="w-full ">
            <div className=" w-full">
              <h4 className="text-4xl font-semibold pr-14 font-montserrat">
                Test Your Authentication Credentials
              </h4>
              <p className="my-4 font-normal text-base">
                Use this method to test that your authentication credentials are
                valid and that they are being received successfully by the
                Authorize.Net API.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
