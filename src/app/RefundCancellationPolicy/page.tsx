import React from "react";

const RefundCancellationPolicy = () => {
  return (
    <div className="bg-gray-100 py-10 px-5 mt-10">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-950 mb-6">
          Refund and Cancellation Policy
        </h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">
            Service Delivery
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Upon completion of payment, the guest/wallet user will, within a few
            hours, receive a confirmation email with a transaction ID number and
            payment details by email/SMS. Alternatively, users can access the
            details by logging into their personal portal. **Please make a note
            of the transaction ID provided by the OneATM payment gateway before
            proceeding with payments.**
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">
            Refund Policy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            All sales/services are final, and there will be no refund or
            exchange permitted. However, if you complete a transaction on the
            site, money has been charged to your card or bank account, but the
            service is not delivered within 15 days, you may contact us for a
            refund. Please email us at{" "}
            <a
              href="mailto:help@oneatm.in"
              className="text-blue-500 underline"
            >
              help@oneatm.in
            </a>{" "}
            or use the contact us page with the following details:
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-600">
            <li>Transaction date</li>
            <li>Order Number</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-2">
            OneATM will investigate the issue, and if the money was charged
            without delivery, a full refund will be processed within 7 working
            days from the receipt of your email.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">
            Dispute and Resolution Policy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            In case of any disputes, customers or merchants can reach out to the
            Help Desk via email with the relevant details. OneATM will attempt
            to provide an amicable resolution for all parties involved. Please
            note that OneATM’s decision will be final in case of disputes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">
            Cancellation Policy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Each merchant or service provider has its own refund and
            cancellation policy, which OneATM adheres to. Refunds, if
            applicable, will only be processed through the original mode of
            payment.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-blue-900 mb-2">
            Refund Policy and Process
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Reservations eligible for a refund, as specified in the cancellation
            policy for each booking, will be processed within 15 working days
            from the date of the cancellation request. Note that payment gateway
            processing charges will be deducted from the refund amount.
          </p>
        </section>
      </div>
    </div>
  );
};

export default RefundCancellationPolicy;
