import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-t border-white/10">
      <div className="container mx-auto px-6 py-6 flex flex-col items-center space-y-4">
        <div className="flex space-x-6">
          <a
            href="https://github.com/vignesh-ajri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-sky-400 transition-colors duration-300"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
        <p className="text-sm text-gray-500">
          © 2025 <span className="text-white font-medium">Vignesh</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
