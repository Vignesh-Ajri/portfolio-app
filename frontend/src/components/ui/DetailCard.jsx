import React from "react";

const DetailCard = ({ Icon, title, description, detail }) => {
  return (
    <div className="p-6 rounded-xl border transition-all duration-300 hover:shadow-lg 
      bg-white border-purple-200 shadow-sm hover:border-purple-300 
      dark:bg-gray-900 dark:border-gray-700 dark:hover:border-gray-600"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-800/40">
          <Icon className="text-purple-600 dark:text-purple-400" size={24} />
        </div>
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-lg">
          {title}
        </h3>
      </div>

      <p className="text-gray-700 dark:text-gray-300 font-medium">
        {description}
      </p>

      {detail && (
        <p className="text-sm text-purple-600 dark:text-purple-400 mt-1">
          {detail}
        </p>
      )}
    </div>
  );
};

export default DetailCard;
