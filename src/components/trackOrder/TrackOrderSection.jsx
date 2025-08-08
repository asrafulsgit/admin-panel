import React from 'react'

const TrackOrderSection = () => {
  return (
    <div className="min-h-screen">
        <h2 className="text-lg font-semibold mb-6 text-[#343C6A]">Order Overview</h2>
      <div className="flex rounded-lg w-full ">

        {/* Left Side: Order List */}
        <div className="w-1/3 flex flex-col">
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search by order name"
              className="w-full py-4 pl-12 bg-[#FFFFFF]   rounded-[40px] 
              focus:outline-none  text-sm placeholder-[#3C3C3C]"
            />
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 absolute left-4 top-1/2 
              transform -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <div className="space-y-4 overflow-y-auto">

            {/* Active Order Card */}
            <div className="bg-[#0168B8] text-white p-4 rounded-[10px]  
           relative space-y-6">
              <div className="flex justify-between items-center mb-2">
                <span className="font-normal">Order ID ORD12345</span>
                <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#fff"
    height="24px"
    width="24px"
    viewBox="0 0 458 458"
  >
    <g>
      <g>
        <path d="M428,41.534H30c-16.569,0-30,13.431-30,30v252c0,16.568,13.432,30,30,30h132.1l43.942,52.243    
          c5.7,6.777,14.103,10.69,22.959,10.69c8.856,0,17.258-3.912,22.959-10.69l43.942-52.243H428c16.568,0,30-13.432,30-30v-252    
          C458,54.965,444.568,41.534,428,41.534z M323.916,281.534H82.854c-8.284,0-15-6.716-15-15s6.716-15,15-15h241.062    
          c8.284,0,15,6.716,15,15S332.2,281.534,323.916,281.534z M67.854,198.755c0-8.284,6.716-15,15-15h185.103c8.284,0,15,6.716,15,15    
          s-6.716,15-15,15H82.854C74.57,213.755,67.854,207.039,67.854,198.755z M375.146,145.974H82.854c-8.284,0-15-6.716-15-15    
          s6.716-15,15-15h292.291c8.284,0,15,6.716,15,15C390.146,139.258,383.43,145.974,375.146,145.974z"/>
      </g>
    </g>
  </svg>
               
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <img src="https://via.placeholder.com/150" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <span className="font-normal text-sm">Wade Warren</span>
              </div>
              <div className='h-7 border-l border-white'>
              </div>
            </div>

            {/* Inactive Order Card = 1 */}
            <div className="bg-[#FFFFFF] text-[#151515] 
            p-4 rounded-[10px]  
            cursor-pointer relative">
              <div className="flex justify-between items-center mb-2">
                <span className="font-normal">Order ID ORD12345</span>
               <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#151515"
    height="24px"
    width="24px"
    viewBox="0 0 458 458"
  >
    <g>
      <g>
        <path d="M428,41.534H30c-16.569,0-30,13.431-30,30v252c0,16.568,13.432,30,30,30h132.1l43.942,52.243    
          c5.7,6.777,14.103,10.69,22.959,10.69c8.856,0,17.258-3.912,22.959-10.69l43.942-52.243H428c16.568,0,30-13.432,30-30v-252    
          C458,54.965,444.568,41.534,428,41.534z M323.916,281.534H82.854c-8.284,0-15-6.716-15-15s6.716-15,15-15h241.062    
          c8.284,0,15,6.716,15,15S332.2,281.534,323.916,281.534z M67.854,198.755c0-8.284,6.716-15,15-15h185.103c8.284,0,15,6.716,15,15    
          s-6.716,15-15,15H82.854C74.57,213.755,67.854,207.039,67.854,198.755z M375.146,145.974H82.854c-8.284,0-15-6.716-15-15    
          s6.716-15,15-15h292.291c8.284,0,15,6.716,15,15C390.146,139.258,383.43,145.974,375.146,145.974z"/>
      </g>
    </g>
  </svg>
              </div>
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                  <img src="https://via.placeholder.com/150" alt="Avatar" 
                  className="w-full h-full object-cover" />
                </div>
                <span className="font-normal text-sm">Wade Warren</span>
              </div>
              <div className='mt-3'>
                <p className="text-xs text-[#151515]">From: 288 Thorndige Cir. Syracuse, Connecticut</p>
              <div className='h-6 border-l border-[#818181]'>
              </div>
              <p className="text-xs text-[#151515]">Destination: 288 Thorndige Cir. Syracuse, 334567</p>
            
              </div>
            </div>
             {/* Inactive Order Card = 2 */}
             <div className="bg-[#FFFFFF] text-[#151515] 
            p-4 rounded-[10px]  
            cursor-pointer relative">
              <div className="flex justify-between items-center mb-2">
                <span className="font-normal">Order ID ORD12345</span>
               <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#151515"
    height="24px"
    width="24px"
    viewBox="0 0 458 458"
  >
    <g>
      <g>
        <path d="M428,41.534H30c-16.569,0-30,13.431-30,30v252c0,16.568,13.432,30,30,30h132.1l43.942,52.243    
          c5.7,6.777,14.103,10.69,22.959,10.69c8.856,0,17.258-3.912,22.959-10.69l43.942-52.243H428c16.568,0,30-13.432,30-30v-252    
          C458,54.965,444.568,41.534,428,41.534z M323.916,281.534H82.854c-8.284,0-15-6.716-15-15s6.716-15,15-15h241.062    
          c8.284,0,15,6.716,15,15S332.2,281.534,323.916,281.534z M67.854,198.755c0-8.284,6.716-15,15-15h185.103c8.284,0,15,6.716,15,15    
          s-6.716,15-15,15H82.854C74.57,213.755,67.854,207.039,67.854,198.755z M375.146,145.974H82.854c-8.284,0-15-6.716-15-15    
          s6.716-15,15-15h292.291c8.284,0,15,6.716,15,15C390.146,139.258,383.43,145.974,375.146,145.974z"/>
      </g>
    </g>
  </svg>
              </div>
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                  <img src="https://via.placeholder.com/150" alt="Avatar" 
                  className="w-full h-full object-cover" />
                </div>
                <span className="font-normal text-sm">Wade Warren</span>
              </div>
              <div className='mt-3'>
                <p className="text-xs text-[#151515]">From: 288 Thorndige Cir. Syracuse, Connecticut</p>
              <div className='h-6 border-l border-[#818181]'>
              </div>
              <p className="text-xs text-[#151515]">Destination: 288 Thorndige Cir. Syracuse, 334567</p>
            
              </div>
            </div>
            
           

          </div>

        </div>

        {/* Right Side: Order Details */}
        <div className="w-2/3 p-6 flex flex-col">
          {/* Progress Bar and Pickup Location */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex-1 mr-4">
              <div className="flex items-center mb-2">
                <div className="w-4 h-4 rounded-full bg-[#1D4ED8] border-2 border-white shadow-md z-10 -mr-2"></div>
                <div className="flex-1 h-1 bg-gray-200 relative">
                  <div className="absolute left-0 top-0 h-full w-[calc(100%-25%)] bg-[#1D4ED8] rounded-full"></div>
                </div>
                <div className="w-4 h-4 rounded-full bg-[#1D4ED8] border-2 border-white shadow-md z-10 -ml-2"></div>
                <div className="flex-1 h-1 bg-gray-200"></div>
                <div className="w-4 h-4 rounded-full bg-gray-300 border-2 border-white shadow-md z-10 -ml-2"></div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-[#1E293B]">Pick up location</p>
              <p className="text-sm text-gray-600">2118 Thorndige Cir. Syracuse,</p>
              <p className="text-sm text-gray-600">3508</p>
            </div>
          </div>
          
          <hr className="my-6 border-gray-200" />

          {/* Tracking Status */}
          <div className="flex-1 overflow-y-auto">
            <div className="space-y-6 mb-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-[#1E293B]">Packed</h3>
                <span className="text-sm text-gray-500">Apr 19 12:30</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Tracking Number</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v4a1 1 0 001 1h4a1 1 0 001-1V7m0 0h1a2 2 0 012 2v9a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2h1M8 7V5c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v2M8 7h8" />
                  </svg>
                </div>
                <p className="font-semibold text-gray-900">LGB-82827638360076378</p>
              </div>
              
              {/* Timeline */}
              <div className="relative">
                <div className="absolute left-3 top-0 h-full border-l-2 border-gray-300"></div>
                
                {/* Packed event */}
                <div className="relative pl-8 mb-6">
                  <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-[#1D4ED8] flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-gray-900">Packed</p>
                    <span className="text-xs text-gray-500">Apr 19 12:30</span>
                  </div>
                  <p className="text-sm text-gray-600">Your parcel is packed and will be handed over to our delivery partner.</p>
                </div>

                {/* On the way event */}
                <div className="relative pl-8 mb-6">
                  <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-[#1D4ED8] flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-gray-900">On the Way to Logistic Facility</p>
                    <span className="text-xs text-gray-500">Apr 19 15:30</span>
                  </div>
                  <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consetetur sadipscing elit, sed diam nonumy eirmod tempor invidunt ut labore.</p>
                </div>

                {/* Arrived event */}
                <div className="relative pl-8 mb-6">
                  <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-[#1D4ED8] flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-gray-900">Arrived at Logistic Facility</p>
                    <span className="text-xs text-gray-500">Apr 19 18:07</span>
                  </div>
                  <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consetetur sadipscing elit, sed diam nonumy eirmod tempor invidunt ut labore.</p>
                </div>

                {/* Shipped event (Future) */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-gray-300"></div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-500">Shipped</p>
                    <span className="text-sm font-semibold text-blue-600">Expected on Apr 30</span>
                  </div>
                  <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consetetur sadipscing elit, sed diam nonumy eirmod tempor invidunt ut labore.</p>
                </div>
              </div>
            </div>
          </div>
          
          <hr className="my-6 border-gray-200" />

          {/* Product List */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 text-[#1E293B]">Product list</h3>
            <div className="space-y-4">
              {/* Product Item */}
              <div className="flex items-center space-x-4 p-2 bg-gray-50 rounded-lg border border-gray-200">
                <img src="https://via.placeholder.com/60x60" alt="MacBook Pro" className="w-16 h-16 object-cover rounded-md" />
                <div className="flex-1">
                  <p className="font-semibold text-sm text-[#1E293B]">MacBook Pro 14"</p>
                  <p className="text-xs text-gray-500">#2599.00</p>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-sm text-gray-600">Qty:</span>
                  <span className="text-sm font-semibold text-[#1E293B]">1</span>
                </div>
              </div>
              {/* Product Item */}
              <div className="flex items-center space-x-4 p-2 bg-gray-50 rounded-lg border border-gray-200">
                <img src="https://via.placeholder.com/60x60" alt="MacBook Pro" className="w-16 h-16 object-cover rounded-md" />
                <div className="flex-1">
                  <p className="font-semibold text-sm text-[#1E293B]">MacBook Pro 14"</p>
                  <p className="text-xs text-gray-500">#2599.00</p>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-sm text-gray-600">Qty:</span>
                  <span className="text-sm font-semibold text-[#1E293B]">1</span>
                </div>
              </div>
              {/* Product Item */}
              <div className="flex items-center space-x-4 p-2 bg-gray-50 rounded-lg border border-gray-200">
                <img src="https://via.placeholder.com/60x60" alt="MacBook Pro" className="w-16 h-16 object-cover rounded-md" />
                <div className="flex-1">
                  <p className="font-semibold text-sm text-[#1E293B]">MacBook Pro 14"</p>
                  <p className="text-xs text-gray-500">#2599.00</p>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-sm text-gray-600">Qty:</span>
                  <span className="text-sm font-semibold text-[#1E293B]">1</span>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200" />

          {/* Delivery Address */}
          <div>
            <h3 className="text-xl font-bold mb-2 text-[#1E293B]">Delivery</h3>
            <p className="text-sm font-semibold text-[#1E293B]">Address</p>
            <p className="text-sm text-gray-600">847 Jewess Bridge Apt.</p>
            <p className="text-sm text-gray-600">174 London, UK</p>
            <p className="text-sm text-gray-600">474-769-3919</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrackOrderSection
