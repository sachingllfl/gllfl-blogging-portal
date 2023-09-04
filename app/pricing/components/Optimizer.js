import PriceListItem from "./PriceListItem";

import LOGO_BHIM from "@/app/assets/pricing/bhim.png";
import LOGO_PAYTM from "@/app/assets/pricing/paytm.png";
import LOGO_HDFC from "@/app/assets/pricing/hdfcBank.png";
import LOGO_YES from "@/app/assets/pricing/YesBank.png";
import LOGO_AXIS from "@/app/assets/pricing/axisBank.png";
import OhvumIcon from "@/app/assets/pricing/ohvumicon.png";
import Image from "next/image";
import Link from "next/link";

const Optimizer = () => {
  const data = [
    {
      listTitle: "Payment Gateways we support: ",
      logos: [LOGO_PAYTM, LOGO_HDFC, LOGO_YES, LOGO_AXIS, LOGO_BHIM],
    },
  ];
  return (
    <div className="py-6 px-6">
      <div className="text-lg mb-4 font-medium">
        Optimizer Payments Platform
      </div>
      <div className="mb-8">
        The complete payments management solution, Optimizer is enabling modern
        Indian businesses to improve customer experience and reduce transaction
        costs through intelligent routing{" "}
        <Link
          href="/"
          className="text-custom_blue underline hover:text-custom_orange"
        >
          Know more
        </Link>
      </div>
      <div className="text-lg mb-4 font-medium">
        Payment Gateways we support:
      </div>
      <div>
        {data.map((item, index) => {
          return <PriceListItem item={item} key={index} view={false} />;
        })}
      </div>
      <div>
        <div className="flex items-center justify-between my-10">
          <Link
            href="\"
            className="bg-custom_orange text-white flex mt-10 md:mt-0 rounded-lg"
          >
            <div className=" flex items-center uppercase py-2 px-4 text-lg font-semibold">
              Sign up for free
            </div>
          </Link>
          <Link
            href="\"
            className="bg-custom_orange text-white flex mt-10 md:mt-0 rounded-lg"
          >
            <div className=" flex items-center uppercase py-2 px-4 text-lg font-semibold">
              Request customized pricing
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Optimizer;
