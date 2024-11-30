import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 py-10 px-5 mt-10">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-950 mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-6">
          Welcome to OneATM accessible from{" "}
          <a
            href="https://oneatm.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            https://oneatm.in
          </a>
          . One of our main priorities is the privacy of our visitors. This
          Privacy Policy document outlines the types of information collected
          and recorded by OneATM and how we use it. If you have additional
          questions, contact us at{" "}
          <a
            href="mailto:help@oneatm.in"
            className="text-blue-500 underline"
          >
            help@oneatm.in
          </a>
          .
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">Log Files</h2>
          <p className="text-gray-600 leading-relaxed">
            OneATM follows a standard procedure of using log files. These files
            log visitors when they visit websites. The information collected
            includes IP addresses, browser type, ISP, date and time stamps, and
            referring/exit pages. These are not linked to personally
            identifiable information and are used for analyzing trends,
            administering the site, tracking user movement, and gathering
            demographic information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">Account Information</h2>
          <p className="text-gray-600 leading-relaxed">
            When you create an account on OneATM, we collect personal
            information such as your name, email address, and mobile number. We
            may also store sensitive personal data such as financial
            information, KYC documents, and other details as per RBI
            regulations. This information is used to enhance services,
            communicate updates, and send transaction alerts. You can
            unsubscribe from emails or SMS by following the instructions
            provided in the communication.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">
            Cookies and Web Beacons
          </h2>
          <p className="text-gray-600 leading-relaxed">
            OneATM uses cookies to store information about visitor preferences
            and visited pages. This helps in customizing web content for an
            improved user experience. You can disable cookies in your browser
            settings, though certain features may not function properly without
            them.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">
            Google DoubleClick DART Cookie
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Google, as a third-party vendor, uses DART cookies to serve ads on
            our site. These cookies track user visits to provide personalized
            ads. Users can opt out of DART cookies by visiting{" "}
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Google Ads Privacy Policy
            </a>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">
            Children’s Information
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Protecting children online is a priority. OneATM does not knowingly
            collect personal information from children under 13. If you believe
            your child has provided such information, contact us immediately,
            and we will remove it promptly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">Security</h2>
          <p className="text-gray-600 leading-relaxed">
            The security of your personal information is important to us. We
            use commercially acceptable methods to protect your data, but no
            method of transmission or storage is completely secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">
            Third Party Privacy Policies
          </h2>
          <p className="text-gray-600 leading-relaxed">
            OneATM’s Privacy Policy does not apply to other advertisers or
            websites. We advise you to consult the respective privacy policies
            of third-party ad servers for detailed information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">
            Privacy Policy Changes
          </h2>
          <p className="text-gray-600 leading-relaxed">
            OneATM may update this Privacy Policy from time to time. We
            encourage visitors to frequently check this page for updates. Your
            continued use of the site after any changes constitutes your
            acceptance of the updated Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-blue-900 mb-2">Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions, contact us via email at{" "}
            <a
              href="mailto:help@oneatm.in"
              className="text-blue-500 underline"
            >
              help@oneatm.in
            </a>{" "}
            or write to us at:
          </p>
          <address className="text-gray-600 mt-2">
            3rd Floor, Landmark Cyber Park,
            <br />
            Sector 67, Gurugram, Haryana 122101
          </address>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
