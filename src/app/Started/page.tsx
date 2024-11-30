'use client'
import React from 'react';

import { 
  UserIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  BanknotesIcon
} from '@heroicons/react/24/outline';
import '@fontsource/montserrat';


const steps = [
  { icon: <UserIcon className="h-8 w-8 text-primary" />, title: 'Create an Account', description: 'Sign up for a OneATM account to access all our services.' },
  { icon: <CreditCardIcon className="h-8 w-8 text-primary" />, title: 'Link Your Bank', description: 'Securely link your bank account to make seamless transactions.' },
  { icon: <DevicePhoneMobileIcon className="h-8 w-8 text-primary" />, title: 'Download the App', description: 'Get our mobile app for easy access on the go.' },
  { icon: <BanknotesIcon className="h-8 w-8 text-primary" />, title: 'Start Transacting', description: 'Enjoy our banking services, payment options, and more.' },
];

const GetStartedPage = () => {
  return (
    <div className="min-h-screen bg-light flex flex-col items-center justify-center px-6 py-16 mt-10">
      {/* Header Section */}
      <div className="w-full max-w-4xl text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Welcome to OneATM
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Set up your OneATM account in just a few easy steps and start enjoying streamlined banking and payment solutions.
        </p>
      </div>

      {/* Steps Section */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="step-card flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition duration-200 ease-in-out"
          >
            <div className="icon-container mb-4">{step.icon}</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h2>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="mt-10 flex flex-col items-center space-y-4">
        <a href='https://login.oneatm.in/register'
          className="btn-primary text-white bg-black font-medium py-3 px-10 rounded-lg shadow transition duration-200"
        >
          Get Started Now
        </a>
        <a href='https://login.oneatm.in/login'
          className="btn-secondary text-primary bg-gray-400 text-black font-medium py-3 px-10 rounded-lg border transition duration-200"
        >
          Already have an account? Log In
        </a>
      </div>
    </div>
  );
};

export default GetStartedPage;
