import Heading from "@/app/components/(legal)/Heading";
import "@/app/styles/legal.css";
import Link from "next/link";
const page = () => {
  return (
    <>
      <section className="py-4 xl:py-8 pt-0 xl:pt-0 mt-28 lg:mt-32">
        <div className="max-w-6xl mx-auto px-4">
          <Heading title={"Customer Grievances Policy"} />

          <div className="legal-content">
            <div className="space-y-4">
              <h6>Grievance Redressal Mechanism</h6>
              <p>
                IndiaOnlinePay values all its customers, and endeavours to
                provide a sincere and transparent approach to all our customers.
                For the convenience of our customers and to offer optimum
                support, IndiaOnlinePay has set up a grievance redressal
                mechanism and implemented a Grievance Policy.
              </p>
              <p>
                Our Grievance Policy outlines a structured mechanism for
                grievance redressal and the various channels available. Our
                policy aims at minimizing Customer grievances and grievances
                through a proper channelized approach, review mechanism and
                prompt redressal of all Customer grievances.
              </p>

              <p>
                <strong>
                  The Objective of our Grievance Policy shall be to ensure that:
                </strong>
              </p>
              <ul>
                <li>Customers are treated fairly and without bias always.</li>
                <li>
                  The complaints raised by the Customers are dealt with courtesy
                  and resolved in a timely manner.
                </li>
                <li>
                  Customers are informed of the avenues to escalate their
                  complaints within the company.
                </li>
                <li>
                  Customers are informed of their rights so that they can opt
                  for alternative remedies if they are not fully satisfied with
                  the Company&apos;s response or resolution to their complaints.
                </li>
                <li>
                  Refunds and chargebacks are processed in a timely manner and
                  in accordance with RBI-prescribed timelines and other
                  obligations.
                </li>
              </ul>
              <p>
                <strong>If the Merchant is not responsive</strong>
              </p>
              <p>
                The Customer can report the issue to IndiaOnlinePay.
                IndiaOnlinePay has always made available the above hyperlink to
                the Customer(s) on its website through which the Customer may
                report their complaints/ grievances to IndiaOnlinePay for the
                transactions processed using IndiaOnlinePay services. If a
                grievance received by any of the above channels is not resolved
                within the prescribed time frame or he/she is not satisfied with
                the resolution offered, he/she can approach the Grievance
                Officer appointed by IndiaOnlinePay. The Grievance Officer is
                the nodal officer appointed by IndiaOnlinePay for the purpose of
                customer grievance redressal.
              </p>
              <p>
                A Customer may reach out to IndiaOnlinePay for disputes arising
                out of any of the following grounds:
              </p>
              <ul>
                <li>
                  Unreasonable delay (beyond delivery due date) or failure on
                  the part of the Merchant in delivering goods/ services to the
                  Customers for which the transactions were processed using
                  IndiaOnlinePay services.
                </li>
                <li>Unauthorised electronic fund transfer.</li>
                <li>
                  Unreasonable delay (beyond the time communicated to the
                  Customer by the Merchant) on refunding the transaction amount
                  post refund confirmation.
                </li>
                <li>
                  Non-adherence to any instructions/ circulars/ guidelines of
                  the Reserve Bank of India or any applicable law to
                  IndiaOnlinePay and/ or the merchant; or
                </li>
                <li>
                  Any other issue pertaining to the transaction processed by
                  IndiaOnlinePay.
                </li>
              </ul>

              <h6>Escalation matrix for disposal of complaints</h6>
              <p>
                <strong>Level 1</strong>
              </p>
              <p>
                The Customer can visit IndiaOnlinePay Support Page and refer to
                the information (provided in an FAQ format) for the specific
                queries/issues related to their complaints/ grievances. The
                Customer can fill up forms to report an issue available on these
                pages to report their grievance. Here Customers have the option
                to &apos;Track Payment/ Refund Status&apos; using a transaction
                reference ID, or &apos;Report an Issue&apos; to IndiaOnlinePay.
                On submission of this form, a ticket is created which allots a
                unique reference number. The IndiaOnlinePay Support team shall
                respond to the grievance filed by the Customer within 4-5
                working days from the date on which grievance was filed. If the
                Customer is not satisfied with the response provided, the
                Customer can go for the next level of escalation.
              </p>
              <p>
                <strong>Level 2</strong>
              </p>
              <p>
                In case the Customer wishes to further escalate the complaints/
                grievances, the Customer can get the grievance registered by
                mailing the issue to IndiaOnlinePay. IndiaOnlinePay shall
                attempt to respond within 4-5 working days from the date on
                which grievance was filed. The Customer may request for an
                update on the grievance in case any grievance requires more than
                the specified time period. The Customer shall be kept updated on
                the status of their complaint(s). If the Customer is not
                satisfied with the response provided, the Customer can go for
                the next level of escalations.
              </p>
              <p>
                <strong>Level 3</strong>
              </p>
              <p>
                In case the Customer still has any complaint/ grievance, the
                Customer shall escalate such complaint/ grievance to
                IndiaOnlinePay&apos;s Grievance Officer, the details of whom are
                provided below.
              </p>
              <address>
                <p>
                  <strong>
                    Grievance Officer: Prisha
                    <br />
                    Address: IndiaOnlinePay Pvt Ltd, Mumbai, India
                    <br /> E-Mail:
                    <Link href={"mailto:grievances@indiaonlinepay.com"}>
                      grievances@indiaonlinepay.com
                    </Link>
                  </strong>
                </p>
              </address>
              <p>
                <strong>Level 4</strong>
              </p>
              <p>
                If the Customer is not satisfied with the resolution provided by
                IndiaOnlinePay. or has not received a reply within 30 days of
                filing the complaint with IndiaOnlinePay., then he can file the
                complaint with the RBI Integrated Ombudsman located at the RBI
                Office in Chandigarh. Complaint lodging portal of the Ombudsman:
                <Link href={"https://cms.rbi.org.in/"}>
                  https://cms.rbi.org.in/
                </Link>
              </p>
              <address>
                <p>
                  <strong>
                    Toll-Free Phone No: <Link href={"tel:14448"}>14448</Link>
                    <br />
                    E-Mail Id:
                    <Link href={"mailto:CRPC@rbi.org.in"}>CRPC@rbi.org.in</Link>
                    <br />
                    Address: Centralized Receipt and Processing Centre, Reserve
                    Bank of India, 4th Floor, Sector 17, Chandigarh 160017
                  </strong>
                </p>
              </address>
              <p>For more details, please refer to the link: RBI Ombudsman</p>
              <h6>
                Listing of other common queries and resolutions with TATs:
              </h6>
              {/* Table image1 */}
              <div className="w-full overflow-x-auto">
                <table className="table-auto legal-table">
                  <thead>
                    <tr>
                      <th>CUSTOMER QUERIES</th>
                      <th> RESOLUTION</th>
                      <th>TAT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td title="Character Accurarcy=98.96">
                        Customer enquires about the transaction status.
                      </td>
                      <td>
                        We provide all details such as the order no, PA
                        reference number, date of transaction, transaction
                        amount, merchant URL and status of transaction.
                      </td>
                      <td>
                        24 hours (For queries received between 10 am-7 pm Monday
                        to Sunday)
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Transaction successful, but no response received from
                        merchant.
                      </td>
                      <td>
                        We provide all the information to the customer,
                        including the merchant details. Additionally, we forward
                        the same mail to the merchant providing services,
                        keeping the customer in CC.
                      </td>
                      <td>
                        24 hours (For queries received between 10 am-7 pm Monday
                        to Sunday)
                      </td>
                    </tr>
                    <tr>
                      <td>Refund issues</td>
                      <td>
                        We provide all the refund details to the customers with
                        bank reference number and ARN number for customers to
                        check further with his bank.
                      </td>
                      <td>
                        24 hours (For queries received between 10 am-7 pm Monday
                        to Sunday
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Refund not reflecting in the customer&apos;s account
                      </td>
                      <td>
                        We recheck the funds status and update the customer OR
                        raise the issue with the concerned bank. The updates
                        received are shared with the customer
                      </td>
                      <td>
                        24 hrs to 48 hrs (working days) post receiving update
                        from concerned entity.
                      </td>
                    </tr>
                    <tr>
                      <td>Amount debited but transaction not found.</td>
                      <td>
                        We search for the transaction with details such as:
                        <ul>
                          <li>
                            Email Id used while performing the transaction
                          </li>
                          <li>Date and amount of transaction,</li>
                          <li>
                            And, if still not found, then ask customers to
                            contact their concerned bank for more details or
                            other reference nos.
                          </li>
                        </ul>
                      </td>
                      <td>
                        24 hrs to 48 hrs (working days) post receiving update
                        from concerned entity.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Table image1 */}
              <h6>Dispute Management/ Chargebacks Mechanism</h6>
              <p>
                A dispute, also known as chargeback, arises when a Customer
                raises a claim with the issuing bank for a purchase/transaction
                that was made on their account. Card networks and regulated
                entities such as National Payments Corporation of India (NPCI)
                provide the rights to the cardholder/ consumer to claim a
                chargeback for various reasons such as:
              </p>
              <ul>
                <li>Fraud transactions.</li>
                <li>Product/ services not delivered.</li>
                <li>Defective product or services are delivered.</li>
                <li>Duplicate payments/ double debits; etc.</li>
              </ul>
              <p>
                The timeline(s) for raising such dispute may vary from card
                association to card association as per their policy which is
                posted or made available on their website. Every dispute raised
                carries a reason also referred to as reason code, which is
                defined by card networks. The reason codes are listed hereunder
                in Annexure II- Reason Codes
              </p>
              <p>
                <strong>Stages of chargeback</strong>
              </p>
              <p className="text-center">
                The stages of chargebacks (or lifecycle) are as follows:
              </p>
              <div className="w-full overflow-x-auto">
                <table className="table-auto legal-table">
                  <thead>
                    <tr>
                      <th>Stage</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>First level of chargeback</td>
                      <td>
                        This is the first iteration where the Customer presents
                        a chargeback claim to their issuing bank. The
                        notification is then sent to the Merchant for collection
                        of valid proofs to dissolve the claim. The case is ruled
                        in favour of or against the Merchant based on the
                        sufficiency of the proof.
                      </td>
                    </tr>
                    <tr>
                      <td>Pre-arbitration</td>
                      <td>
                        When a customer re-disputes the validity of the
                        documents presented by the Merchant, the chargeback
                        reaches the pre-arbitration phase. Based on the nature
                        of the claim made by the Customer/ the issuing bank,
                        additional documents are sought from the Merchant. Cases
                        at the pre-arbitration level attract a processing fee by
                        the Card Networks and/or penalties.
                      </td>
                    </tr>
                    <tr>
                      <td>Arbitration</td>
                      <td>
                        When the issuer disputes the Merchant&apos;s second
                        presentment, it leads to arbitration. The documents
                        presented at the arbitration should be compelling enough
                        for the case to be ruled in favour of the Merchant. In
                        the event the case is ruled in favour of the Customer by
                        the networks, the losing party bears an arbitration fee
                        along with processing fees.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                <strong>Chargeback Process</strong>
              </p>
              <p>
                The chargeback process would involve parties such as the
                cardholder, the issuer, the acquirer, the processor, and the
                merchant who renders the goods or services, each of which has
                different responsibilities in the lifecycle.
              </p>
              <p>
                <strong>The overview of the process is as follows:</strong>
              </p>
              {/* process diagram image */}
              <p className="text-red-800">
                Where a customer has reached out to the issuing bank/ other
                institution and has disputed the transaction made by them using
                his/ her payment mode/ mechanism on the merchant site, the
                following process is followed:
              </p>
              <ul>
                <li>
                  The acquiring partner sends us a dispute notification to
                  determine the validity of the transaction and we create a
                  dispute corresponding to such transaction(s) in our system.
                </li>
                <li>
                  Upon receiving such notification from the bank, IndiaOnlinePay
                  notifies the merchant with the dispute details and the
                  deadline (as defined by IndiaOnlinePay based on the
                  bank&apos;s deadline) to submit such supporting documents.
                </li>
                <li>
                  The acquiring partner sends us a dispute notification to
                  determine the validity of the transaction and we create a
                  dispute corresponding to such transaction(s) in our system.
                </li>
                <li>
                  Upon receiving such notification from the bank, IndiaOnlinePay
                  notifies the merchant with the dispute details and the
                  deadline (as defined by IndiaOnlinePay based on the
                  bank&apos;s deadline) to submit such supporting documents.
                </li>
              </ul>
              <p>
                <strong>Chargeback Resolution</strong>
              </p>
              <p>
                A chargeback is resolved when the case is closed either through
                acceptance of the Customer&apos;s claim or by contesting the
                claim by means of providing compelling evidence to IOP
                (IndiaOnlinePay) which is further shared with the Card Networks.
                The timelines for the chargeback resolution are subject to the
                timelines outlined by the respective networks. The possible
                outcomes of a chargeback are tabulated below:
              </p>
              <div className="w-full overflow-x-auto">
                <table className="table-auto legal-table">
                  <thead>
                    <tr>
                      <th>Possibility</th>
                      <th>Outcome</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Acceptance</td>
                      <td>
                        When the Customer&apos;s chargeback is valid, the
                        Merchant may choose to accept the chargeback. An
                        acceptance will result in a credit to the
                        Customer&apos;s account as per the network timelines and
                        a permanent debit to the Merchant&apos;s account.
                      </td>
                    </tr>
                    <tr>
                      <td>Contestation/ Representation</td>
                      <td>
                        When services/ goods are rendered against the said
                        payment, the Merchant can upload the relevant documents
                        such as proof of delivery, service utilisation proofs
                        etc. The documents hence submitted are further
                        represented to the acquiring banks and subsequently to
                        the issuers and networks.
                      </td>
                    </tr>
                    <tr>
                      <td>Deemed accepted</td>
                      <td>
                        In the event a chargeback is not represented/ accepted
                        by the Merchant within the given timeline, the
                        chargeback is deemed as accepted and the decision is not
                        reversible. As in the case of acceptance, this too shall
                        have a permanent debit to the Merchant&apos;s IOP
                        (IndiaOnlinePay) account
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h6>Turnaround times for each stage</h6>
              <p>
                The customer has 120 days (or as defined by the network or
                issuer) from the date of transaction to raise a chargeback. The
                chargeback resolution, however, is subject to the ruling of the
                case.
              </p>
              <h6>Refunds</h6>
              <p>
                <strong>
                  How are refunds initiated in IOP (IndiaOnlinePay)
                </strong>
              </p>
              <p>
                The customer requests a refund from the merchant due to reasons
                such as the non-delivery of goods or poor service quality.
                Merchants can initiate refunds against transactions with IOP
                (IndiaOnlinePay) either via the website or via APIs. All refunds
                are made to the original method of payment unless agreed
                explicitly by the end customer to credit to an alternate mode.
                Credits towards reversed transactions (where funds are received
                by IOP (IndiaOnlinePay)) and refund transactions shall be routed
                back through IOP (IndiaOnlinePay)&apos;s PA escrow account
                unless as per contract the refund.
              </p>
              <p>
                <strong>What is the Payment Gateway refund process?</strong>
              </p>
              <p>
                Once the merchant makes a refund request, IOP (IndiaOnlinePay)
                will check if the request is eligible, accept the request and
                then propagate this information to the respective acquiring
                banks and other banking institutions via APIs.
              </p>
              <p>
                A refund request typically involves an exchange of information
                between 3 to 4 parties. Each of them has its own processes to
                file the request, map to their respective payment IDs and then
                process it forward. Many of these processes are not fully
                automated today and thus take around 5 - 10 working days to
                reach the customer&apos;s account/ card balance. IOP
                (IndiaOnlinePay) or any other payment aggregator acts only as a
                mediator between the customer and the banks.
              </p>
              <h6>Refund processing timelines</h6>
              <p>
                All refund requests, once eligible and accepted are initiated
                with the banking partners immediately. The refund request is
                sent via APIs or other channels based on the support provided by
                the acquiring banks.
              </p>
              <p>
                <strong>Standard processing time (5 to 7 days):</strong>
              </p>
              <p>
                Once the refund is initiated with the bank, it generally takes
                about 5 to 7 working days to get reflected on the
                customer&apos;s account/ card statement. This is due to the
                processes in the banking ecosystem which are not fully automated
                and require some manual oversight. Given the number of entities
                involved and the variance in their processes to handle refunds,
                it takes 5 to 7 business days to credit the money to the
                customer&apos;s account.
              </p>
              <p>
                <strong>Extended processing time (beyond 7 days):</strong>
              </p>
              <p>
                Sometimes a refund request gets dropped at different points in
                the process due to system failures and hence won&apos;t go
                through the API route or the online refund status can&apos;t be
                updated. In such scenarios, IOP (IndiaOnlinePay) intervenes with
                manual oversight to escalate cases with the bank and get them
                resolved. Since there is a manual oversight required at various
                parties the turnaround times get further extended. The standard
                turnaround time is 5 - 7 business days. However, each payment
                mode has a slightly different time frame for refunds.
              </p>
              {/* tabular dat image */}
              <div className="w-full overflow-x-auto">
                <table className="table-auto legal-table">
                  <thead>
                    <tr>
                      <th>Payment Mode</th>
                      <th>Minimum TAT</th>
                      <th>Maximum TAT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Credit/ Debit Cards</td>
                      <td>5 days</td>
                      <td>10 days</td>
                    </tr>
                    <tr>
                      <td>UPI</td>
                      <td>Instant</td>
                      <td>7 days</td>
                    </tr>
                    <tr>
                      <td>Netbanking</td>
                      <td>2 days</td>
                      <td>10 days</td>
                    </tr>
                    <tr>
                      <td>Wallets</td>
                      <td>Instant</td>
                      <td>7 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                *Exceptions may arise due to dependancy on partner banks for
                Processing refunds
              </p>
              {/* tabular dat image */}

              <h6>Failed transactions and reversals</h6>
              <p>
                The PA Guidelines require RBI instructions on the harmonisation
                of Turn Around Time for the resolution of failed transactions.
                This has been put in place under the RBI Notification on
                Harmonisation of Turnaround Time (TAT) and customer compensation
                for failed transactions using authorised Payment Systems, vide
                DPSS.CO.PD No.629/02.01.014/2019-20, dated September 20, 2019.
                As per these guidelines, a &apos;failed transaction&apos; is
                defined as follows:
              </p>
              <p>
                A &apos;failed transaction&apos; is a transaction which has not
                been fully completed due to any reason not attributable to the
                customer such as failure in communication links,
                non-availability of cash in an ATM, time-out of sessions, etc.
                Failed transactions shall also include the credits which could
                not be affected to the beneficiary account on account of lack of
                full information or lack of proper information and delay in
                initiating a reversal transaction.
              </p>
              <p>
                It must be ensured that internal TAT as defined under this
                section comply with these guidelines. The details of the
                timelines are outlined in Annexure I herein.
              </p>
              <p>
                In these circumstances, a customer tries to make a payment on a
                website, but the payment status is shown as failed. However, the
                customer is notified that the money has been deducted already.
                IOP (IndiaOnlinePay)&apos;s reconciliation team identifies such
                transactions marked as failed or user dropped in our systems and
                yet we have received credit for these transactions. The IOP
                (IndiaOnlinePay) reconciliation team then initiates reversals of
                funds to the customer. All refunds and reversals are made to the
                original method of payment unless agreed explicitly by the end
                customer to credit to an alternate mode. Exceptions may also
                arise in cases where the underlying instrument from which the
                customer paid is unavailable (expired VPA, closed card, etc.).
                Credits towards reversed transactions (where funds are received
                by IOP (IndiaOnlinePay)) and refund transactions shall be routed
                back through IOP (IndiaOnlinePay)&apos;s PA escrow account
                unless as per contract the refund is directly managed by the
                merchant and the customer has been made aware of the same.
              </p>
              <p>
                All reversals are created within T+0/ T+1 days (subject to
                settlement report from bank/ PG partner). Reversal requests are
                again raised with the respective banking partners via APIs or
                other channels based on the support provided by the acquiring
                banks which are then subject to the various handling processes
                at each of the parties
              </p>
              {/* img here */}
              <h6>Internal Timelines are as follows</h6>
              <div className="w-full overflow-x-auto">
                <table className="table-auto legal-table">
                  <thead>
                    <tr>
                      <th> Mode</th>
                      <th>TAT**</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cards</td>
                      <td>5 days</td>
                    </tr>
                    <tr>
                      <td>UPI, Wallets</td>
                      <td>1-5 days</td>
                    </tr>
                    <tr>
                      <td>Netbanking</td>
                      <td>3-5 days (1 day for IMPS)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>**subject to settlement report from bank/PG partner</p>
              <p>
                *Exceptions may arise due to dependancy on partner banks for
                Processing refunds
              </p>
              {/* img here */}
              <h6>Fraud alerts from the LEA</h6>
              <p>
                Upon receiving a fraud alert from the Law Enforcement Agencies,
                the following process is followed:
              </p>
              <ul>
                <li>
                  IOP (IndiaOnlinePay) raises a dispute and further service
                  delivery proof is sought from the merchant.
                </li>
                <li>
                  Once the merchant submits the relevant documentation like
                  invoices and proof of delivery, these are reviewed.
                </li>
                <li>
                  Action is taken accordingly i.e., marked as merchant lost or
                  merchant won.
                </li>
                <li>
                  In case of &apos;merchant lost&apos;, i.e., if the merchant
                  loses the dispute raised, the amount is refunded back to
                  source.
                </li>
                <li>
                  In case of &apos;merchant won&apos;, i.e., if the dispute is
                  resolved in the favour of the merchant, then the amount is
                  settled to the merchant as per the settlement cycle.
                </li>
              </ul>
              <p>
                Any LEA or other investigating agencies seeking to contact IOP
                (IndiaOnlinePay), may reach out to IOP (IndiaOnlinePay)&apos;s
                Nodal Officer appointed as per the PMLA and other applicable
                regulations for this purpose.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default page;
