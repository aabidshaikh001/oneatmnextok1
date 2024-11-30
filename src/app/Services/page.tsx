"use client";

import React from "react";
import {
  FaMoneyBillWave,
  FaUniversity,
  FaWallet,
  FaRegCreditCard,
} from "react-icons/fa";
import {
  MdPhoneAndroid,
  MdOutlineWaterDrop,
  MdOutlineElectricBolt,
} from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import {
  BsFillCreditCard2BackFill,
  BsFillPersonBadgeFill,
} from "react-icons/bs";

interface ServiceCardProps {
  icon: React.ReactNode;
  color: string;
  title: string;
}

const ServicesPage: React.FC = () => {
  const sections = [
    {
      title: "Banking Services",
      services: [
        { icon: <FaMoneyBillWave />, color: "text-green-500", title: "APS" },
        { icon: <FaUniversity />, color: "text-blue-500", title: "Aeps Service" },
        { icon: <FaWallet />, color: "text-indigo-500", title: "Cash Deposit" },
        { icon: <FaRegCreditCard />, color: "text-teal-500", title: "Bank Account" },
        { icon: <FaUniversity />, color: "text-yellow-500", title: "Demat Account" },
        { icon: <GiReceiveMoney />, color: "text-orange-500", title: "Loan Apply" },
        { icon: <FaMoneyBillWave />, color: "text-purple-500", title: "Money Transfer" },
        { icon: <FaWallet />, color: "text-pink-500", title: "Micro ATM" },
      ],
    },
    {
      title: "BBPS Services",
      services: [
        { icon: <MdPhoneAndroid />, color: "text-red-500", title: "Mobile Recharge" },
        { icon: <FaWallet />, color: "text-purple-500", title: "DTH Recharge" },
        { icon: <MdOutlineElectricBolt />, color: "text-yellow-600", title: "Electricity Bill" },
        { icon: <MdOutlineWaterDrop />, color: "text-blue-500", title: "Water Bill" },
        { icon: <FaUniversity />, color: "text-teal-500", title: "Gas Bill" },
        { icon: <BsFillCreditCard2BackFill />, color: "text-indigo-500", title: "Credit Card Bill" },
      ],
    },
    {
      title: "Government Services",
      services: [
        { icon: <BsFillPersonBadgeFill />, color: "text-green-500", title: "Aadhar Udyog" },
        { icon: <BsFillPersonBadgeFill />, color: "text-red-500", title: "Pan Card" },
        { icon: <FaRegCreditCard />, color: "text-blue-600", title: "Driving Licence" },
        { icon: <FaUniversity />, color: "text-purple-700", title: "Voter ID Card" },
        { icon: <FaUniversity />, color: "text-indigo-500", title: "Passport Apply" },
        { icon: <FaUniversity />, color: "text-orange-500", title: "Certificate" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-10 mt-16">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-blue-600">OneATM Services</h1>
        <p className="mt-4 text-gray-600">Explore a variety of essential services.</p>
      </header>

      {sections.map((section, idx) => (
        <Section
          key={idx}
          title={section.title}
          services={section.services}
        />
      ))}
    </div>
  );
};

const Section: React.FC<{ title: string; services: ServiceCardProps[] }> = ({
  title,
  services,
}) => (
  <section className="w-full max-w-6xl mt-12">
    <h2 className="text-2xl font-semibold text-blue-700 mb-6">{title}</h2>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, idx) => (
        <ServiceCard
          key={idx}
          icon={service.icon}
          color={service.color}
          title={service.title}
        />
      ))}
    </div>
  </section>
);

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, color, title }) => (
  <div
    className={`p-5 bg-white rounded-lg shadow-lg flex items-center space-x-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer`}
  >
    <div className={`${color} text-3xl`}>{icon}</div>
    <h3 className="text-lg font-bold text-gray-800">{title}</h3>
  </div>
);

export default ServicesPage;
