'use client'
import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-100 py-10 px-5 mt-10">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-950 mb-6">Terms and Conditions</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to OneATM! By accessing the website at{" "}
            <a
              href="https://oneatm.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              https://oneatm.in
            </a>
            , you agree to be bound by these terms of service, all applicable laws, and
            regulations, and acknowledge that you are responsible for compliance with any
            applicable local laws. If you do not agree with any of these terms, you are
            prohibited from using or accessing this site. The materials contained on this
            website are protected by applicable copyright and trademark laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">Use License</h2>
          <p className="text-gray-600 leading-relaxed">
            Permission is granted to temporarily download one copy of the materials
            (information or software) on OneATM’s website for personal, non-commercial,
            transitory viewing only. This license is a grant of limited use permission, not
            a transfer of title. Under this license, you may not:
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-600">
            <li>Modify or copy the materials.</li>
            <li>Use the materials for any commercial purpose or public display.</li>
            <li>Attempt to decompile or reverse engineer any software on OneATM’s website.</li>
            <li>Remove any copyright or proprietary notations from the materials.</li>
            <li>Transfer the materials to another person or "mirror" the materials on any server.</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-2">
            This license will automatically terminate if you violate any of these
            restrictions and may be terminated by OneATM at any time. Upon termination of
            this license or your viewing of these materials, you must destroy any downloaded
            materials in your possession, whether in electronic or printed format.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">Disclaimer</h2>
          <p className="text-gray-600 leading-relaxed">
            The materials on OneATM’s website are provided "as is." OneATM makes no
            warranties, expressed or implied, and disclaims all other warranties, including,
            without limitation, implied warranties or conditions of merchantability, fitness
            for a particular purpose, or non-infringement of intellectual property or other
            violations of rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">Limitations</h2>
          <p className="text-gray-600 leading-relaxed">
            In no event shall OneATM or its suppliers be liable for any damages (including,
            without limitation, damages for loss of data or profit, or due to business
            interruption) arising from the use or inability to use the materials on OneATM’s
            website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">Accuracy of Materials</h2>
          <p className="text-gray-600 leading-relaxed">
            The materials appearing on OneATM’s website may include technical, typographical,
            or photographic errors. OneATM does not warrant that any of the materials on its
            website are accurate, complete, or current. OneATM may make changes to the
            materials on its website at any time without notice but does not commit to
            updating them.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">Links</h2>
          <p className="text-gray-600 leading-relaxed">
            OneATM has not reviewed all sites linked to its website and is not responsible
            for the contents of any linked site. The inclusion of a link does not imply
            endorsement by OneATM. Use of any linked website is at the user’s own risk.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">Modifications</h2>
          <p className="text-gray-600 leading-relaxed">
            OneATM may revise these terms of service for its website at any time without
            notice. By using this website, you agree to be bound by the then-current version
            of these terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">Governing Law</h2>
          <p className="text-gray-600 leading-relaxed">
            These terms and conditions are governed by and construed in accordance with the
            laws of Hyderabad, India, and you irrevocably submit to the exclusive
            jurisdiction of the courts in Hyderabad.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
