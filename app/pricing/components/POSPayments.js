import PriceListItem from "./PriceListItem";
import LOGO_VISA from "@/app/assets/pricing/visa.png";
import LOGO_RUPAY from "@/app/assets/pricing/rupay.png";
import LOGO_MASTER from "@/app/assets/pricing/masterCard.png";
import LOGO_AMERICAN_EXPRESS from "@/app/assets/pricing/americanExpress.png";
import OhvumIcon from "@/app/assets/pricing/ohvumicon.png";
import Image from "next/image";
import Link from "next/link";

const POSPayments = () => {
  const data = [
    {
      listTitle: "Debit Cards",
      logos: [LOGO_VISA, LOGO_RUPAY, LOGO_MASTER],
      fees: "0.25%",
      feeDesc: "Per transaction",
    },
    {
      listTitle: "Credit Cards",
      logos: [LOGO_VISA, LOGO_RUPAY, LOGO_MASTER, LOGO_AMERICAN_EXPRESS],
      fees: "1.25%",
      feeDesc: "Per transaction",
    },
  ];

  return (
    <div className="py-6 px-6">
      <div className="text-lg mb-4 font-medium">India Online Pay POS </div>
      <div className="mb-8">
        Accept all modes of payments at all customer touchpoints – from retail
        counters to doorstep delivery.{" "}
        <Link
          href="/"
          className="text-custom_blue underline hover:text-custom_orange"
        >
          Know more
        </Link>
      </div>
      <div>
        {data.map((item, index) => {
          return <PriceListItem item={item} key={index} view={true} />;
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
export default POSPayments;
