import React from "react";
import { ArrowRight, Star, Users, Shield, HeartHandshake } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 border-b border-gray-800">
        <div className="text-2xl font-bold">Surv</div>
        <div className="space-x-6">
          <button className="text-gray-300 hover:text-white">About</button>
          <button className="text-gray-300 hover:text-white">Features</button>
          <button className="text-gray-300 hover:text-white">Contact</button>
          <button className="bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-6xl font-bold mb-6">
          Experience Next-Gen Surveillance
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl">
          Leveraging AI to Streamline Consumer & Business Services for Optimal Efficiency. Real-time alerts, smart detection, and comprehensive
          analytics.
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 flex items-center gap-2">
            Start Free Trial <ArrowRight size={20} />
          </button>
          <button className="border border-gray-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-900">
            Watch Demo
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-16">
        <div className="p-6 border border-gray-800 rounded-xl hover:border-blue-500 transition-colors">
          <Star className="w-12 h-12 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">AI-Powered Detection</h3>
          <p className="text-gray-400">
            Advanced algorithms for accurate threat detection and behavior
            analysis.
          </p>
        </div>
        <div className="p-6 border border-gray-800 rounded-xl hover:border-blue-500 transition-colors">
          <Users className="w-12 h-12 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Multi-Site Management</h3>
          <p className="text-gray-400">
            Monitor and manage multiple locations from a single dashboard.
          </p>
        </div>
        <div className="p-6 border border-gray-800 rounded-xl hover:border-blue-500 transition-colors">
          <Shield className="w-12 h-12 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Enhanced Security</h3>
          <p className="text-gray-400">
            Enterprise-grade security with end-to-end encryption.
          </p>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-gray-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <HeartHandshake className="w-16 h-16 text-blue-500 mx-auto mb-6" />
          <p className="text-2xl font-medium italic mb-6">
            "Surv has transformed how we manage our security operations. The
            AI-powered features have significantly reduced false alarms and
            improved our response time."
          </p>
          <p className="text-gray-400">
            - John Smith, Security Director at TechCorp
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-20 px-4">
        <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Join thousands of organizations that trust Surv for their surveillance
          needs.
        </p>
        <button className="bg-blue-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600">
          Start Your Free Trial
        </button>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">Surv</div>
          <div className="flex space-x-6 text-gray-400">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
