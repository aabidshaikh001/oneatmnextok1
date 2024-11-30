'use client'
import React from 'react';
import {
  FaReact, FaUniversity, FaCreditCard, FaGift, FaMoneyBill,
  FaShieldAlt, FaHeartbeat, FaUserShield, FaMoneyCheckAlt,
  FaWallet, FaLink, FaFileInvoice, FaBarcode, FaIdCard,
  FaBuilding, FaChartLine, FaMapMarkedAlt, FaRobot,
} from 'react-icons/fa';

const ProductPage = () => {
  const sections = [
    {
      title: "Banking",
      icon: <FaUniversity className="text-blue-700 mr-2" />,
      items: [
        { name: "Connected Banking", description: "All current accounts in one place", icon: <FaWallet /> },
        { name: "Expense Card", description: "Manage corporate expenses", icon: <FaCreditCard /> },
        { name: "Gift Card", description: "Thoughtful Gifts for Every Occasion", icon: <FaGift /> },
        { name: "Working Capital", description: "Unsecured corporate loans", icon: <FaMoneyBill /> },
      ],
    },
    {
      title: "Insurance",
      icon: <FaShieldAlt className="text-blue-700 mr-2" />,
      items: [
        { name: "General Insurance", description: "Safeguard all corporate assets", icon: <FaShieldAlt /> },
        { name: "Health Insurance", description: "All-inclusive health coverage", icon: <FaHeartbeat /> },
        { name: "Life Insurance", description: "Protect workforce with life coverage", icon: <FaUserShield /> },
        { name: "Become POSP Agent", description: "Start earning as Insurance advisor", icon: <FaMoneyCheckAlt /> },
      ],
    },
    {
      title: "Payments",
      icon: <FaMoneyCheckAlt className="text-blue-700 mr-2" />,
      items: [
        { name: "Single Payouts", description: "Payment Disbursal Simplified", icon: <FaWallet /> },
        { name: "Bulk Payouts", description: "Large-scale payments in single click", icon: <FaMoneyBill /> },
        { name: "Payout Links", description: "Pay without bank details via Links", icon: <FaLink /> },
        { name: "Utility Bill Payments", description: "Pay bills anywhere, anytime", icon: <FaFileInvoice /> },
        { name: "POS", description: "Contactless point-of-Sale transaction", icon: <FaBarcode /> },
        { name: "Static QR", description: "Scan to Access Funds", icon: <FaBarcode /> },
      ],
    },
    {
      title: "Verification",
      icon: <FaIdCard className="text-blue-700 mr-2" />,
      items: [
        { name: "Individual Verification", description: "Get user Verified in minutes", icon: <FaIdCard /> },
        { name: "Business Verification", description: "Verify business partners", icon: <FaBuilding /> },
        { name: "Financial Verification", description: "Assess financial credibility", icon: <FaChartLine /> },
        { name: "Geo Intelligence", description: "Location-based insights", icon: <FaMapMarkedAlt /> },
      ],
    },
    {
      title: "AI/ML",
      icon: <FaRobot className="text-blue-700 mr-2" />,
      items: [
        { name: "AI/ML", description: "Automate operations with AI-solutions", icon: <FaRobot /> },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col items-center px-4 py-8 font-['Poppins', sans-serif]">
      {/* Header with React logo */}
      <header className="text-center mt-14">
        <FaReact className="text-blue-700 text-6xl mx-auto animate-spin-slow" />
        <h1 className="text-5xl font-extrabold text-blue-700 mt-4 tracking-wide font-['Merriweather', serif]">Our Products</h1>
        <p className="mt-2 text-gray-600 text-lg font-medium tracking-tight font-['Nunito', sans-serif]">
          Discover our tailored services to boost your business efficiency and growth.
        </p>
      </header>

      {/* Product Sections */}
      <section className="w-full max-w-7xl mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {sections.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="border rounded-lg shadow-lg p-6 bg-white hover:shadow-2xl transform transition-all duration-200 hover:scale-105 hover:bg-gradient-to-t from-white to-gray-50"
          >
            <h2 className="text-2xl font-semibold text-blue-700 flex items-center mb-4 tracking-wide font-['Merriweather', serif]">
              {section.icon} {section.title}
            </h2>
            <ul>
              {/* items section with hover effect */}
              {section.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="flex items-center py-4 border-b last:border-none hover:bg-blue-100 hover:shadow-md transition-all duration-200 rounded-lg p-3 cursor-pointer"
                >
                  <span className="text-blue-600 text-xl mr-3 transition-transform duration-300 transform hover:rotate-12">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 tracking-tight font-['Poppins', sans-serif]">{item.name}</h3>
                    <p className="text-gray-600 text-sm font-light font-['Nunito', sans-serif]">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductPage;
