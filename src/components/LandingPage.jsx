import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_surv.jpeg";
import {
  ArrowRight,
  Star,
  Users,
  Shield,
  Cpu,
  Brain,
  Lock,
  Mail,
  LogIn,
  Menu,
} from "lucide-react";

// Navigation Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative bg-[#504d62] text-white py-1.5 px-4 md:px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={logo}
            alt="SURVAI Logo"
            className="h-8 md:h-10 mr-2 md:mr-3"
          />
          <span className="font-bold text-lg md:text-xl">SURVAI</span>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>

        <div className="hidden md:flex space-x-4">
          {["Mission", "Services", "Impact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="hover:text-gray-400 transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
          <Link
            to="/get-started"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#504d62] md:hidden z-50">
          <div className="flex flex-col space-y-2 p-4">
            {["Mission", "Services", "Impact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="hover:text-gray-400 transition-colors duration-300 py-2"
              >
                {item}
              </Link>
            ))}
            <Link
              to="/get-started"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-300 text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

// Service Card Component
const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="p-4 md:p-6 bg-[#F5F3FF] rounded-xl hover:bg-[#ECEAF7] transition-all duration-300 border border-[#DCD8F1]">
    <Icon className="w-8 h-8 md:w-12 md:h-12 text-[#6B48FF] mb-3 md:mb-4" />
    <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#2D1C6D]">
      {title}
    </h3>
    <p className="text-sm md:text-base text-[#2D1C6D]">{description}</p>
  </div>
);

// Hero Section Component
const HeroSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="relative px-4 py-8 sm:px-6 lg:px-8 lg:py-5">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-8">
            {/* Content Column */}
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <h1 className="mb-6 text-2xl md:text-3xl font-bold tracking-tight text-[#2D1C6D]">
                  Revolutionizing Consumer Services Through AI Technology
                </h1>
                <div className="bg-white shadow-md rounded-lg p-4 md:p-6 max-w-2xl mx-auto">
                  <div
                    className={`text-sm md:text-base ${
                      isExpanded ? "block" : "line-clamp-3"
                    }`}
                  >
                    In today's rapidly evolving world, AI technology is
                    transforming how we handle everyday tasks. SURVAI leads this
                    revolution by automating complex consumer services, making
                    your life simpler and more efficient. Our AI-powered
                    platform streamlines administrative processes, saving you
                    valuable time and reducing stress. Experience the future of
                    consumer services with SURVAI's innovative solutions that
                    put you in control.
                  </div>
                  <button
                    className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded text-sm md:text-base"
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    {isExpanded ? "Read less" : "Read more"}
                  </button>
                </div>
              </div>

              {/* Feature List */}
              <div className="mt-3">
                <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#2D1C6D]">
                  Our AI System Manages:
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base">
                  {[
                    "Credit Dispute Filing",
                    "Refund Processing",
                    "Traffic Ticket Management",
                    "License Renewals",
                    "Subscription Cancellations",
                    "Spam Email Filtering",
                    "Content Rights Management",
                    "Insurance Renewals",
                  ].map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center space-x-2 text-[#2D1C6D]"
                    >
                      <svg
                        className="h-5 w-5 text-[#6B48FF]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="mt-8 md:mt-10">
                <button className="w-full sm:w-auto rounded-lg bg-[#6B48FF] px-4 md:px-6 py-2 md:py-3 text-base md:text-lg font-semibold text-white hover:bg-[#7559FF] transition-colors duration-300">
                  Start Your Journey
                </button>
              </div>
            </div>

            {/* Login Form */}
            <div className="flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative w-full max-w-sm md:max-w-lg">
                <div className="absolute top-0 left-0 w-72 h-72 bg-[#6B48FF] rounded-full mix-blend-multiply filter blur-xl opacity-20" />
                <div className="absolute top-0 right-0 w-72 h-72 bg-[#8B76FF] rounded-full mix-blend-multiply filter blur-xl opacity-20" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#C5BDFF] rounded-full mix-blend-multiply filter blur-xl opacity-20" />

                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#6B48FF]/10 to-[#8B76FF]/10" />
                  <div className="relative rounded-2xl bg-white/5 p-4 md:p-8 backdrop-blur-lg border border-[#DCD8F1]">
                    <div className="h-auto md:h-[300px] w-full rounded-lg bg-gradient-to-r from-[#F5F3FF] to-[#ECEAF7] flex flex-col items-center justify-center space-y-4 md:space-y-6 p-4 md:p-8">
                      <h2 className="text-xl md:text-2xl font-bold text-[#2D1C6D] mb-2">
                        Login to Your Account
                      </h2>

                      <div className="relative w-full">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B48FF] w-4 md:w-5 h-4 md:h-5" />
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full pl-10 md:pl-12 pr-4 py-2 md:py-3 bg-white border border-[#DCD8F1] rounded-lg focus:outline-none focus:border-[#6B48FF] text-[#2D1C6D] placeholder-[#6D5DC0] text-sm md:text-base"
                        />
                      </div>

                      <div className="relative w-full">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B48FF] w-4 md:w-5 h-4 md:h-5" />
                        <input
                          type="password"
                          placeholder="Enter your password"
                          className="w-full pl-10 md:pl-12 pr-4 py-2 md:py-3 bg-white border border-[#DCD8F1] rounded-lg focus:outline-none focus:border-[#6B48FF] text-[#2D1C6D] placeholder-[#6D5DC0] text-sm md:text-base"
                        />
                      </div>

                      <button className="w-full bg-[#6B48FF] py-2 md:py-3 rounded-lg text-white hover:bg-[#7559FF] transition-colors duration-300 flex items-center justify-center space-x-2 text-sm md:text-base">
                        <LogIn className="w-4 md:w-5 h-4 md:h-5" />
                        <span>Sign In</span>
                      </button>

                      <a
                        href="#"
                        className="text-xs md:text-sm text-[#2D1C6D] hover:text-[#6B48FF] transition-colors duration-300"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Services Grid Component
const ServicesGrid = () => {
  const services = [
    {
      icon: Cpu,
      title: "Smart Automation",
      description:
        "Experience seamless automation of complex administrative tasks through our advanced AI technology.",
    },
    {
      icon: Users,
      title: "User Empowerment",
      description:
        "Take control of your time by delegating routine tasks to our intelligent system.",
    },
    {
      icon: Shield,
      title: "Complete Protection",
      description:
        "Enjoy comprehensive service coverage from license renewals to content management.",
    },
  ];

  return (
    <div className="relative pt-16 md:pt-32 z-20 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => (
  <footer className="border-t border-gray-200 py-6 md:py-8 px-4 bg-[#F5F3FF]">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <div className="text-xl md:text-2xl font-bold text-[#2D1C6D]">SURVAI</div>
      <div className="flex space-x-4 md:space-x-6 text-sm md:text-base text-[#2D1C6D]">
        {["Privacy Policy", "Terms of Service", "Contact Us"].map((item) => (
          <a
            key={item}
            href="#"
            className="hover:text-[#6B48FF] transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

// Landing Page Component
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-[#2D1C6D] overflow-hidden">
      <Navigation />
      <HeroSection />
      <ServicesGrid />

      <div className="text-center py-12 md:py-20 px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-[#2D1C6D]">
          Transform Your Digital Experience
        </h2>
        <p className="text-base md:text-xl text-[#2D1C6D] mb-6 md:mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied users who have simplified their daily
          tasks with our AI-powered solutions.
        </p>
        <button className="w-full sm:w-auto bg-[#6B48FF] px-6 md:px-8 py-2 md:py-3 rounded-full text-base md:text-lg font-semibold text-white hover:bg-[#7559FF] transition-colors duration-300">
          Start Free Trial
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
