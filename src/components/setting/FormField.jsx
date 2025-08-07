import React from 'react';

const FormField = ({ label, value, type = 'text' }) => {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-1">
        {label}
      </label>
      <input
        type={type}
        readOnly
        value={value}
        className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-blue-600 font-medium px-2 py-1"
      />
    </div>
  );
};

export default FormField;


















