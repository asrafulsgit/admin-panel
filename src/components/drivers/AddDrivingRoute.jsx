import React from 'react'

const AddDrivingRoute = () => {
  return (
    <>
    {/* Add Driving Route Section */}
      <div className="mb-8 pb-8 border-b border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Add Driving Route</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Type Location"
            className="flex-grow p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            className="flex-grow p-3 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Select Route</option>
            {/* Add more options here */}
          </select>
          <button className="bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors duration-200">
            Add Route
          </button>
        </div>
      </div>
    
    </>
  )
}

export default AddDrivingRoute
