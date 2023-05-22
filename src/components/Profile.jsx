import { edit, post } from "../assets";

const Profile = ({ name, desc, photo }) => {
  return (
    <div className="m-5 profile p-5 flex flex-wrap justify-between rounded-lg">
      <div className="flex gap-4">
        <img
          className="w-[80px] h-[80px] bg-white rounded-full items-center"
          src={photo}
          alt="profile-image"
        />
        <div className="flex flex-col">
          <h1 className="xl:text-4xl text-3xl font-medium">Giny Rola</h1>
          <p>Web Developer</p>
        </div>
      </div>
      <div className="flex gap-4 mt-5">
        <button className="flex bg-blue-500 rounded-md w-[140px] h-[40px] items-center justify-center opacity-90 hover:opacity-100">
          <img src={post} alt="post-icon" />
          <span className="text-xl ml-3">Post</span>
        </button>
        <button className="flex bg-slate-400 gap-1 rounded-md w-[140px] h-[40px] items-center justify-center opacity-90 hover:opacity-100">
          <img src={edit} alt="post-icon" className="w-7" />
          <span className="text-xl">Edit profile</span>
        </button>
      </div>
    </div>
  );
};

export default Profile;
