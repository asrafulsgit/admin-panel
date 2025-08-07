import React from 'react'

const AboutMe = () => {
  return (
    <>
    <div className='flex justify-between '>
        <div className="flex items-center">
        <div className="relative w-32 h-32 rounded-full overflow-hidden mr-6">
            <img src="path_to_your_image.jpg" alt="Profile" className="w-full h-full object-cover" />
            <div className="absolute bottom-1 right-1 bg-white rounded-full p-2 cursor-pointer shadow">
            {/* Pencil icon */}
            ✏️
            </div>
        </div>
        <div>
            <h1 className="text-3xl font-bold text-gray-900">Charlene Reed</h1>
            <p className="text-blue-600 mt-1">@Charlene Reed</p>
            <p className="text-gray-600 mt-2">charlenereed@gmail.com</p>
            <p className="text-gray-600">(603) 555-0123</p>
        </div>
    </div>
    {/* address */}
    <div className="text-right">
      <p className="text-gray-700 font-medium">Permanent Address</p>
      <p className="text-blue-600 mt-1">San Jose, California, USA</p>
      <p className="text-gray-700 font-medium mt-4">Present Address</p>
      <p className="text-blue-600 mt-1">San Jose, California, USA</p>
    </div>
    </div>

    {/* About Me Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">About Me</h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          TrendLoop is your all-in-one shopping destination for everything trendy and essential. From fashion to electronics, home goods to personal care — we bring a wide range of quality products under one roof. Whether you’re looking for the latest gadgets or timeless lifestyle items, TrendLoop makes shopping easy, reliable, and enjoyable.
        </p>
      </div>

    </>
  )
}

export default AboutMe
