import React from 'react';

const RequestedVendorModal = ({ closeModal }) => {
  return (
    <div onClick={closeModal} className="fixed inset-0 bg-black/40 flex justify-center z-50">

      <div onClick={(e)=>e.stopPropagation()}  className="bg-white mt-15 rounded-lg shadow-xl 
      w-full h-[85vh] max-w-3xl mx-4 overflow-hidden">
        
        {/* Scrollable Content with hidden scrollbar */}
        <div className="h-full overflow-y-auto  custom-scroll">
          {/* Header with Close Button */}
          <div className="relative">
            <div className="flex items-center p-10">
          <img
            src="https://via.placeholder.com/80" 
            alt="Michelle Rivera"
            className="w-20 h-20 bg-green-400 rounded-full mr-4 object-cover"
          />
          <div className='space-y-1.5'>
            <h2 className="text-[26px] font-medium">TrendLoop</h2>
            <p className=" text-sm">(603) 555-0123</p>
            <p className=" text-sm">michelle.rivera@example.com</p>
            <p className="text-sm">4517 Washington Ave. Manchester, Kentucky 39495</p>
          </div>
            </div>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-[40px] h-[40px] bg-[#E2E2E2] bg-opacity-80 
              rounded-full text-[#000000] text-[26px] cursor-pointer"
            >
              &times;
            </button>
          </div>

          {/* Content Body */}
          <div className="px-10 pb-10">
                {/* About This Vendor Section */}
                <div className="">
                <h3 className="text-[22px] font-medium  mb-2">About this vendor</h3>
                <p className="font-normal leading-relaxed">
                    TrendLoop is your all-in-one shopping destination for everything trendy and essential. From fashion to
                    electronics, home goods to personal care - we bring a wide range of quality products under one roof.
                    Whether you're looking for the latest gadgets or timeless lifestyle items, TrendLoop makes shopping easy,
                    reliable, and enjoyable.
                </p>
                </div>

         {/* Trade License & Other Documents Section */}
        <div className='mt-6' >
          <h3 className="text-[22px] font-medium mb-4">Trade license & Other Documents</h3>
          <div className="flex flex-wrap gap-4">
            {/* Document 1 */}
            <div className="w-64 h-48 bg-gray-100 border border-gray-300 rounded overflow-hidden flex items-center justify-center">
              <img
                src="https://via.placeholder.com/256x192" // Replace with actual license image 1
                alt="Business License Certificate"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Document 2 */}
            <div className="w-64 h-48 bg-gray-100 border border-gray-300 rounded overflow-hidden flex items-center justify-center">
              <img
                src="https://via.placeholder.com/256x192" // Replace with actual license image 2
                alt="State of Connecticut Business License"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

       

           
 <div className="flex space-x-4 mt-7">
              <button className="py-2 px-8 cursor-pointer bg-[#EA0C0C]
               text-white font-medium rounded-[100px]">
                Canceled
              </button>
              <button className="py-2 px-8 cursor-pointer bg-[#55A946]
               text-[#051522] font-medium rounded-[100px]">
                Approved
              </button>
            </div>

           


       
          </div>

        </div>
      </div>

    </div>
  );
};

export default RequestedVendorModal;
