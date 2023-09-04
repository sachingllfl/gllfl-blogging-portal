import Link from "next/link";
import React from "react";
import { FaGears, FaHeadset, FaCommentDots } from "react-icons/fa6";
const SideActions = () => {
  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-0 z-10 hidden lg:block">
      <div className="flex flex-col gap-[1px]">
        <Link
          href={"/"}
          className="bg-white w-12 h-12 flex items-center justify-center text-3xl rounded-tl-lg hover:bg-custom_orange hover:text-white duration-300 transition-all relative group shadow-lg"
        >
          <FaGears />
          <div className="bg-custom_orange px-2 py-0.5 text-xs text-white rounded absolute right-0 opacity-0 group-hover:right-14 group-hover:opacity-100 duration-300 transition-all">
            Support
          </div>
        </Link>
        <Link
          href={"/"}
          className="bg-white w-12 h-12 flex items-center justify-center text-3xl hover:bg-custom_orange hover:text-white duration-300 transition-all relative group shadow-lg"
        >
          <FaHeadset />
          <div className="bg-custom_orange px-2 py-0.5 text-xs text-white rounded absolute right-0 opacity-0 group-hover:right-14 group-hover:opacity-100 duration-300 transition-all">
            Support
          </div>
        </Link>
        <Link
          href={"/"}
          className="bg-white w-12 h-12 flex items-center justify-center text-3xl rounded-bl-lg hover:bg-custom_orange hover:text-white duration-300 transition-all relative group shadow-lg"
        >
          <FaCommentDots />
          <div className="bg-custom_orange px-2 py-0.5 text-xs text-white rounded absolute right-0 opacity-0 group-hover:right-14 group-hover:opacity-100 duration-300 transition-all">
            Support
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideActions;
