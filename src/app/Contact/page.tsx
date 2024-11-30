"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for React Toastify
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  message: string;
}

interface Errors {
  firstName?: string;
  lastName?: string;
  email?: string;
  contactNumber?: string;
  message?: string;
}

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = (): boolean => {
    const newErrors: Errors = {};
    const namePattern = /^[A-Za-z ]+$/;

    if (!formData.firstName) {
      newErrors.firstName = "First name is required.";
    } else if (!namePattern.test(formData.firstName)) {
      newErrors.firstName = "First name can only contain letters.";
    }

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.contactNumber) {
      newErrors.contactNumber = "Contact number is required.";
    } else if (!/^[0-9]{10}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Contact number must be exactly 10 digits.";
    }

    if (!formData.message) {
      newErrors.message = "Message is required.";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network request
      toast.success("Your message has been sent successfully!", {
        position: "top-center",
        autoClose: 3000,
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      toast.error("There was an error sending your message. Please try again later.", {
        position: "top-center",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 mt-24">
      <ToastContainer />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Section */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Have a question or need assistance? Fill out the form below or reach out to us
              using the details provided. We’re here to help!
            </p>
          </div>

          <div className="bg-white p-6 shadow-md rounded-lg border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Visit Us</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <HiOutlineLocationMarker size={28} className="text-blue-600" />
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Registered Office</h3>
                  <p className="text-gray-600 leading-relaxed">
                    3rd Floor, Landmark Cyber Park,
                    <br />
                    Sector 67, Gurugram, Haryana, India 122102
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <AiOutlineMail size={28} className="text-blue-600" />
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Email Us</h3>
                  <p className="text-gray-600">
                    General inquiries:{" "}
                    <a href="mailto:help@oneatm.in" className="text-blue-600 underline">
                      help@oneatm.in
                    </a>
                  </p>
                  <p className="text-gray-600">
                    Report suspicious activity:{" "}
                    <a
                      href="mailto:cybercell@oneatm.in"
                      className="text-blue-600 underline"
                    >
                      cybercell@oneatm.in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <form
          className="bg-white p-8 shadow-md rounded-lg border border-gray-100 space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full">
              <label className="block text-gray-600 mb-1">First Name*</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full border ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                } rounded-lg p-3 focus:border-blue-500 focus:outline-none`}
                placeholder="John"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

            <div className="w-full">
              <label className="block text-gray-600 mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full border ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                } rounded-lg p-3 focus:border-blue-500 focus:outline-none`}
                placeholder="Doe"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg p-3 focus:border-blue-500 focus:outline-none`}
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Contact Number*</label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className={`w-full border ${
                errors.contactNumber ? "border-red-500" : "border-gray-300"
              } rounded-lg p-3 focus:border-blue-500 focus:outline-none`}
              placeholder="9876543210"
            />
            {errors.contactNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Your Message*</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } rounded-lg p-3 focus:border-blue-500 focus:outline-none`}
              rows={4}
              placeholder="Write your message here..."
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className={`w-full py-3 text-white rounded-lg ${
              loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
