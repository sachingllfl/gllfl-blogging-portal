import PriceListItem from "./PriceListItem";
import LOGO_VISA from "@/app/assets/pricing/visa.png";
import LOGO_RUPAY from "@/app/assets/pricing/rupay.png";
import LOGO_MASTER from "@/app/assets/pricing/masterCard.png";
import LOGO_AMERICAN_EXPRESS from "@/app/assets/pricing/americanExpress.png";
import LOGO_BHIM from "@/app/assets/pricing/bhim.png";
import LOGO_GPAY from "@/app/assets/pricing/googlePay.png";
import LOGO_PHONEPAY from "@/app/assets/pricing/phonePe.png";
import LOGO_PAYTM from "@/app/assets/pricing/paytm.png";
import LOGO_AMEZONPAY from "@/app/assets/pricing/amazonPay.png";
import LOGO_HDFC from "@/app/assets/pricing/hdfcBank.png";
import LOGO_KOTAK from "@/app/assets/pricing/kotakBank.png";
import LOGO_ICICI from "@/app/assets/pricing/iciciBank.png";
import LOGO_YES from "@/app/assets/pricing/YesBank.png";
import LOGO_AXIS from "@/app/assets/pricing/axisBank.png";
import LOGO_CASHFREE from "@/app/assets/pricing/cashfreePayments.png";
import LOGO_PAYPAL from "@/app/assets/pricing/paypal.png";
import LOGO_MOBI from "@/app/assets/pricing/mobiKwik.png";
import LOGO_FREECHARGE from "@/app/assets/pricing/freeCharge.png";
import LOGO_JIOMONEY from "@/app/assets/pricing/jioMoney.png";
import OhvumIcon from "@/app/assets/pricing/ohvumicon.png";
import Image from "next/image";
import Link from "next/link";

const DomesticPayments = () => {
  const data = [
    {
      listTitle: "Debit Cards",
      logos: [LOGO_VISA, LOGO_RUPAY, LOGO_MASTER],
      fees: "1.5%",
      feeDesc: "Settlement @ T+1 Day",
    },
    {
      listTitle: "Credit Cards",
      logos: [LOGO_VISA, LOGO_RUPAY, LOGO_MASTER, LOGO_AMERICAN_EXPRESS],
      fees: "3.0%",
      feeDesc: "Settlement @ T+3 Day",
    },
    {
      listTitle: "UPI Payments",
      logos: [
        LOGO_BHIM,
        LOGO_GPAY,
        LOGO_PHONEPAY,
        LOGO_PAYTM,
        LOGO_AMEZONPAY,
        LOGO_AMEZONPAY,
        LOGO_AMEZONPAY,
      ],
      fees: "1.5%",
      feeDesc: "Settlement @ T+1 Day",
    },
    {
      listTitle: "Netbanking",
      logos: [
        LOGO_HDFC,
        LOGO_KOTAK,
        LOGO_ICICI,
        LOGO_YES,
        LOGO_AXIS,
        LOGO_AXIS,
        LOGO_AXIS,
      ],
      fees: "1.5%",
    },
    {
      listTitle: "Wallets",
      logos: [
        LOGO_CASHFREE,
        LOGO_PAYPAL,
        LOGO_MOBI,
        LOGO_FREECHARGE,
        LOGO_JIOMONEY,
        LOGO_JIOMONEY,
        LOGO_JIOMONEY,
      ],
      fees: "1.5%",
    },
  ];

  return (
    <div>
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
export default DomesticPayments;
