import React from "react";
import DriverCard from "./DriverCard";
import DriverSearchBar from "./DriverSearchBar";

const driversData = [
  {
    name: "Nguyen, Shane",
    phone: "+00123456789",
    address: "australia, road 19 house 1",
    price: "$48",
    isOnline: true,
    image:
      "[https://via.placeholder.com/80/667EEA/FFFFFF?Text=NS](https://via.placeholder.com/80/667EEA/FFFFFF?Text=NS)", // Placeholder image
  },
  {
    name: "Henry, Arthur",
    phone: "+00123456789",
    address: "australia, road 19 house 1",
    price: "$48",
    isOnline: false,
    image:
      "[https://via.placeholder.com/80/4299E1/FFFFFF?Text=HA](https://via.placeholder.com/80/4299E1/FFFFFF?Text=HA)", // Placeholder image
  },
  {
    name: "Henry, Arthur",
    phone: "+00123456789",
    address: "australia, road 19 house 1",
    price: "$48",
    isOnline: true,
    image:
      "[https://via.placeholder.com/80/38B2AC/FFFFFF?Text=HA](https://via.placeholder.com/80/38B2AC/FFFFFF?Text=HA)", // Placeholder image
  },
  {
    name: "Nguyen, Shane",
    phone: "+00123456789",
    address: "australia, road 19 house 1",
    price: "$48",
    isOnline: false,
    image:
      "[https://via.placeholder.com/80/D69E2E/FFFFFF?Text=NS](https://via.placeholder.com/80/D69E2E/FFFFFF?Text=NS)", // Placeholder image
  },
  {
    name: "Henry, Arthur",
    phone: "+00123456789",
    address: "australia, road 19 house 1",
    price: "$48",
    isOnline: false,
    image:
      "[https://via.placeholder.com/80/6A53A3/FFFFFF?Text=HA](https://via.placeholder.com/80/6A53A3/FFFFFF?Text=HA)", // Placeholder image
  },
  {
    name: "Henry, Arthur",
    phone: "+00123456789",
    address: "australia, road 19 house 1",
    price: "$48",
    isOnline: true,
    image:
      "[https://via.placeholder.com/80/E53E3E/FFFFFF?Text=HA](https://via.placeholder.com/80/E53E3E/FFFFFF?Text=HA)", // Placeholder image
  },
  {
    name: "Nguyen, Shane",
    phone: "+00123456789",
    address: "australia, road 19 house 1",
    price: "$48",
    isOnline: true,
    image:
      "[https://via.placeholder.com/80/48BB78/FFFFFF?Text=NS](https://via.placeholder.com/80/48BB78/FFFFFF?Text=NS)", // Placeholder image
  },
  {
    name: "Henry, Arthur",
    phone: "+00123456789",
    address: "australia, road 19 house 1",
    price: "$48",
    isOnline: true,
    image:
      "[https://via.placeholder.com/80/C3DAF9/FFFFFF?Text=HA](https://via.placeholder.com/80/C3DAF9/FFFFFF?Text=HA)", // Placeholder image
  },
  {
    name: "Henry, Arthur",
    phone: "+00123456789",
    address: "australia, road 19 house 1",
    price: "$48",
    isOnline: false,
    image:
      "[https://via.placeholder.com/80/F6AD55/FFFFFF?Text=HA](https://via.placeholder.com/80/F6AD55/FFFFFF?Text=HA)", // Placeholder image
  },
  {
    name: "Nguyen, Shane",
    phone: "+00123456789",
    address: "australia, road 19 house 1",
    price: "$48",
    isOnline: false,
    image:
      "[https://via.placeholder.com/80/CBD5E0/FFFFFF?Text=NS](https://via.placeholder.com/80/CBD5E0/FFFFFF?Text=NS)", // Placeholder image
  },
  {
    name: "Henry, Arthur",
    phone: "+00123456789",
    address: "australia, road 19 house 1",
    price: "$48",
    isOnline: false,
    image:
      "[https://via.placeholder.com/80/A0AEC0/FFFFFF?Text=HA](https://via.placeholder.com/80/A0AEC0/FFFFFF?Text=HA)", // Placeholder image
  },
  {
    name: "Henry, Arthur",
    phone: "+00123456789",
    address: "australia, road 19 house 1",
    price: "$48",
    isOnline: true,
    image:
      "[https://via.placeholder.com/80/718096/FFFFFF?Text=HA](https://via.placeholder.com/80/718096/FFFFFF?Text=HA)", // Placeholder image
  },
];

const DriverListSection = () => {
  return (
    <div className="">
      <DriverSearchBar />
      <div className="grid grid-cols-3  gap-4 mt-8">
        {driversData.map((driver, index) => (
          <DriverCard key={index} {...driver} />
        ))}
      </div>
    </div>
  );
};

export default DriverListSection;
