import { useState } from "react";
import ProfileInfo from "./ProfileInfo";

const Profile = () => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(() => !open);
  return (
    <div onClick={handleOpen} className="relative cursor-pointer">
      <div className="flex gap-3 h-full items-center ">
        <div>
          <img
            src="https://preschool.dreamstechnologies.com/template/assets/img/profiles/avatar-01.jpg"
            alt="name"
            className="w-[40px] h-[40px] rounded-full border p-1"
          />
        </div>
        <div>
          <h1>Ryan Taylor</h1>
          <p>Administrator</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 ${open?'duration-700':'hidden'}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-5 ${open? 'hidden':'duration-700'}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </div>
      </div>
      <div className={`absolute -ml-24 md:-ml-60  ${open ? "hidden" : "duration-700"}`}>
        <ProfileInfo />
      </div>
    </div>
  );
};

export default Profile;
