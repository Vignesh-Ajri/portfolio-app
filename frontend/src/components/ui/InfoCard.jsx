import React from "react";
import { ExternalLink } from "lucide-react";

const InfoCard = ({ href, label, value, Icon, color = "blue" }) => {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      href={href}
      className={`flex items-center p-4 rounded-xl 
        bg-gradient-to-r from-${color}-500/10 to-${color}-600/10
        dark:border-gray-100
        border border-${color}-500/20 
        ${href ? `hover:border-${color}-400/40 transition-all duration-300 group` : ""}`}
    >
      <div
        className={`p-3 rounded-lg bg-${color}-500/20 
          ${href ? `group-hover:bg-${color}-500/30 transition-colors` : ""}`}
      >
        <Icon className={`w-5 h-5 text-${color}-400 dark:text-white`} />
      </div>

      <div className="ml-4 flex-1">
        <p className="text-gray-600 dark:text-gray-300 text-sm">{label}</p>
        <p className="text-gray-900 dark:text-white font-medium">{value}</p>
      </div>

      {href && (
        <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
    </Wrapper>
  );
};

export default InfoCard;
