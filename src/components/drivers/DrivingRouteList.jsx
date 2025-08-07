import React, { useState } from 'react';

const DrivingRouteList = () => {
  const [routes, setRoutes] = useState([
    ['Naperville', 'Austin', 'Fairfield', 'Pembroke Pines', 'Orange', 'Austin', 'Naperville'],
    ['Orange', 'Fairfield', 'Toledo', 'Fairfield', 'Pembroke', 'Toledo', 'Naperville'],
    ['Pembroke', 'Naperville', 'Pembroke', 'Toledo', 'Pines', 'Austin', 'Toledo'],
    ['Orange', 'Naperville', 'Toledo', 'Fairfield', 'Toledo', 'Pines', 'Naperville'],
  ]);

  const handleRemoveLocation = (routeIndex, locationIndex) => {
    setRoutes((currentRoutes) =>
      currentRoutes.map((route, rIndex) => {
        if (rIndex === routeIndex) {
          return route.filter((_, lIndex) => lIndex !== locationIndex);
        }
        return route;
      })
    );
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto my-10">
      {/* Save Driving Route List Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Save Driving Route List</h2>
        <div className="space-y-6">
          {routes.map((route, routeIndex) => (
            <div key={routeIndex}>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Route {routeIndex + 1} :</h3>
              <div className="flex flex-wrap gap-2">
                {route.map((location, locationIndex) => (
                  <div
                    key={locationIndex}
                    className="flex items-center bg-gray-100 text-gray-700 rounded-full px-4 py-2 text-sm font-medium"
                  >
                    <span>{location}</span>
                    <button
                      onClick={() => handleRemoveLocation(routeIndex, locationIndex)}
                      className="ml-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DrivingRouteList;