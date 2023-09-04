import Heading from "@/app/components/(legal)/Heading";
import "@/app/styles/legal.css";

const page = () => {
  return (
    <>
      <section className="py-4 xl:py-8 pt-0 xl:pt-0 mt-28 lg:mt-32">
        <div className="max-w-6xl mx-auto px-4">
          <Heading title={"Merchant Onboarding Requisites"} />

          <div className="legal-content">
            <div className="space-y-4">
              <h6>Merchants&apos; Website Compliance</h6>

              <ul className="list-disc list-inside ">
                <li>
                  <strong>Business Description: </strong> Provide details about
                  the business, including product/service offerings and pricing
                  structure.
                </li>
                <li>
                  <strong>About Us: </strong> Include a brief description of the
                  organization, corporate history, and management profiles.
                </li>
                <li>
                  <strong>Delivery and Shipping Policy: </strong>
                  Outline product shipping information and expected delivery
                  timeframes.
                </li>
                <li>
                  <strong>Refund and Cancellation: </strong>
                  Clearly define guidelines for handling returns and explain the
                  organization&apos;s refund/cancellation policy.
                </li>
                <li>
                  <strong>Privacy / Terms & Conditions Policy: </strong>
                  Detail how customer information is treated and protected and
                  explain terms and conditions.
                </li>
                <li>
                  <strong>Contact Us: </strong>
                  Display various communication channels through which customers
                  can reach out.
                </li>
              </ul>
            </div>
            <div className="space-y-4 my-4">
              <h6>Prohibited Businesses</h6>
              <p>
                Merchants are informed about businesses for which IndiaOnlinePay
                payment processing services will not be offered. Merchants must
                ensure their business does not fall under the prohibited list.
              </p>
            </div>
            <div className="space-y-4 my-4">
              <h6>Submission of Documentation</h6>
              <p>
                Merchants need to provide their business, contact, and bank
                details through the online signup process. Merchants are
                required to upload KYC (Know Your Customer) documents to
                complete their registration. It&apos;s important for merchants
                to adhere to these requirements to avail IndiaOnlinePay payment
                gateway services. These requisites ensure transparency,
                compliance, and a smooth onboarding process for both merchants
                and customers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default page;
