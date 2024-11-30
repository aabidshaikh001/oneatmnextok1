'use client'
import React, { useRef, useState, MouseEvent  } from 'react';
import { 
  CreditCardIcon,
  UserGroupIcon,
  GlobeAltIcon,
  WalletIcon,
  ShoppingCartIcon,
  DevicePhoneMobileIcon,
  PhoneIcon,
  ComputerDesktopIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import '@fontsource/montserrat';;
import { motion } from 'framer-motion';
import Link from 'next/link';
import "./globals.css";
import Image from 'next/image';

const services = [
  { icon: <CreditCardIcon className="h-8 w-8 text-white" />, label: 'Bank Cards' },
  { icon: <UserGroupIcon className="h-8 w-8 text-white" />, label: 'AEPS USSD' },
  { icon: <GlobeAltIcon className="h-8 w-8 text-white" />, label: 'UPI' },
  { icon: <WalletIcon className="h-8 w-8 text-white" />, label: 'Mobile Wallet' },
  { icon: <CreditCardIcon className="h-8 w-8 text-white" />, label: 'Bank Prepaid Cards' },
  { icon: <ShoppingCartIcon className="h-8 w-8 text-white" />, label: 'POS Machines' },
  { icon: <DevicePhoneMobileIcon className="h-8 w-8 text-white" />, label: 'Micro ATMs' },
  { icon: <PhoneIcon className="h-8 w-8 text-white" />, label: 'Mobile Banking' },
  { icon: <ComputerDesktopIcon className="h-8 w-8 text-white" />, label: 'Internet Banking' },
];
const faqItems = [
  { question: "What is OneATM?", answer: "OneATM is a digital solution providing seamless banking services including UPI, mobile wallets, and more for small and large businesses." },
  { question: "How do I join OneATM?", answer: "You can join by clicking the 'Join Now' button and following the registration process." },
  { question: "What services are available through OneATM?", answer: "OneATM offers services such as AEPS USSD, POS machines, mobile wallets, and micro ATMs, among others." },
  { question: "Is there a mobile app for OneATM?", answer: "Yes, OneATM offers a mobile app for convenient banking and payments on the go." },
];


const HomePage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const [tiltX, setTiltX] = useState<number>(0);
  const [tiltY, setTiltY] = useState<number>(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { clientWidth, clientHeight } = e.currentTarget;

    const x = (clientX / clientWidth) * 20 - 10; // Calculate tilt X value
    const y = (clientY / clientHeight) * 20 - 10; // Calculate tilt Y value

    setTiltX(x);
    setTiltY(y);
  };

  const handleMouseLeave = () => {
    setTiltX(0);
    setTiltY(0);
  };

  const scrollLeft = () => {
    servicesRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    servicesRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center flex-col px-4">
  {/* Header Section */}
  <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12 mt-32 sm:mt-24"> {/* Increased margin-top */}
    <div className="text-center md:text-left space-y-6 md:w-1/2">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-600 leading-tight tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        GROW YOUR BUSINESS
        <br /> WITH <span className="text-gray-800">ONE ATM</span>
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-800 font-medium leading-relaxed tracking-wide">
        Empowering you with seamless payment solutions.
      </p>
      <div className="mt-8 flex justify-center md:justify-start space-x-4">
        <a href='https://login.oneatm.in/register' className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md flex items-center space-x-2 transition duration-300">
          <UserGroupIcon className="h-5 w-5" aria-hidden="true" />
          <span>Join Now</span>
        </a>
        <a href='https://login.oneatm.in/login' className="border border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 font-semibold py-2 px-6 rounded-lg shadow-md flex items-center space-x-2 transition duration-300">
          <UserGroupIcon className="h-5 w-5" aria-hidden="true" />
          <span>Login</span>
        </a>
      </div>
    </div>
    {/* Map Section */}
    <div className="md:w-1/2 flex justify-center p-5 group transition-transform duration-300" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <Image
          src='/Map.webp'
          alt="An illustration showing a phone interacting with payment systems"
          className="max-w-full h-auto object-contain transition-transform duration-300"
          style={{
            transform: `perspective(500px) rotateY(${tiltX}deg) rotateX(${tiltY}deg)`,
            transition: 'transform 0.3s ease-out', // Smooth transition for the tilt effect
          }} width={900} height={900}
        />
      </div>
  </div>


  
  
       {/* Our Services Section */}
       <div className="w-full max-w-7xl mx-auto py-20 ">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Our Services
        </h2>
        
        <div className="flex items-center justify-center space-x-5">
          {/* Left Arrow */}
          <button onClick={scrollLeft} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <ArrowLeftIcon className="h-5 w-5 text-blue-600" />
          </button>

          {/* Services Scroll Container */}
          <div ref={servicesRef} className="service-scroll-container flex overflow-x-auto space-x-6 pb-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card flex flex-col items-center text-center p-6 cursor-pointer rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl bg-white border border-gray-300"
              >
                <div className="bg-blue-600 p-3 rounded-full mb-4 shadow-md">
                  {service.icon}
                </div>
                <span className="font-semibold text-lg text-gray-800">{service.label}</span>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button onClick={scrollRight} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <ArrowRightIcon className="h-5 w-5 text-blue-600" />
          </button>
        </div>
      </div>

      {/* India's Most-loved Payments App Section */}
      <div className="w-full max-w-6xl mx-auto py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-6xl font-bold text-gray-800">
            India's Most-loved Payments App
          </h2>
          <p className="text-xl text-gray-600 pb-5">
            Recharge & pay bills, Bank Cards & Micro ATM, Mobile Wallet & UPI, and do a lot more.
          </p>
          <Link href="/Started" className="bg-black hover:bg-gray-800 text-white py-2 px-6 rounded-lg">
            Get Started
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src='/GIF2.gif'
            alt="Paytm App preview"
            className="w-auto h-auto p-4 lg:-mt-10" width={900} height={900}
           
          />
        </div>
      </div>

      
      {/* New Section (Simple, Fast & Secure) */}
      <div className="w-full max-w-6xl mx-auto py-20 flex flex-col gap-3 md:flex-row items-center justify-between space-y-10 md:space-y-0">
        
        {/* Left Column (Text) */}
        <div className="md:w-1/2 space-y-8">
          <h2 className="text-4xl font-bold text-blue-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Simple, Fast & Secure
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">One app for all things money.</h3>
              <p className="text-lg text-gray-600">
                Pay bills, recharge, send money, bank cards, AEPS USSD,Bank Prepaid Cards and do a lot more.
              </p>
            </div>
            <hr className="border-t border-gray-300" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Pay whenever you like, wherever you like.</h3>
              <p className="text-lg text-gray-600">
                Choose from options like UPI, the OneATM Card, or your Debit and Credit Card.
              </p>
            </div>
            <hr className="border-t border-gray-300" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Find all your favourite apps on OneATM.</h3>
              <p className="text-lg text-gray-600">
                Bank Prepaid Cards Cards, POS Machines, or Internet Banking. Use all your favourite apps without downloading them.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column (Image) */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src='/logo6.png'
            alt="OneATM app preview"
            className="w-full h-1/6 p-12  object-contain max-w-md" // Adjust max-width as needed 
            width={900} height={900}
          />
        </div>

      </div>


      {/* Pay Anyone Directly from Your Bank Account Section */}
      <div className="w-full max-w-6xl mx-auto py-20 flex flex-col md:flex-row items-center justify-between bg-gray-100 rounded-lg p-6">
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">
            Pay anyone directly from using mobile banking.
          </h2>
          <p className="text-lg text-gray-600">
            Pay anyone, everywhere. Make contactless & secure payments in-stores or online using UPI or directly from your Bank Account. Plus, send & receive money from anyone.
          </p>
          <button className="mt-4 bg-black hover:bg-gray-800 text-white py-2 px-6 rounded-lg">
           <a download={"https://in.tapir.co.in/uploads/logo/oneatm_v1.apk"} href='https://in.tapir.co.in/uploads/logo/oneatm_v1.apk'>Download the App</a> 
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src='/logo3.png'
            alt="UPI Money Transfer Illustration"
            className=""  width={900} height={900}
          />
        </div>
      </div>

      {/* New In-shop Payments Section */}
      <div className="w-full max-w-6xl mx-auto py-20 flex flex-col md:flex-row items-center justify-between">
        {/* Logo on the Left Side */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <Image
            src='/logo5.png'
            alt="Paytm In-shop Payments"
            className="max-w-lg h-auto"  width={900} height={900}
          />
        </div>

        {/* Text Content on the Right Side */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">
            In-shop payments powered by OneATM.
          </h2>
          <p className="text-lg text-gray-600 pb-5">
            Millions of small & big businesses use Paytm to accept payments anywhere anytime with a wide range of solutions for all kinds of merchants.
          </p>
          <Link href='/' className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg">
            Learn More
          </Link>
        </div>
      </div>
{/* Banking Cards Section */}
<div className="w-full max-w-6xl mx-auto py-20 flex flex-col md:flex-row items-center justify-between">
  {/* Text Content on the Left Side */}
  <div className="md:w-1/2 text-center md:text-left space-y-4 p-6">
    <h2 className="text-3xl font-bold text-gray-800">
      Experience Seamless Banking with Our Cards.
    </h2>
    <p className="text-lg text-gray-700">
      Our banking cards offer you secure and convenient access to your funds. Enjoy features designed to enhance your banking experience with cashback, rewards, and more.
    </p>
    
  </div>

  {/* Image on the Right Side with Movable Hover Effect */}
  <div className="md:w-1/2 flex justify-center">
    <div className="relative overflow-hidden transition-transform duration-300 hover:translate-x-4 hover:translate-y-2">
      <Image
        src='/logo4.png' // Replace with the actual image path
        alt="Banking Card"
        className="max-w-2xl h-auto transition-transform duration-300 transform hover:scale-105" // Retain scaling on hover
        width={900} height={900}/>
    </div>
  </div>
</div>

 {/* FAQ Section */}
 <div className="w-full max-w-6xl mx-auto py-20">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full text-left text-lg font-medium text-gray-800 flex justify-between items-center"
              >
                {item.question}
                <span>{openFAQ === index ? '-' : '+'}</span>
              </button>
              {openFAQ === index && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 mt-2">{item.answer}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>



    </div>
  );
};

export default HomePage;
