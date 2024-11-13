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
} from "lucide-react";

// Navigation Component - adjusted colors

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between bg-[#504d62] text-white py-1.5 px-6">
      <div className="flex items-center">
        <img src={logo} alt="SURVAI Logo" className="h-10 mr-3" />
        <span className="font-bold text-xl">SURVAI</span>
      </div>
      <div className="space-x-4">
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
    </nav>
  );
};

// Service Card Component - adjusted colors
const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-[#F5F3FF] rounded-xl hover:bg-[#ECEAF7] transition-all duration-300 border border-[#DCD8F1]">
    <Icon className="w-12 h-12 text-[#6B48FF] mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-[#2D1C6D]">{title}</h3>
    <p className="text-[#2D1C6D]">{description}</p>
  </div>
);

// Hero Section Component - adjusted colors
const HeroSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-5">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            {/* Content Column */}
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-3xl text-[#2D1C6D]">
                  Leveraging AI to Streamline Consumer Business services for
                  Optimal Efficiency
                </h1>
                <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
                  <div className={`${isExpanded ? "block" : "line-clamp-3"}`}>
                    The world is undergoing significant changes, Smart Contracts
                    are revolutionizing various industries by eliminating
                    intermediaries and reducing costs. <br /> From transforming
                    transaction methods, manufacturing, supply chains, and
                    logistics sectors, Blockchain & AI are being utilized to
                    simplify everyday life
                    <br /> To tackle today’s biggest problems, we need to
                    coordinate around our shared values more effectively than
                    our current systems allow. SURV’s approach innovative
                    concept that leverages AI technology to streamline and
                    automate everyday consumer services.
                    <br /> Its primary goal is to relieve consumers from
                    time-consuming tasks, enhance efficiency, and simplify
                    processes. SURV’s AI-driven system will handle a variety of
                    tasks, such as:
                  </div>
                  <button
                    className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    {isExpanded ? "read less" : "read more"}
                  </button>
                </div>
              </div>

              {/* Feature List */}
              <div className="mt-3">
                <h2 className="text-xl font-semibold mb-4 text-[#2D1C6D]">
                  Our AI-driven system handles:
                </h2>
                <ul className="grid grid-cols-2 gap-4">
                  {[
                    "Filing credit disputes",
                    "Processing refunds",
                    "Managing traffic tickets",
                    "Renewing driver's licenses",
                    "Cancelling subscriptions",
                    "Filtering spam emails",
                    "Content rights management",
                    "Insurance renewals",
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
              <div className="mt-10">
                <button className="rounded-lg bg-[#6B48FF] px-6 py-3 text-lg font-semibold text-white hover:bg-[#7559FF] transition-colors duration-300">
                  Get Started
                </button>
              </div>
            </div>

            {/* Login Form with adjusted colors */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative h-[600px] w-full max-w-lg">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-[#6B48FF] rounded-full mix-blend-multiply filter blur-xl opacity-20" />
                <div className="absolute top-0 right-0 w-72 h-72 bg-[#8B76FF] rounded-full mix-blend-multiply filter blur-xl opacity-20" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#C5BDFF] rounded-full mix-blend-multiply filter blur-xl opacity-20" />

                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#6B48FF]/10 to-[#8B76FF]/10" />
                  <div className="relative rounded-2xl bg-white/5 p-8 backdrop-blur-lg border border-[#DCD8F1]">
                    <div className="h-[300px] w-full rounded-lg bg-gradient-to-r from-[#F5F3FF] to-[#ECEAF7] flex flex-col items-center justify-center space-y-6 p-8">
                      <h2 className="text-2xl font-bold text-[#2D1C6D] mb-2">
                        Login
                      </h2>

                      <div className="relative w-full">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B48FF] w-5 h-5" />
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-full pl-12 pr-4 py-3 bg-white border border-[#DCD8F1] rounded-lg focus:outline-none focus:border-[#6B48FF] text-[#2D1C6D] placeholder-[#6D5DC0]"
                        />
                      </div>

                      <div className="relative w-full">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B48FF] w-5 h-5" />
                        <input
                          type="password"
                          placeholder="Password"
                          className="w-full pl-12 pr-4 py-3 bg-white border border-[#DCD8F1] rounded-lg focus:outline-none focus:border-[#6B48FF] text-[#2D1C6D] placeholder-[#6D5DC0]"
                        />
                      </div>

                      <button className="w-full bg-[#6B48FF] py-3 rounded-lg text-white hover:bg-[#7559FF] transition-colors duration-300 flex items-center justify-center space-x-2">
                        <LogIn className="w-5 h-5" />
                        <span>Log in</span>
                      </button>

                      <a
                        href="#"
                        className="text-sm text-[#2D1C6D] hover:text-[#6B48FF] transition-colors duration-300"
                      >
                        Forgot password?
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

// Services Grid Component - adjusted colors
const ServicesGrid = () => {
  const services = [
    {
      icon: Cpu,
      title: "Automated Administrative Tasks",
      description:
        "Simplify complex processes like refund processing and subscription management.",
    },
    {
      icon: Users,
      title: "Consumer Empowerment",
      description:
        "Save time by delegating administrative tasks to our intelligent AI system.",
    },
    {
      icon: Shield,
      title: "Comprehensive Service Coverage",
      description:
        "Manage various tasks, from license renewals to content rights management.",
    },
  ];

  return (
    <div className="relative -mt-16 pt-32 z-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

// Footer Component - adjusted colors
const Footer = () => (
  <footer className="border-t border-gray-200 py-8 px-4 bg-[#F5F3FF]">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="text-2xl font-bold mb-4 md:mb-0 text-[#2D1C6D]">
        SURVAI
      </div>
      <div className="flex space-x-6 text-[#2D1C6D]">
        {["Privacy", "Terms", "Contact"].map((item) => (
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

// CTA Section - adjusted colors
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-[#2D1C6D] overflow-hidden">
      <Navigation />
      <HeroSection />
      <ServicesGrid />

      <div className="text-center py-20 px-4">
        <h2 className="text-4xl font-bold mb-6 text-[#2D1C6D]">
          Transform Your Transaction Experience
        </h2>
        <p className="text-xl text-[#2D1C6D] mb-8 max-w-2xl mx-auto">
          Join the future of AI-powered payment services. Save time and simplify
          your transactions.
        </p>
        <button className="bg-[#6B48FF] px-8 py-3 rounded-full text-lg font-semibold text-white hover:bg-[#7559FF] transition-colors duration-300">
          Start Free Trial
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
