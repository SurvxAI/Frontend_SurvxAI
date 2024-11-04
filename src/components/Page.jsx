import React from "react";
import { ArrowRight, Star, Users, Shield, Cpu } from "lucide-react";
import heroImage from "../assets/hero_image.png";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#2c2e6c] text-[#e6e6f0]">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 border-b border-[#2c2e6c]">
        <div className="text-2xl font-bold text-[#f5c7cb]">SURV</div>
        <div className="space-x-6">
          <button className="text-[#a0a0c0] hover:text-[#e6e6f0]">
            Mission
          </button>
          <button className="text-[#a0a0c0] hover:text-[#e6e6f0]">
            Services
          </button>
          <button className="text-[#a0a0c0] hover:text-[#e6e6f0]">
            Impact
          </button>
          <button className="bg-blue-700 px-4 py-0.5 rounded-full hover:bg-blue-800">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-20 px-4">
        <div className="mb-6 flex items-center gap-4">
          <Star className="text-yellow-400 w-8 h-8" />
          <span className="text-lg text-[#a0a0c0] font-medium">
            Featured in TechCrunch
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-10">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold mb-6 text-[#f5c7cb] leading-tight">
              Leveraging AI to Streamline Consumer Services with Unprecedented
              Efficiency
            </h1>
            <p className="text-xl text-[#a0a0c0] mb-8">
              An innovative AI-driven platform designed to automate
              time-consuming administrative tasks, enhance efficiency, and
              simplify everyday consumer processes.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <button className="bg-blue-700 px-6 py-2 rounded-full text-base font-semibold hover:bg-blue-800 flex items-center gap-2 shadow-lg shadow-blue-700/30">
                Start Free Trial <ArrowRight size={16} />
              </button>
              <button className="border border-[#2c2e6c] px-6 py-2 rounded-full text-base font-semibold hover:bg-[#2c2e6c] flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-500" /> Learn More
              </button>
            </div>
          </div>

          <div className="w-full max-w-md">
            <img
              src={heroImage}
              alt="AI Services Illustration"
              className="w-full rounded-lg shadow-2xl object-cover"
            />
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-500" />
            <span className="text-[#a0a0c0]">100K+ Users</span>
          </div>
          <div className="h-6 border-r border-[#2c2e6c]"></div>
          <div className="flex items-center gap-2">
            <Cpu className="w-6 h-6 text-blue-500" />
            <span className="text-[#a0a0c0]">99.9% Automation</span>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-10 max-w-6xl mx-auto">
        <div className="p-6 border border-[#2c2e6c] rounded-xl hover:border-blue-700 transition-colors">
          <Cpu className="w-12 h-12 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-[#f5c7cb]">
            Automated Administrative Tasks
          </h3>
          <p className="text-[#a0a0c0]">
            Streamline complex processes like filing credit disputes, processing
            refunds, and managing subscriptions.
          </p>
        </div>
        <div className="p-6 border border-[#2c2e6c] rounded-xl hover:border-blue-700 transition-colors">
          <Users className="w-12 h-12 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-[#f5c7cb]">
            Consumer Empowerment
          </h3>
          <p className="text-[#a0a0c0]">
            Save time and reduce hassle by delegating administrative tasks to
            our intelligent AI system.
          </p>
        </div>
        <div className="p-6 border border-[#2c2e6c] rounded-xl hover:border-blue-700 transition-colors">
          <Shield className="w-12 h-12 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-[#f5c7cb]">
            Comprehensive Service Coverage
          </h3>
          <p className="text-[#a0a0c0]">
            Handle diverse tasks from license renewals to spam filtering and
            content rights management.
          </p>
        </div>
      </div>

      {/* Comprehensive Services Section */}
      <div className="bg-[#2c2e6c] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#f5c7cb]">
            Our Comprehensive Services
          </h2>
          <p className="text-xl text-[#a0a0c0] mb-8">
            SURV automates a wide range of consumer services including:
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-left text-[#e6e6f0]">
            <ul className="list-disc pl-5">
              <li>Filing credit disputes</li>
              <li>Processing refunds</li>
              <li>Managing traffic tickets</li>
            </ul>
            <ul className="list-disc pl-5">
              <li>Renewing driver's licenses</li>
              <li>Cancelling unwanted subscriptions</li>
              <li>Filtering spam emails</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-20 px-4">
        <h2 className="text-4xl font-bold mb-6 text-[#f5c7cb]">
          Transform Your Administrative Experience
        </h2>
        <p className="text-xl text-[#a0a0c0] mb-8 max-w-2xl mx-auto">
          Join the future of efficient, AI-powered consumer services. Save time,
          reduce stress, and streamline your life.
        </p>
        <button className="bg-blue-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-800">
          Start Your Free Trial
        </button>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#2c2e6c] py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0 text-[#f5c7cb]">
            SURV
          </div>
          <div className="flex space-x-6 text-[#a0a0c0]">
            <a href="#" className="hover:text-[#e6e6f0]">
              Privacy
            </a>
            <a href="#" className="hover:text-[#e6e6f0]">
              Terms
            </a>
            <a href="#" className="hover:text-[#e6e6f0]">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

// import React from "react";
// import { ArrowRight, Star, Users, Shield, HeartHandshake } from "lucide-react";

// const LandingPage = () => {
//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Navigation */}
//       <nav className="flex justify-between items-center p-4 border-b border-gray-800">
//         <div className="text-2xl font-bold">Surv</div>
//         <div className="space-x-6">
//           <button className="text-gray-300 hover:text-white">About</button>
//           <button className="text-gray-300 hover:text-white">Features</button>
//           <button className="text-gray-300 hover:text-white">Contact</button>
//           <button className="bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600">
//             Get Started
//           </button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="flex flex-col items-center justify-center text-center py-20 px-4">
//         <h1 className="text-6xl font-bold mb-6">
//           Experience Next-Gen Surveillance
//         </h1>
//         <p className="text-xl text-gray-400 mb-8 max-w-2xl">
//           Advanced AI-powered security monitoring system for businesses and
//           organizations. Real-time alerts, smart detection, and comprehensive
//           analytics.
//         </p>
//         <div className="flex gap-4">
//           <button className="bg-blue-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 flex items-center gap-2">
//             Start Free Trial <ArrowRight size={20} />
//           </button>
//           <button className="border border-gray-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-900">
//             Watch Demo
//           </button>
//         </div>
//       </div>

//       {/* Features Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-16">
//         <div className="p-6 border border-gray-800 rounded-xl hover:border-blue-500 transition-colors">
//           <Star className="w-12 h-12 text-blue-500 mb-4" />
//           <h3 className="text-xl font-semibold mb-2">AI-Powered Detection</h3>
//           <p className="text-gray-400">
//             Advanced algorithms for accurate threat detection and behavior
//             analysis.
//           </p>
//         </div>
//         <div className="p-6 border border-gray-800 rounded-xl hover:border-blue-500 transition-colors">
//           <Users className="w-12 h-12 text-blue-500 mb-4" />
//           <h3 className="text-xl font-semibold mb-2">Multi-Site Management</h3>
//           <p className="text-gray-400">
//             Monitor and manage multiple locations from a single dashboard.
//           </p>
//         </div>
//         <div className="p-6 border border-gray-800 rounded-xl hover:border-blue-500 transition-colors">
//           <Shield className="w-12 h-12 text-blue-500 mb-4" />
//           <h3 className="text-xl font-semibold mb-2">Enhanced Security</h3>
//           <p className="text-gray-400">
//             Enterprise-grade security with end-to-end encryption.
//           </p>
//         </div>
//       </div>

//       {/* Testimonial Section */}
//       <div className="bg-gray-900 py-16 px-4">
//         <div className="max-w-4xl mx-auto text-center">
//           <HeartHandshake className="w-16 h-16 text-blue-500 mx-auto mb-6" />
//           <p className="text-2xl font-medium italic mb-6">
//             "Surv has transformed how we manage our security operations. The
//             AI-powered features have significantly reduced false alarms and
//             improved our response time."
//           </p>
//           <p className="text-gray-400">
//             - John Smith, Security Director at TechCorp
//           </p>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="text-center py-20 px-4">
//         <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
//         <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
//           Join thousands of organizations that trust Surv for their surveillance
//           needs.
//         </p>
//         <button className="bg-blue-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600">
//           Start Your Free Trial
//         </button>
//       </div>

//       {/* Footer */}
//       <footer className="border-t border-gray-800 py-8 px-4">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
//           <div className="text-2xl font-bold mb-4 md:mb-0">Surv</div>
//           <div className="flex space-x-6 text-gray-400">
//             <a href="#" className="hover:text-white">
//               Privacy
//             </a>
//             <a href="#" className="hover:text-white">
//               Terms
//             </a>
//             <a href="#" className="hover:text-white">
//               Contact
//             </a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;
