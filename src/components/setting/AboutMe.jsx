import React from "react";

const AboutMe = () => {
  return (
    <>
      <div className="flex justify-between ">
        <div className="flex gap-8 items-center">
          {/* Profile Picture */}
          <div className="relative w-32 h-32">
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <img
                src="path_to_your_image.jpg"
                alt="Profile"
                className="w-full h-full bg-green-400 object-cover"
              />
            </div>
            <div className="absolute z-10 bottom-1 right-1
             bg-[#FF8C00] rounded-full p-2 cursor-pointer shadow">
              <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    viewBox="0 0 512 512"
    fill="#fff"
  >
    <g>
      <path d="M504.262,66.75L445.226,7.706c-10.291-10.284-26.938-10.267-37.222,0l-38.278,38.278l96.282,96.266 
        l38.254-38.295C514.537,93.672,514.554,77.017,504.262,66.75z" />
      <path d="M32.815,382.921L0.025,512l129.055-32.83l319.398-319.431l-96.249-96.265L32.815,382.921z 
        M93.179,404.792l-21.871-21.871l278.289-278.289l21.887,21.887L93.179,404.792z" />
    </g>
  </svg>
            </div>
          </div>
          <div className="space-y-1">
            <h1 className="text-[26px] font-medium text-[#337AB3]">Charlene Reed</h1>
            <p className="text-[#337AB3] text-sm font-normal ">@Charlene Reed</p>
            <p className="text-[#337AB3]  font-normal">charlenereed@gmail.com</p>
            <p className="text-[#337AB3] font-normal">(603) 555-0123</p>
          </div>
        </div>
        {/* address */}
        <div className="text-right space-y-1">
          <p className="text-[#232323] font-normal">Permanent Address</p>
          <p className="text-[#337AB3] text-sm font-normal">San Jose, California, USA</p>
          <p className="text-[#232323] font-normal mt-3">Present Address</p>
          <p className="text-[#337AB3] text-sm font-normal">San Jose, California, USA</p>
        </div>
      </div>

      {/* About Me Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-medium text-[#000000]">About Me</h2>
        <p className="mt-4 font-normal leading-relaxed">
          TrendLoop is your all-in-one shopping destination for everything
          trendy and essential. From fashion to electronics, home goods to
          personal care — we bring a wide range of quality products under one
          roof. Whether you’re looking for the latest gadgets or timeless
          lifestyle items, TrendLoop makes shopping easy, reliable, and
          enjoyable.
        </p>
      </div>
    </>
  );
};

export default AboutMe;
