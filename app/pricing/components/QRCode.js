import PriceListItem from "./PriceListItem";
import LOGO_BHIM from "@/app/assets/pricing/bhim.png";
import LOGO_GPAY from "@/app/assets/pricing/googlePay.png";
import LOGO_PHONEPAY from "@/app/assets/pricing/phonePe.png";
import LOGO_PAYTM from "@/app/assets/pricing/paytm.png";
import LOGO_AMEZONPAY from "@/app/assets/pricing/amazonPay.png";
import OhvumIcon from "@/app/assets/pricing/ohvumicon.png";
import Image from "next/image";
import Link from "next/link";

const QRCode = () => {
  const data = [
    {
      listTitle: "UPI  QR Code Payments",
      logos: [LOGO_BHIM, LOGO_GPAY, LOGO_PHONEPAY, LOGO_PAYTM, LOGO_AMEZONPAY],
      fees: "0.25%",
      feeDesc: "Per transaction",
    },
  ];

  return (
    <div className="py-6 px-6">
      <div className="text-lg mb-4 font-medium">QR Code Payments</div>
      <div className="mb-8">
        Receive UPI payments from customers instantly with custom QR Codes.
        Choose between UPI QR & Bharat QR & 7+ features.{" "}
        <Link
          href="/"
          className="text-custom_blue underline hover:text-custom_orange"
        >
          Know more
        </Link>
      </div>
      <div className="text-lg mb-4 font-medium">UPI QR Code Payments</div>
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
export default QRCode;
