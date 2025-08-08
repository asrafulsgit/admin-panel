import ProfileEditForm from "./ProfileEditForm";
import ProfileEditHeader from "./ProfileEditHeader";



const ProfileEditSection = () => {
  return (
    <div className="bg-[#FFFFFF] rounded-[25px]  p-7">
      <ProfileEditHeader />
      <div className="mt-8">
        <ProfileEditForm />
      </div>
    </div>
  );
};

export default ProfileEditSection;