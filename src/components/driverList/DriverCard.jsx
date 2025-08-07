import React from 'react';

const DriverCard = ({ name, phone, address, price, isOnline, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col space-y-4">
      <div className="flex items-center space-x-4">
        {/* Profile Image with Status Indicator */}
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div
            className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${
              isOnline ? 'bg-green-500' : 'bg-red-500'
            }`}
          ></div>
        </div>
        {/* Driver Info */}
        <div className="flex-grow">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-600 text-sm">{phone}</p>
          <p className="text-gray-500 text-sm mt-1">{address}</p>
        </div>
        {/* Price Tag */}
        <div className="flex-shrink-0">
          <span className="text-3xl font-bold text-gray-900">{price}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between space-x-4 mt-4">
        <button className="flex-grow px-4 py-2 text-sm font-medium text-white bg-blue-900 rounded-lg hover:bg-blue-800 transition-colors duration-200">
          Assign order
        </button>
        <button className="flex-grow px-4 py-2 text-sm font-medium text-blue-900 border border-blue-900 rounded-lg hover:bg-gray-100 transition-colors duration-200">
          View details
        </button>
      </div>
    </div>
  );
};

export default DriverCard;