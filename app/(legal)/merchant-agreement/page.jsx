import Heading from "@/app/components/(legal)/Heading";
import Link from "next/link";
import "@/app/styles/legal.css";

const page = () => {
  return (
    <>
      <section className="py-4 xl:py-8 pt-0 xl:pt-0 mt-28 lg:mt-32">
        <div className="max-w-6xl mx-auto px-4">
          <Heading title={"Merchant Agreement"} />
          <div className="legal-content">
            {" "}
            <div className="space-y-4">
              <h6 className="md:text-lg  text-md font-bold mb-2">
                AGREEMENT INSTRUCTIONS:
              </h6>
              <p>Please ensure you follow the instructions mentioned below:</p>

              <ul>
                <li>
                  The agreement can be franked for the value of Rs. 600/- in any
                  Co-Operative Bank OR E-Challan OR separately attach
                  Non-Judicial stamp paper for the value of Rs. 600/- with the
                  following content written on it : &quot;This Non-Judicial
                  Stamp Paper forms an integral part of the Global Legand and
                  Leasing Finance Ltd. Internet Gateway Merchant Legal Agreement
                  executed by ______________________ (Firm name) on
                  ____________(date)&quot;.
                </li>
                <li>
                  Ensure that the stamp paper is in your name, if you are
                  entering into an agreement with us in your personal capacity
                  (Individual), or in the name of Firm/ Company/ Organization
                  etc.
                </li>
                <li>
                  You are required to send hard copy of the executed agreement.
                  PLEASE DO NOT CHANGE ACTUAL FORMAT OF THE AGREEMENT. Golden
                  Legand and Leasing Finance Ltd. will not be liable for any
                  errors or omissions on the part of the Merchant details filled
                  in the Agreement.
                </li>
                <li>
                  Corrections should be made by cancelling and re-writing, and
                  such corrections should be counter signed by the applicant.
                  Please do not use ink whitener to cancel the text in
                  agreement.
                </li>
                <li>
                  The signature of the Authorized signatory should be same on
                  the PAN Card / Passport and the Agreement.
                </li>
                <li>
                  It is MANDATORY to sign and stamp on all pages of the
                  Agreement (including Non Judicial Stamp Paper if attached
                  separately) at the bottom left hand corner.
                </li>
                <li>
                  The agreement contains terms and conditions that are
                  prescribed by financial institutions who will be involved in
                  processing your online transactions. We are legally bound to
                  impose these terms on you and any changes are un-acceptable.
                  Should you have any questions or require a specific answer to
                  any clause in the agreement, please address these by email to
                  &nbsp;
                  <Link href={"mailto:legal@indiaonlinepay.com"}>
                    legal@indiaonlinepay.com
                  </Link>
                  .
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default page;
