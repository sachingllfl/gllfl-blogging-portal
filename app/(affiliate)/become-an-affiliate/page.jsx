import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import Breadcrums from "@/app/components/Breadcrums";
import "@/app/styles/legal.css";
import AffiliateBanner from "@/app/components/Affiliate/AffiliateBanner";
import AffiliateFeature from "@/app/components/Affiliate/AffiliateFeature";
import AffiliateWhyPartnerWithUs from "@/app/components/Affiliate/AffiliateWhyPartnerWithUs";
const page = () => {
  return (
    <>
      <AffiliateBanner />
      <AffiliateFeature />
      <AffiliateWhyPartnerWithUs />
    </>
  );
};
export default page;
