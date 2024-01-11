import { useState } from "react";
import Notificationicon from "../Notification/Notificationicon";
import Profile from "../Profile/Profile";

const MobileNav = () => {
    const [open,setOpen] = useState(false)
    const handleOpen = () => setOpen( ()=> !open)
    localStorage.setItem('drawer', JSON.stringify(open));
    console.log(open);

  return (
    <div className=" bg-slate-200 w-full justify-between flex h-full items-center px-6 py-4">
      <div onClick={handleOpen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div>
        <img src="https://preschool.dreamstechnologies.com/template/assets/img/logo-small.png" alt="logo" className="w-[50px] h-[50px]" />
      </div>
      <div className="flex gap-4 h-full items-center">
        <Notificationicon/>
        <Profile/>
      </div>
    </div>
  );
};

export default MobileNav;
