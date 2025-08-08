import React, { useState } from 'react'

const ProfileEditHeader = () => {
  const [isEdit,setIsEdit]=useState(true);
  return (
    <div className="flex gap-4 border-b border-[#F4F5F7]">
      <button onClick={()=>setIsEdit(false)} className="text-[#0059A0] font-medium  cursor-pointer flex flex-col">
        <p className='px-2'> About me</p>
        <span className={`h-1 w-full ${!isEdit && 'bg-[#0059A0]'} rounded-tl-[10px] rounded-tr-[10px]`}></span>
      </button>
      <button onClick={()=>setIsEdit(true)} className="text-[#0059A0] font-medium  cursor-pointer flex flex-col">
        <p className='px-2'>Edit Profile</p>
        <span className={`h-1 w-full ${isEdit && 'bg-[#0059A0]'} rounded-tl-[10px] rounded-tr-[10px]`}></span>
      </button>
    </div>
  )
}

export default ProfileEditHeader
