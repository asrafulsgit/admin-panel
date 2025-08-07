import React from 'react'
import FormField from './FormField'

const ProfileEditForm = () => {
  return (
    <div className="flex">
      {/* Profile Picture and form fields */}
      <div className="w-1/4">
        {/* Profile Picture */}
        <div className="relative w-32 h-32 rounded-full overflow-hidden">
          <img src="path_to_your_image.jpg" alt="Profile" className="w-full h-full object-cover" />
          <div className="absolute bottom-1 right-1 bg-white rounded-full p-2 cursor-pointer shadow">
            {/* Pencil icon */}
            ✏️
          </div>
        </div>
      </div>
      
      {/* Form Fields */}
      <div className="w-3/4 grid grid-cols-2 gap-x-12 gap-y-6">
        <FormField label="Your Name" value="Charlene Reed" />
        <FormField label="User Name" value="Charlene Reed" />
        <FormField label="Email" value="charlenereed@gmail.com" />
        <FormField label="Password" value="********" type="password" />
        <FormField label="Date of Birth" value="25 January 1990" />
        <FormField label="Present Address" value="San Jose, California, USA" />
        <FormField label="Permanent Address" value="San Jose, California, USA" />
        <FormField label="City" value="San Jose" />
        <FormField label="Postal Code" value="45962" />
        <FormField label="Country" value="USA" />
      </div>
      
      {/* Save Button */}
      <div className="col-span-2 mt-8  justify-end">
        <button className="bg-orange-500  text-white 
        font-bold py-3 px-8 rounded-lg">
          Save
        </button>
      </div>
    </div>
  )
}

export default ProfileEditForm
