import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import SocialLink from "./ui/SocialLink";
import InfoCard from "./ui/InfoCard";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Replace demo data with your actual data
  const mydata = {
    email: "johndoe@example.com",
    phone: "+1 555-123-4567",
    location: "San Francisco, USA",
    github: "https://github.com/johndoe",
    linkedin: "https://www.linkedin.com/in/johndoe123/",
    x: "https://twitter.com/johndoe",
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setSubmitStatus(null), 3000);
  };

  return (
    <div id="contact" className="bg-purple-50 dark:bg-black mt-4">
      {/* Contact Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let's discuss your next project or just say hello. I'm always
            excited to connect with new people and explore opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 dark:border-white/10 transition-colors">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <InfoCard
                  href={`mailto:${mydata.email}`}
                  label="Email"
                  value={mydata.email}
                  Icon={Mail}
                  color="blue"
                />
                <InfoCard
                  href={`tel:${mydata.phone}`}
                  label="Phone"
                  value={mydata.phone}
                  Icon={Phone}
                  color="green"
                />
                <InfoCard
                  label="Location"
                  value={mydata.location}
                  Icon={MapPin}
                  color="purple"
                  clickable={false}
                />
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-white dark:bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 dark:border-white/10 transition-colors">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                <SocialLink
                  href="https://github.com/your-username"
                  label="GitHub Profile"
                  icon={Github}
                />
                <SocialLink
                  href="https://www.linkedin.com/in/your-username"
                  label="LinkedIn Profile"
                  icon={Linkedin}
                />
                <SocialLink
                  href="https://twitter.com/your-username"
                  label="Twitter Profile"
                  icon={Twitter}
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 dark:border-white/10 transition-colors">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hi!"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-100 dark:bg-green-500/20 border border-green-300 dark:border-green-500/40 rounded-lg">
                  <p className="text-green-700 dark:text-green-300 text-center">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
