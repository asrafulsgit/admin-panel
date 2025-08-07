import React from 'react'

const ProfileEditHeader = () => {
  return (
    <div className="flex border-b border-gray-200">
      <div className="text-gray-500 font-medium pb-2 cursor-pointer mr-6">
        About me
      </div>
      <div className="text-blue-600 font-medium border-b-2 border-blue-600 pb-2 cursor-pointer">
        Edit Profile
      </div>
    </div>
  )
}

export default ProfileEditHeader
