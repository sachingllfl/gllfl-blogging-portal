"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BiLogoPlayStore, BiLogoApple, BiChevronDown } from "react-icons/bi";
import LOGOIMG from "@/app/assets/iop_logo.png";
import INDIAIMG from "@/app/assets/india_flag.png";
import { navlinks } from "@/app/utils/navlinks";
import "@/app/styles/header.css";
import { checkViewPort } from "../redux/features/globalSlice";
const Header = () => {
  const dispatch = useDispatch();
  const { isMobile } = useSelector((state) => state.global);
  const [show, setShow] = useState(false);

  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleCheckViewPort = useCallback(() => {
    dispatch(checkViewPort());
  }, [dispatch]);

  useEffect(() => {
    handleCheckViewPort();
    window.addEventListener("resize", handleCheckViewPort);
    return () => {
      window.removeEventListener("resize", handleCheckViewPort);
    };
  }, [handleCheckViewPort]);

  const setSticky = useCallback(() => {
    if (window.scrollY >= 85) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }, []);

  const toggleMenu = () => {
    if (isMobile) {
      setShow(!show);
    }
  };
  const toggleSubmenu = () => {};

  useEffect(() => {
    setSticky();
    window.addEventListener("scroll", setSticky);
    return () => {
      window.removeEventListener("scroll", setSticky);
    };
  }, [setSticky]);

  const hideMenuOnClick = useCallback(
    async (event) => {
      event.preventDefault();
      setShow(false);
      router.push(event.target.href);
      // console.log(navlinks);
    },
    [router]
  );

  return (
    <>
      <header
        id="header"
        className={
          `${
            isSticky || pathname !== "/" || show
              ? "bg-custom_dark_blue "
              : "bg-transparent"
          } w-full  fixed  top-0 left-0 z-50 h-16 lg:h-auto py-2 lg:py-0   ` +
          " " +
          `${show ? " h-[100dvh] duration-300 ease-in" : ""}`
        }
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between gap-4">
          <Link href="/" className="text-white font-bold text-2xl">
            <Image
              src={LOGOIMG}
              priority="true"
              alt="iop logo"
              className="w-48 lg:w-60"
            />
          </Link>
          <div className="flex flex-col ml-auto">
            <div className="text-white text-xs hidden lg:flex gap-3 items-center justify-end mt-2">
              <div className="items-center gap-2 text-xs hidden xl:flex">
                Simplify payroll with India Online Payroll - Fast & Compliant{" "}
                <Link href="/" onClick={hideMenuOnClick} className="underline">
                  Claim 1 Month FREE
                </Link>
              </div>
              <div className="flex gap-2 items-center">
                <Image src={INDIAIMG} alt="india" />
                <Link
                  href={"/"}
                  onClick={hideMenuOnClick}
                  className="flex items-center gap-2"
                >
                  <BiLogoPlayStore /> Google Play
                </Link>
                <Link
                  href={"/"}
                  onClick={hideMenuOnClick}
                  className="flex items-center gap-2"
                >
                  <BiLogoApple /> Apple Store
                </Link>
              </div>
            </div>
            <div className="flex gap-6">
              <div
                className={` lg:bg-transparent fixed w-full lg:w-auto overflow-y-auto lg:overflow-visible left-0 bottom-0 lg:top-0 top-16 lg:relative lg:block lg:ml-auto duration-300 ease-in-out ${
                  show && isMobile ? "block" : "hidden"
                } `}
              >
                <ul className="flex lg:gap-4 flex-col lg:flex-row">
                  {navlinks.map((nav, index) => {
                    return (
                      <li
                        key={index}
                        className={
                          "relative group border-b border-white/20 lg:border-0" +
                          (nav.subMenu ? " hasmenu " : "")
                        }
                      >
                        <div className="flex justify-between gap-1 items-center  px-4 ">
                          <Link
                            onClick={hideMenuOnClick}
                            href={nav.path}
                            className={
                              "py-5  px-4 lg:px-0 items-center text-white/95 lg:before:w-full lg:before:opacity-0 group-hover:lg:before:opacity-100 lg:before:h-[3px] lg:before:absolute lg:before:bottom-0 lg:before:left-0 lg:before:bg-custom_blue transition-all duration-300 lg:before:transition-all lg:before:duration-300"
                            }
                          >
                            {nav.label}
                          </Link>
                          {nav.subMenu ? (
                            <BiChevronDown className="text-white/90" />
                          ) : null}
                        </div>

                        {nav.subMenu && (
                          <ul className={`${nav.submenuClass} submenu px-8  `}>
                            {nav.subMenu.map((item, idx) => {
                              return (
                                <li key={idx}>
                                  <Link
                                    href={item.path}
                                    onClick={hideMenuOnClick}
                                    className="block"
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex gap-4 items-center justify-center lg:ml-0 ml-auto">
                <Link
                  href="/"
                  className="border border-white text-white/95 px-4 py-1.5 rounded-md hover:bg-custom_orange hover:border-custom_orange duration-300 ease-in-out"
                >
                  Login
                </Link>
                <Link
                  href="/"
                  className="border border-white text-white/95 px-4 py-1.5 rounded-md hidden lg:block hover:bg-custom_blue hover:border-custom_blue duration-300 ease-in-out"
                >
                  Create Acount
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`${show ? "active burger" : "burger"}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
