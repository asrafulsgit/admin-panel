import React from 'react';

const DriverSearchBar = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center p-4 bg-gray-200 rounded-full shadow-lg max-w-3xl mx-auto my-8">
      <div className="flex flex-grow w-full sm:w-auto space-x-2 bg-white rounded-full p-2">
        {/* Pickup Location Input */}
        <div className="flex items-center w-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            placeholder="Pick up location"
            className="w-full px-3 py-2 text-sm text-gray-700 placeholder-gray-400 bg-white rounded-full focus:outline-none"
          />
        </div>

        {/* Destination Input */}
        <div className="flex items-center w-1/2 border-l border-gray-300 pl-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a6 6 0 00-6 6c0 1.25.4 2.45 1.15 3.35L10 18l4.85-6.65A6 6 0 0010 2zM10 10a2 2 0 110-4 2 2 0 010 4z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            placeholder="Destination"
            className="w-full px-3 py-2 text-sm text-gray-700 placeholder-gray-400 bg-white rounded-full focus:outline-none"
          />
        </div>
      </div>

      {/* Search Button */}
      <button className="flex-shrink-0 w-full sm:w-auto px-6 py-2 ml-0 sm:ml-4 mt-4 sm:mt-0 text-white font-medium bg-blue-900 rounded-full hover:bg-blue-800 transition-colors duration-200">
        Search
      </button>
    </div>
  );
};

export default DriverSearchBar;