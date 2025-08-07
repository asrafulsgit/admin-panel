import ProfileEditForm from "./ProfileEditForm";
import ProfileEditHeader from "./ProfileEditHeader";



const ProfileEditSection = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-5xl mx-auto my-10">
      <ProfileEditHeader />
      <div className="mt-8">
        <ProfileEditForm />
      </div>
    </div>
  );
};

export default ProfileEditSection;