import Heading from "@/app/components/(legal)/Heading";
import "@/app/styles/legal.css";
import Link from "next/link";
export default function page() {
  return (
    <>
      <section className="py-4 xl:py-8 pt-0 xl:pt-0 mt-28 lg:mt-32">
        <div className="max-w-6xl mx-auto px-4">
          <Heading title={"Fraud Alert"} />
          <div className="legal-content">
            <p>
              IndiaOnlinePay, a reputable payment gateway service in India, has
              identified a concerning trend of unauthorized individuals
              exploiting their brand name for fraudulent purposes. These
              perpetrators are engaging in deceptive activities by sending out
              communications from fake email addresses, falsely representing
              themselves as representatives of IndiaOnlinePay, the primary
              objective of these fraudulent communications is to deceive
              recipients into making unauthorized payments under the pretext of
              service fees, taxes, or other charges. To counteract this threat,
              IndiaOnlinePay, has adopted a multifaceted approach:
            </p>
            <p>
              <strong>Public Awareness Campaign:</strong> IndiaOnlinePay, has
              launched an awareness campaign to alert the public about the
              ongoing fraudulent activities. The purpose is to caution
              individuals against sharing sensitive information or making
              payments based on deceptive communications.
            </p>
            <p>
              <strong>Authentication of Official Communications:</strong>{" "}
              IndiaOnlinePay, has emphasized that all legitimate communications
              from their organization will originate from email addresses ending
              with @ indiaonlinepay.com. Any communication received from email
              addresses with different domains should be treated with
              scepticism.
            </p>
            <p>
              <strong>Legal Action and Complaints:</strong> IndiaOnlinePay, has
              taken immediate legal action by filing formal complaints with
              relevant law enforcement agencies. These actions are aimed at
              curbing the activities of unidentified entities involved in
              exploiting the IndiaOnlinePay, brand name for fraudulent purposes.
            </p>
            <p>
              In case you are aware of any inappropriate use of our brand name
              or If you have any doubts about the authenticity of any
              correspondence purportedly from, for or on behalf of
              IndiaOnlinePay, Please click here to report our team immediately
              or send an e-mail to risk@ indiaonlinepay.com and
              legal@indiaonlinepay.com
            </p>
            <p>
              <strong>Limited Liability Assertion:</strong> IndiaOnlinePay, has
              issued a statement asserting that they will not assume liability
              for misrepresentations made in fraudulent communications.
              Furthermore, the company does not hold responsibility for any
              financial losses arising from these fraudulent activities.
            </p>
            <p>
              <strong>Cautionary Advice to Public:</strong> IndiaOnlinePay, has
              advised the public to exercise caution and discretion when
              encountering unsolicited emails, calls, or messages that request
              personal or financial information or solicit payments in the name
              of IndiaOnlinePay
            </p>

            <p>
              <strong>Establishment of Reporting Mechanism:</strong> To
              facilitate swift action against unauthorized brand name usage and
              suspicious communications, IndiaOnlinePay, has established
              dedicated reporting channels for individuals to promptly inform
              their team about such incidents.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
