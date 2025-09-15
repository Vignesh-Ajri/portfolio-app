import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import InfoCard from "./ui/InfoCard";

const ContactMini = () => {
  return (
    <section
      id="contact-mini"
      className="bg-purple-50 dark:bg-black mt-4"
    >
      <div className="container mx-auto px-6 py-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Contact info
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A quick way to reach me. Always happy to connect and explore opportunities.
          </p>
        </div>

        {/* Card layout same as ContactForm */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-8">
            
            {/* Hire Me Button */}
            <Link
              to="/contact"
              className="inline-block px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium shadow-md transition"
            >
              Hire Me
            </Link>

            {/* Thank You Note */}
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Thank you for visiting my portfolio 💜 Your time means a lot!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMini;
