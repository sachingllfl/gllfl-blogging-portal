import React from "react";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { HiArrowLongRight } from "react-icons/hi2";
import accept_all_cards from "@/app/assets/features/logos/accept_all_cards.png";
import boost_sales from "@/app/assets/features/logos/boost_sales.png";
import cash_back from "@/app/assets/features/logos/cash_back.png";
import collect_and_intent from "@/app/assets/features/logos/collect_and_intent.png";
import customization from "@/app/assets/features/logos/customization.png";
import depth_analytics from "@/app/assets/features/logos/depth_analytics.png";
import easy_intigration from "@/app/assets/features/logos/easy_intigration.png";
import frame_the_fraud from "@/app/assets/features/logos/frame_the_fraud.png";
import get_paid_with_sanp from "@/app/assets/features/logos/get_paid_with_sanp.png";
import inovice_management from "@/app/assets/features/logos/inovice_management.png";
import instant_activation from "@/app/assets/features/logos/instant_activation.png";
import instant_payout from "@/app/assets/features/logos/instant_payout.png";
import intelligent_routing from "@/app/assets/features/logos/intelligent_routing.png";
import international from "@/app/assets/features/logos/international.png";
import iop_vault_system from "@/app/assets/features/logos/iop_vault_system.png";
import maximum_payment from "@/app/assets/features/logos/maximum_payment.png";
import multi_currency from "@/app/assets/features/logos/multi_currency.png";
import multi_lingual from "@/app/assets/features/logos/multi_lingual.png";
import payment_modes from "@/app/assets/features/logos/payment_modes.png";
import platforms from "@/app/assets/features/logos/platforms.png";
import pricing from "@/app/assets/features/logos/payment_modes.png";
import resolve_queries from "@/app/assets/features/logos/resolve_queries.png";
import responsive_checkout from "@/app/assets/features/logos/responsive_checkout.png";
import support_24_7 from "@/app/assets/features/logos/support_24_7.png";
import wallet_transfer from "@/app/assets/features/logos/wallet_transfer.png";
import Image from "next/image";
import Breadcrums from "@/app/components/Breadcrums";

const page = () => {
  return (
    <>
      <Breadcrums>
        <Link href={""}>Home</Link> <FiChevronRight />
        Features
      </Breadcrums>
      <section className="w-full">
        <div className="max-w-6xl mx-auto md:px-4 px-0">
          <div className="bannerImage bg-[url('assets/features/feature_bg.png')] bg-cover bg-center bg-no-repeat py-24 px-6 text-white flex flex-col mb-6">
            <h6 className="text-xl md:text-3xl xl:text-5xl font-bold mb-6 text-white w-full">
              Advanced features for your business needs
            </h6>
            <div className="mb-6 text-white/90">
              Empower your business with all the right tools to accept online
              payments and provide the best customer experience
            </div>
            <Link
              href={"/"}
              className="bg-custom_orange text-white flex items-center justify-center gap-2 self-start group py-1.5 px-4 text-sm lg:text-base lg:py-3 lg:px-8 rounded lg:rounded-lg"
            >
              Get Started{" "}
              <HiArrowLongRight className="group-hover:translate-x-2 transition-all duration-150" />
            </Link>
          </div>
        </div>
      </section>
      <section className="py-4 xl:py-8 pt-0 xl:pt-0">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 uppercase font-bold text-center">
          <Link
            href={"/features/instant-activation"}
            className="rounded-xl p-4"
            style={{ boxShadow: "#6cd214 0px 0px 10px -2px" }}
          >
            <div className="text-[#6cd214]">Instant Activation</div>
            <Image
              src={instant_activation}
              alt="Instant Activation"
              width={180}
              height={480}
              className="mx-auto"
            />
          </Link>
          <Link
            href={"/features/instant-payout"}
            className="rounded-xl p-4"
            style={{ boxShadow: "#c49f2a 0px 0px 10px -2px" }}
          >
            <div className="text-[#c49f2a]">Instant Payout</div>
            <Image
              src={instant_payout}
              alt="Instant Payout"
              width={180}
              height={480}
              className="mx-auto"
            />
          </Link>
          <Link
            href={"/features/collect-and-intent"}
            className="rounded-xl p-4"
            style={{ boxShadow: "#e9661c 0px 0px 10px -2px" }}
          >
            <div className="text-[#e9661c]">
              Collect <span className="text-[#66686c]">&</span>{" "}
              <span className="text-[#27803b]">Intent</span>
            </div>
            <Image
              src={collect_and_intent}
              alt="Collect & Intent"
              width={180}
              height={480}
              className="mx-auto"
            />
          </Link>
          <Link
            href={"/features/accept-all-cards"}
            className="rounded-xl p-4"
            style={{ boxShadow: "#162b96 0px 0px 10px -2px" }}
          >
            <div className="text-[#162b96]">
              Accept <span className="text-[#c11800]">All</span>{" "}
              <span className="text-[#eb7000]">Cards</span>
            </div>
            <Image
              src={accept_all_cards}
              alt="Accept All Cards"
              width={180}
              height={480}
              className="mx-auto"
            />
          </Link>
          <Link
            href={"/features/24-7-support"}
            className="rounded-xl p-4"
            style={{ boxShadow: "#d42626 0px 0px 10px -2px" }}
          >
            <div className="text-[#e94e1a]">
              24/7 <span className="text-[#d42626]"></span>Support
            </div>
            <Image
              src={support_24_7}
              alt="24/7 Support"
              width={180}
              height={480}
              className="mx-auto"
            />
          </Link>
          <Link
            href={"/features/pricing"}
            className="rounded-xl p-4"
            style={{ boxShadow: "#ed8207 0px 0px 10px -2px" }}
          >
            <div className="text-[#ed8207]">Pricing</div>
            <Image
              src={pricing}
              alt="Pricing"
              width={180}
              height={480}
              className="mx-auto"
            />
          </Link>
          <Link
            href={"/features/platforms"}
            className="rounded-xl p-4"
            style={{ boxShadow: "#8153b0 0px 0px 10px -2px" }}
          >
            <div className="text-[#8153b0]">Platforms</div>
            <Image
              src={platforms}
              alt="Platforms"
              width={180}
              height={480}
              className="mx-auto"
            />
          </Link>
          <Link
            href={"/features/payment-modes"}
            className="rounded-xl p-4"
            style={{ boxShadow: "#ffc40a 0px 0px 10px -2px" }}
          >
            <div className="text-[#ffc40a]">
              <span className="text-[#12297c]">Payment</span> Modes
            </div>
            <Image
              src={payment_modes}
              alt="Payment Modes"
              width={180}
              height={480}
              className="mx-auto"
            />
          </Link>
          <Link
            href={"/features/inline-frame-integration"}
            className="rounded-xl p-4"
            style={{ boxShadow: "#05a7f3 0px 0px 10px -2px" }}
          >
            <div className="text-[#05a7f3]">Easy intigration</div>
            <Image
              src={easy_intigration}
              alt="Easy intigration"
              width={180}
              height={480}
              className="mx-auto"
            />
          </Link>
          <Link
            href={"/features/international"}
            className="rounded-xl p-4"
            style={{ boxShadow: "#e0202b 0px 0px 10px -2px" }}
          >
            <div className="text-[#e0202b]">International</div>
            <Image
              src={international}
              alt="International"
              width={180}
              height={480}
              className="mx-auto"
            />
          </Link>
          <Link
            href={"/features/multi-currency-options"}
            className="rounded-xl p-4"
            style={{ boxShadow: "#dba613 0px 0px 10px -2px" }}
          >
            <div className="text-[#dba613]">Multi-Currency</div>
            <Image
              src={multi_currency}
              alt="Multi-Currency"
              width={180}
              height={480}
              className="mx-auto"
            />
          </Link>
          <Link
            href={"/features/multi-lingual-check-outs"}
            className="rounded-xl p-4"
            style={{ boxShadow: "#0e0e8c 0px 0px 10px -2px" }}
          >
            <div className="text-[#0e0e8c]">Multi-Lingual</div>
            <Image
              src={multi_lingual}
              alt="Multi-Lingual"
              width={180}
              height={480}
              className="mx-auto"
            />
          </Link>
          <Link
            href={"/features/capacity-to-customize"}
            className="rounded-xl p-4"
            style={{ boxShadow: "#05a7f3 0px 0px 10px -2px" }}
          >
            <div className="text-[#05a7f3]">Customization</div>
            <Image
              src={customization}
              alt="Customization"
              width={180}
              height={480}
              className="mx-auto"
            />
          </Link>
          <Link
            href={"/features/intelligent-routing-system"}
            className="rounded-xl p-4"
            style={{ boxShadow: "#00699c 0px 0px 10px -2px" }}
          >
            <div className="text-[#00699c]">intelligent routing</div>
            <Image
              src={intelligent_routing}
              alt="intelligent routing"
              width={180}
              height={480}
              className="mx-auto"
            />
          </Link>
          <Link
            href={"/features/retry-options-boost-sales"}
            className="rounded-xl p-4"
            style={{ boxShadow: "#6cd214 0px 0px 10px -2px" }}
          >
            <div className="text-[#253288]">boost sales</div>
            <Image
              src={boost_sales}
              alt="boost sales"
              width={180}
              height={480}
              className="mx-auto"
            />
          </Link>
          <Link
            href={"/features/get-paid-with-snap"}
            className="rounded-xl p-4"
            style={{ boxShadow: "#456ab2 0px 0px 10px -2px" }}
          >
            <div className="text-[#456ab2]">get paid with sanp</div>
            <Image
              src={get_paid_with_sanp}
              alt="get paid with sanp"
              width={180}
              height={480}
              className="mx-auto"
            />
          </Link>
          <Link
            href={"/features/invoice-management-system"}
            className="rounded-xl p-4"
            style={{ boxShadow: "#96a0fd 0px 0px 10px -2px" }}
          >
            <div className="text-[#96a0fd]">Inovice Management</div>
            <Image
              src={inovice_management}
              alt="Inovice Management"
              width={180}
              height={480}
              className="mx-auto"
            />
          </Link>
          <Link
            href={"/features/in-depth-analytics"}
            className="rounded-xl p-4"
            style={{ boxShadow: "#00be28t 0px 0px 10px -2px" }}
          >
            <div className="text-[#044c84]">Depth Analytics</div>
            <Image
              src={depth_analytics}
              alt="Depth Analytics"
              width={180}
              height={480}
              className="mx-auto"
            />
          </Link>
          <Link
            href={"/features/iop-vault-system"}
            className="rounded-xl p-4"
            style={{ boxShadow: "#ff3f0f 0px 0px 10px -2px" }}
          >
            <div className="text-[#253288]">IOP Vault system</div>
            <Image
              src={iop_vault_system}
              alt="IOP Vault system"
              width={180}
              height={480}
              className="mx-auto"
            />
          </Link>
          <Link
            href={"/features/responsive-checkouts"}
            className="rounded-xl p-4"
            style={{ boxShadow: "#ffcc80 0px 0px 10px -2px" }}
          >
            <div className="text-[#284489]">Responsive Checkout</div>
            <Image
              src={responsive_checkout}
              alt="Responsive Checkout"
              width={180}
              height={480}
              className="mx-auto"
            />
          </Link>
          <Link
            href={"/features/resolve-queries-anytime"}
            className="rounded-xl p-4"
            style={{ boxShadow: "#96a0fd 0px 0px 10px -2px" }}
          >
            <div className="text-[#96a0fd]">Resolve Queries</div>
            <Image
              src={resolve_queries}
              alt="Resolve Queries"
              width={180}
              height={480}
              className="mx-auto"
            />
          </Link>
          <Link
            href={"/features/frame-the-fraud"}
            className="rounded-xl p-4"
            style={{ boxShadow: "#6289c6 0px 0px 10px -2px" }}
          >
            <div className="text-[#f2664c]">Frame the Fraud</div>
            <Image
              src={frame_the_fraud}
              alt="Frame the Fraud"
              width={180}
              height={480}
              className="mx-auto"
            />
          </Link>
          <Link
            href={"/features/maximum-payment-options"}
            className="rounded-xl p-4"
            style={{ boxShadow: "#feec8e 0px 0px 10px -2px" }}
          >
            <div className="text-[#2ea873]">Maximum Payment</div>
            <Image
              src={maximum_payment}
              alt="Maximum Payment"
              width={180}
              height={480}
              className="mx-auto"
            />
          </Link>
          <Link
            href={"/features/cash-back-for-iop-users"}
            className="rounded-xl p-4"
            style={{ boxShadow: "#f22e2f 0px 0px 10px -2px" }}
          >
            <div className="text-[#f22e2f]">Cash back</div>
            <Image
              src={cash_back}
              alt="Cash back"
              width={180}
              height={480}
              className="mx-auto"
            />
          </Link>
          <Link
            href={"/features/multi-currency-wallet-transfer"}
            className="rounded-xl p-4"
            style={{ boxShadow: "#ffc000 0px 0px 10px -2px" }}
          >
            <div className="text-[#3da58c]">Wallet Transfer</div>
            <Image
              src={wallet_transfer}
              alt="Wallet Transfer"
              width={180}
              height={480}
              className="mx-auto"
            />
          </Link>
        </div>
      </section>
      <section className="py-4 xl:py-8 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h6 className="text-xl md:text-3xl xl:text-5xl text-center font-bold mb-3">
            Let more than before
          </h6>
          {/* <h4 className="text-2xl font-medium">Let more than before</h4> */}
          <p className="text-custom_orange font-medium mb-4">
            Powerful tool sdesigned to complement your business needs
          </p>
          <div className="flex flex-wrap justify-center mt-6">
            <div className="group w-full md:w-1/3 xl:w-1/5 px-4 mb-6">
              <div className="w-[110px] h-[110px] flex items-center justify-center border border-custom_orange rounded-full mx-auto mb-4 group-hover:-translate-y-2 transition-all duration-300">
                <div className="w-[75px] h-[75px] bg-[url('assets/features/feature_sprite.png')]"></div>
              </div>
              <h6 className="font-bold">Dynamic Event Notification</h6>
              <p className="">
                Notifies you about the events that occur in your IOP account for
                timely action
              </p>
            </div>
            <div className="group w-full md:w-1/3 xl:w-1/5 px-4 mb-6">
              <div className="w-[110px] h-[110px] flex items-center justify-center border border-custom_orange rounded-full mx-auto mb-4 group-hover:-translate-y-2 transition-all duration-300">
                <div className="w-[75px] h-[75px] bg-[url('assets/features/feature_sprite.png')]  bg-[-75px_0]"></div>
              </div>
              <h6 className="font-bold">Marketing Tools</h6>
              <p className="">
                Innovative tools that complement your marketing efforts & help
                nurture key customers
              </p>
            </div>
            <div className="group w-full md:w-1/3 xl:w-1/5 px-4 mb-6">
              <div className="w-[110px] h-[110px] flex items-center justify-center border border-custom_orange rounded-full mx-auto mb-4 group-hover:-translate-y-2 transition-all duration-300">
                <div className="w-[75px] h-[75px] bg-[url('assets/features/feature_sprite.png')] bg-[-150px_0]"></div>
              </div>
              <h6 className="font-bold">Shopping Cart Plugins</h6>
              <p className="">
                Intergration API&apos;s to help you easily integrate with 3rd
                party shopping carts
              </p>
            </div>
            <div className="group w-full md:w-1/3 xl:w-1/5 px-4 mb-6">
              <div className="w-[110px] h-[110px] flex items-center justify-center border border-custom_orange rounded-full mx-auto mb-4 group-hover:-translate-y-2 transition-all duration-300">
                <div className="w-[75px] h-[75px] bg-[url('assets/features/feature_sprite.png')] bg-[-225px_0]"></div>
              </div>
              <h6 className="font-bold">IOP Smart Analytics</h6>
              <p className="">
                Derive complete insight on transactions through intuitive graphs
                and reports
              </p>
            </div>
            <div className="group w-full md:w-1/3 xl:w-1/5 px-4 mb-6">
              <div className="w-[110px] h-[110px] flex items-center justify-center border border-custom_orange rounded-full mx-auto mb-4 group-hover:-translate-y-2 transition-all duration-300">
                <div className="w-[75px] h-[75px] bg-[url('assets/features/feature_sprite.png')] bg-[-300px_0]"></div>
              </div>
              <h6 className="font-bold">24/7 Support</h6>
              <p className="">
                We treat every customer as a priority and go out of the way to
                assist you
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
