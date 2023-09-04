import PriceListItem from "./PriceListItem";
import LOGO_VISA from "@/app/assets/pricing/visa.png";
import LOGO_RUPAY from "@/app/assets/pricing/rupay.png";
import LOGO_MASTER from "@/app/assets/pricing/masterCard.png";
import LOGO_AMERICAN_EXPRESS from "@/app/assets/pricing/americanExpress.png";
import LOGO_DINERSCLUB from "@/app/assets/pricing/dinersClub.png";
import OhvumIcon from "@/app/assets/pricing/ohvumicon.png";
import Image from "next/image";
import Link from "next/link";

const InternationalPayments = () => {
  const data = [
    {
      listTitle: "International Payments",
      logos: [
        LOGO_VISA,
        LOGO_RUPAY,
        LOGO_MASTER,
        LOGO_AMERICAN_EXPRESS,
        LOGO_DINERSCLUB,
      ],
      fees: "5.0%",
      feeDesc: "Per transaction",
    },
  ];
  return (
    <div className="py-6 px-6">
      <div className="text-lg mb-4 font-medium">International Payments</div>
      <div className="mb-8">
        Accept International Payments from 100+ currencies at the lowest cost.
        International payments on India Online Pay works across our extensive
        product suite.{" "}
        <Link
          href="/"
          className="text-custom_blue underline hover:text-custom_orange"
        >
          Know more
        </Link>
      </div>
      <div className="text-lg mb-4 font-medium">
        International Credit and Debit Cards
      </div>
      <div>
        {data.map((item, index) => {
          return <PriceListItem item={item} key={index} view={false} />;
        })}
      </div>
      <div className="flex items-center justify-between my-10">
        <div className="text-slate-950 underline font-medium flex items-center gap-2">
          <Image
            src={OhvumIcon}
            alt="OhvumIcon"
            width={20}
            height={20}
            style={{ maxWidth: "100%" }}
          />
          No Annual Maintenance
        </div>
        <Link
          href="\"
          className="bg-custom_orange text-white flex mt-10 md:mt-0 rounded-lg"
        >
          <div className=" flex items-center uppercase py-2 px-4 text-lg font-semibold">
            Sign up for free
          </div>
        </Link>
      </div>
    </div>
  );
};
export default InternationalPayments;
