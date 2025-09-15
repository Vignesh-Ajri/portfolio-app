import React from "react";

const SocialLink = ({ href, label, icon: Icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-3 rounded-full transition-all duration-300 
        bg-white hover:bg-purple-50 
        text-purple-600 hover:text-purple-700 
        border border-purple-200 hover:border-purple-400 
        shadow-sm hover:shadow-md
        dark:bg-purple-900/50 dark:hover:bg-purple-800 
        dark:text-purple-300 dark:hover:text-white 
        dark:border-purple-700/50 dark:hover:border-purple-500"
    >
      <Icon size={20} />
    </a>
  );
};

export default SocialLink;
