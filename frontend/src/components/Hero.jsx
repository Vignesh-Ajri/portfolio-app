import { useState, useEffect } from "react";
import { Download, Mail, Linkedin, Github, Twitter } from "lucide-react";
import ProfileImage from "../assets/image.png" ;
import SocialLink from "../components/ui/SocialLink";

const HeroSection = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ["Full Stack Development", "Web Design", "UI/UX Design"];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const text = texts[currentIndex];

    if (!isDeleting && currentText === text) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCurrentText((prev) =>
        isDeleting ? prev.slice(0, -1) : text.slice(0, prev.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const handleDownloadCV = () => {
    // Replace with your actual CV path
    window.open("/portfolio-app/MyCv.pdf", "_blank");
  };

  const handleContactClick = () => {
    const element = document.querySelector("#contact-info");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="profile"
      className="min-h-screen mt-16 lg:mt-0 flex items-center justify-center px-6 py-20 transition-colors duration-300 bg-purple-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-48 items-center">
        {/* Profile Picture */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-1">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full blur-lg transition-all duration-300 bg-gradient-to-r from-purple-400 to-pink-400 opacity-50 group-hover:opacity-75 dark:from-purple-600 dark:to-pink-600 dark:opacity-75 dark:group-hover:opacity-100"></div>
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 transition-all duration-300 border-purple-300/50 hover:border-purple-400/70 dark:border-purple-500/30 dark:hover:border-purple-400/50">
              <img
                src="https://placeholdpicsum.dev/photo/category/technology/600/400?random=6"
                alt="Vignesh Profile Picture"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* Profile Text */}
        <div className="text-center lg:text-left order-2 lg:order-2 space-y-6">
          {/* Greeting */}
          <p className="text-lg font-medium text-purple-600 dark:text-purple-300">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            Your Name
          </h1>

          {/* Animated Text */}
          <div className="h-12 flex items-center justify-center lg:justify-start">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-purple-200">
              I am into{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
            <button
              onClick={handleDownloadCV}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 bg-purple-600 hover:bg-purple-700 text-white hover:shadow-lg hover:shadow-purple-500/25"
            >
              <Download size={18} />
              Download CV
            </button>

            <button
              onClick={handleContactClick}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border-2 transition-all duration-300 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-400 dark:hover:text-white"
            >
              <Mail size={18} />
              Contact Info
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-6 pt-6">
            <SocialLink
              href="https://www.linkedin.com/in/your-username"
              label="LinkedIn Profile"
              icon={Linkedin}
            />
            <SocialLink
              href="https://github.com/your-username"
              label="GitHub Profile"
              icon={Github}
            />
            <SocialLink
              href="https://twitter.com/your-username"
              label="Twitter Profile"
              icon={Twitter}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
