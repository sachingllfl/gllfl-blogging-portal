"use client";
import React, { useState } from "react";
import Image from "next/image";
import FOOTERSVG from "@/app/assets/footer_top.svg";
import Link from "next/link";
import LOGOIMG from "@/app/assets/iop_logo.png";
import IopAppView from "@/app/assets/iopAppView.png";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";
import FaTwitter from "@/app/assets/twitterLogo.png";
import ICONAPPSTORE from "@/app/assets/icon_app_store.png";
import ICONPLAYSTORE from "@/app/assets/icon_play_store.png";
import ICONFooter from "@/app/assets/footer_right_logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setEmailErr("Please enter valid email");
      return false;
    }
    console.log(email);
  };
  return (
    <>
      <section className="py-6 relative z-[1]">
        <div className="max-w-6xl mx-auto px-4 flex items-start xl:items-center md:items-center  justify-center flex-col lg:flex-row  lg:justify-between">
          <div className="text-center lg:text-left">
            <h6 className=" text-xl md:text-3xl xl:text-5xl font-bold mb-4">
              IOP Mobile App
            </h6>
            <p className="text-base lg:text-xl">
              Accept, track & manage payments on-the-go
              <br />
              with real-time business insights at your fingertips!
            </p>
          </div>
          <div className="iopAppView">
            <Image
              src={IopAppView}
              alt="iop app view"
              width={286}
              height={570}
            />
          </div>
        </div>
      </section>

      <footer className=" mt-0 xl:-mt-80 lg:-mt-32">
        {/* <div className="max-w-6xl mx-auto px-4 grid xl:grid-cols-4 lg:grid-cols-1 xl:gap-4 lg:gap-0 gap-0">
          <div className="grid gap-4 w-full col-span-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            <div className="col-span-2 grid grid-cols-2">
              <div>
                <div className="fPanel">
                  <h6 className="fTitle">Company</h6>
                  <div className="fLinks">
                    <Link href={"company"}>About Us</Link>
                    <Link href={"/comingsoon"}>Careers</Link>
                    <Link href={"/comingsoon"}>Terms & Conditions</Link>
                    <Link href={"/comingsoon"}>Privacy Policy</Link>
                    <Link href={"/comingsoon"}>Grievance Redressal</Link>
                    <Link href={"/comingsoon"}>Responsible Disclosure</Link>
                    <Link href={"/comingsoon"}>Partners</Link>
                    <Link href={"/comingsoon"}>White papers</Link>
                    <Link href={"/comingsoon"}>Corporate Information</Link>
                  </div>
                </div>
                <div className="fPanel">
                  <h6 className="fTitle">Leading</h6>
                  <div className="fLinks">
                    <Link href={"/comingsoon"}>IOP Capital</Link>
                    <Link href={"/comingsoon"}>Instant Settlements</Link>
                    <Link href={"/comingsoon"}>Line of Credit</Link>
                    <Link href={"/comingsoon"}>Working Capital Loans</Link>
                    <Link href={"/comingsoon"}>
                      Marketplace Instant Settlements
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="fPanel">
                  <h6 className="fTitle">Accept Payments</h6>
                  <div className="fLinks">
                    <Link href={"/comingsoon"}>Payment Gateway</Link>
                    <Link href={"/comingsoon"}>Payment Pages</Link>
                    <Link href={"/comingsoon"}>Payment Links</Link>
                    <Link href={"/comingsoon"}>QR Codes</Link>
                    <Link href={"/comingsoon"}>Subscriptions</Link>
                    <Link href={"/comingsoon"}>Smart Collect</Link>
                    <Link href={"/comingsoon"}>Optimizer</Link>
                  </div>
                </div>
                <div className="fPanel">
                  <h6 className="fTitle">Developers</h6>
                  <div className="fLinks">
                    <Link href={"/comingsoon"}>Docs</Link>
                    <Link href={"/comingsoon"}>Integrations</Link>
                    <Link href={"/comingsoon"}>API Reference</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 grid grid-cols-2 sm:grid-cols-1 gap-4 auto-cols-max auto-rows-max">
              <div className="fPanel">
                <h6 className="fTitle">Solutions</h6>
                <div className="fLinks">
                  <Link href={"/comingsoon"}>Education</Link>
                  <Link href={"/comingsoon"}>E-commerce</Link>
                  <Link href={"/comingsoon"}>SaaS</Link>
                  <Link href={"/comingsoon"}>BFSI</Link>
                </div>
              </div>
              <div className="fPanel">
                <h6 className="fTitle">Free Tools</h6>
                <div className="fLinks">
                  <Link href={"/comingsoon"}>GST Calculator</Link>
                  <Link href={"/comingsoon"}>Online TDS Payment</Link>
                  <Link href={"/comingsoon"}>
                    GST Number Search{" "}
                    <span className="text-orange-400">New</span>
                  </Link>
                </div>
              </div>
              <div className="fPanel">
                <h6 className="fTitle">Become a Partner</h6>
                <div className="fLinks">
                  <Link href={"/comingsoon"}>Refer and Earn</Link>
                  <Link href={"/comingsoon"}>Onboarding APIs</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 grid xl:grid-cols-1 md:grid-cols-3 md:gap-3">
            <div className="fPanel lg:col-span-1">
              <h6 className="fTitle">Contact</h6>
              <div className="font-light text-sm space-y-2">
                <div className="flex gap-3 items-center">
                  <div className="shrink-0 bg-custom_blue w-7 h-7 items-center justify-center flex">
                    <FaPhoneAlt />
                  </div>{" "}
                  <p className="text-white/90">+91 22 26000457 / 8</p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="shrink-0 bg-custom_blue w-7 h-7 items-center justify-center flex">
                    <FaEnvelope />
                  </div>{" "}
                  <p className="text-white/90">contact@indiaonlinepay.com</p>
                </div>
                <div className="flex gap-3">
                  <div className="shrink-0 bg-custom_blue w-7 h-7 items-center justify-center flex">
                    <FaMapMarkerAlt />
                  </div>{" "}
                  <p className="text-white/90">
                    202, Shri Ramkrishna Chambers, Plot No 67B, TPS - IV,
                    Linking Road, Khar (W), Mumbai - 400052, India
                  </p>
                </div>
              </div>
              <div className="text-white flex gap-2 items-center justify-start flex-wrap mt-4">
                Connect us on:{" "}
                <Link
                  href={"https://www.facebook.com/indiaonlinepay"}
                  className="hover:text-orange-400"
                  target="_blank"
                >
                  <FaFacebookF />
                </Link>{" "}
                <Link
                  href={"https://twitter.com/indiaonlinepay"}
                  className="hover:text-orange-400"
                  target="_blank"
                >
                  <FaTwitter />
                </Link>{" "}
                <Link
                  href={"https://www.instagram.com/indiaonlinepay"}
                  className="hover:text-orange-400"
                  target="_blank"
                >
                  <FaInstagram />
                </Link>{" "}
                <Link
                  href={"https://in.linkedin.com/company/india-online-pay"}
                  className="hover:text-orange-400"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>
            <div className="fPanel lg:col-span-1">
              <h6 className="fTitle">Newsletter</h6>
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="text"
                  className="bg-white w-full py-4 pl-4 pr-10 outline-none border-0 rounded-none"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute top-1/2 -translate-y-1/2 right-4 text-xl text-slate-500"
                >
                  <FaPaperPlane />
                </button>
                {emailErr?.length > 0 && (
                  <div className="absolute text-xs text-rose-500">
                    {emailErr}
                  </div>
                )}
              </form>
            </div>
            <div className="fPanel lg:col-span-1">
              <h6 className="fTitle">Download the app now!</h6>
              <div className="relative flex gap-2 md:flex-col flex-row">
                <Link href={""}>
                  <Image
                    src={ICONPLAYSTORE}
                    alt="play store"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </Link>
                <Link href={""}>
                  <Image
                    src={ICONAPPSTORE}
                    alt="app store"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div> */}
        {/*  */}
        <Image
          src={FOOTERSVG}
          alt="footer svg"
          style={{ maxWidth: "100%", height: "auto", width: "100%" }}
          className="translate-y-1"
        />
        <div className="bg-[#06065e] pt-8">
          <div className="max-w-6xl mx-auto px-4 grid xl:grid-cols-4 lg:grid-cols-1 xl:gap-4 lg:gap-0 gap-0">
            <div className="grid gap-4 w-full col-span-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
              <div className="col-span-2 grid grid-cols-2">
                <div>
                  <div className="fPanel">
                    <h6 className="fTitle">Company</h6>
                    <div className="fLinks">
                      <Link href={"company"}>About Us</Link>
                      <Link href={"/comingsoon"}>Careers</Link>
                      <Link href={"/blog"}>Blogs</Link>
                    </div>
                  </div>
                  <div className="fPanel">
                    <h6 className="fTitle">Legal</h6>
                    <div className="fLinks">
                      <Link href={"/terms-and-conditions"}>
                        Terms & Conditions
                      </Link>
                      <Link href={"/privacy-policy"}>Privacy Policy</Link>
                      <Link href={"/comingsoon"}>Grievance Redressal</Link>
                      <Link href={"/comingsoon"}>Responsible Disclosure</Link>
                      {/* <Link href={"/comingsoon"}>Partners</Link> */}
                      {/* <Link href={"/comingsoon"}>White papers</Link> */}
                      <Link href={"/comingsoon"}>Corporate Information</Link>
                      {/* <Link href={"/comingsoon"}>IOP Capital</Link>
                      <Link href={"/comingsoon"}>Instant Settlements</Link>
                      <Link href={"/comingsoon"}>Line of Credit</Link>
                      <Link href={"/comingsoon"}>Working Capital Loans</Link>git branch

                      <Link href={"/comingsoon"}>
                        Marketplace Instant Settlements
                      </Link> */}
                      <Link href={"/comingsoon"}>Fraud & Risk Prevention</Link>
                      <Link href={"/comingsoon"}>AML</Link>
                      <Link href={"/comingsoon"}>KYC</Link>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="fPanel">
                    <h6 className="fTitle">Accept Payments</h6>
                    <div className="fLinks">
                      <Link href={"/comingsoon"}>Payment Gateway</Link>
                      <Link href={"/comingsoon"}>Payment Pages</Link>
                      <Link href={"/comingsoon"}>Payment Links</Link>
                      <Link href={"/comingsoon"}>QR Codes</Link>
                      <Link href={"/comingsoon"}>Subscriptions</Link>
                      <Link href={"/features/invoice-management-system"}>
                        E-Invoicing
                      </Link>
                      {/* <Link href={"/comingsoon"}>Smart Collect</Link> */}
                      {/* <Link href={"/comingsoon"}>Optimizer</Link> */}
                    </div>
                  </div>
                  <div className="fPanel">
                    <h6 className="fTitle">Developers</h6>
                    <div className="fLinks">
                      <Link href={"/comingsoon"}>Docs</Link>
                      <Link href={"/comingsoon"}>Integrations</Link>
                      <Link href={"/developer/api-reference"}>
                        API Reference
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 grid grid-cols-2 sm:grid-cols-1 gap-4 auto-cols-max auto-rows-max">
                <div className="fPanel">
                  <h6 className="fTitle">Solutions</h6>
                  <div className="fLinks">
                    <Link href={"/features/accept-all-cards"}>
                      Credit/Debit Cards
                    </Link>
                    <Link href={"/features/collect-and-intentn"}>UPI</Link>
                    <Link href={"/features/multi-currency-wallet-transfer"}>
                      Wallets
                    </Link>
                    <Link href={"/comingsoon"}>NetBanking</Link>
                    <Link href={"/features/international"}>
                      International Payments
                    </Link>
                  </div>
                </div>
                {/* <div className="fPanel">
                  <h6 className="fTitle">Free Tools</h6>
                  <div className="fLinks">
                    <Link href={"/comingsoon"}>GST Calculator</Link>
                    <Link href={"/comingsoon"}>Online TDS Payment</Link>
                    <Link href={"/comingsoon"}>
                      GST Number Search{" "}
                      <span className="text-orange-400">New</span>
                    </Link>
                  </div>
                </div> */}
                <div className="fPanel">
                  <h6 className="fTitle">Affiliate Program</h6>
                  <div className="fLinks">
                    <Link href={"/become-an-affiliate"}>
                      Become an Affiliate
                    </Link>
                    <Link href={"/comingsoon"}>Onboarding APIs</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 grid xl:grid-cols-1 md:grid-cols-3 md:gap-3">
              <div className="fPanel lg:col-span-1">
                <h6 className="fTitle">Contact</h6>
                <div className="font-light  text-white text-sm space-y-2">
                  <div className="flex gap-3 items-center">
                    <div className="shrink-0 bg-custom_blue w-7 h-7 items-center justify-center flex">
                      <FaPhoneAlt />
                    </div>
                    <div>
                      <Link
                        className="text-white/90 cursor-pointer"
                        href={"tel:+912226000457"}
                      >
                        +91 22 26000457
                      </Link>
                      /
                      <Link
                        className="text-white/90 cursor-pointer"
                        href={"tel:+912226000458"}
                      >
                        8
                      </Link>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="shrink-0 bg-custom_blue w-7 h-7 items-center justify-center flex">
                      <FaEnvelope />
                    </div>
                    <Link
                      className="text-white/90 cursor-pointer"
                      href={"mailto:contact@indiaonlinepay.com"}
                    >
                      contact@indiaonlinepay.com
                    </Link>
                  </div>
                  <div className="flex gap-3">
                    <div className="shrink-0 bg-custom_blue w-7 h-7 items-center justify-center flex">
                      <FaMapMarkerAlt />
                    </div>
                    <p className="text-white/90">
                      202, Shri Ramkrishna Chambers, Plot No 67B, TPS - IV,
                      Linking Road, Khar (W), Mumbai - 400052, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-10 xl:pt-11">
              <div className="fPanel">
                <h4 className="fTitle">Newsletter</h4>
                <div className="relative">
                  <input
                    type="text"
                    className="bg-white w-full py-2 pl-4 pr-10 outline-none border-0 rounded-none placeholder:text-sm"
                    placeholder="Email Address"
                  />
                  <button
                    type="button"
                    className="absolute top-1/2 -translate-y-1/2 right-4 text-xl text-slate-500"
                  >
                    <FaPaperPlane />
                  </button>
                </div>
              </div>

              <div className="fPanel">
                <h4 className="fTitle">Download the app now!</h4>
                <div className="relative flex gap-2 ">
                  <Link href={"/"}>
                    <Image
                      src={ICONPLAYSTORE}
                      alt="play store"
                      width={150}
                      height={60}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </Link>
                  <Link href={"/"}>
                    <Image
                      src={ICONAPPSTORE}
                      alt="app store"
                      width={150}
                      height={660}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </Link>
                </div>
              </div>

              <div className="fPanel">
                <h4 className="fTitle">Connect us on</h4>
                <div className="text-white flex gap-3 items-center justify-start flex-wrap mt-4">
                  <Link
                    href={"https://www.facebook.com/indiaonlinepay/"}
                    className="hover:text-orange-400"
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    href={"https://twitter.com/indiaonlinepay"}
                    className="hover:text-orange-400"
                  >
                    <Image
                      src={FaTwitter}
                      alt="twitter"
                      width={16}
                      height={16}
                    />
                  </Link>
                  <Link
                    href={"https://www.instagram.com/indiaonlinepay/"}
                    className="hover:text-orange-400"
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    href={"https://in.linkedin.com/company/india-online-pay/"}
                    className="hover:text-orange-400"
                  >
                    <FaLinkedinIn />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 mt-0">
            <div className="border-b border-white flex flex-wrap items-center justify-between pb-3">
              <Image
                src={LOGOIMG}
                priority={true}
                alt="Iop"
                width={200}
                height={150}
                className="mb-4 sm:pb-3 md:pb-0"
              />
              <div className="text-white text-xs sm:text-sm">
                <Link href="/merchant-agreement">Merchant Agreement</Link> |
                <Link href="/fraud-alert">Fraud Alert</Link> |
                <Link href="/merchant-onboarding-requisites">
                  Merchant Onboarding Requisites
                </Link>
                |
                <Link href="/customer-grievances-policy">
                  Customer Grievances Policy
                </Link>
                |<Link href="">Sitemap</Link>
              </div>
            </div>
            <div className="text-white text-xs md:text-sm  py-3 flex items-center justify-between">
              <div>
                Copyright &copy; {new Date().getFullYear()} India Online Pay -
                All Rights Reserved.
              </div>
              <div>
                <Image
                  src={ICONFooter}
                  width={117}
                  height={48}
                  alt="certified"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
