import Notificationicon from "../Notification/Notificationicon";
import Profile from "../Profile/Profile";

const Header = () => {
  return (
    <div className="  w-full flex justify-between gap-6 py-3 px-6">
      <div className="flex gap-6">
        <div className="flex h-full items-center gap-5">
          <img
            src="https://preschool.dreamstechnologies.com/template/assets/img/logo.png"
            alt="Logo"
            className="hidden lg:flex"
          />

          <img
            src="https://preschool.dreamstechnologies.com/template/assets/img/logo-small.png"
            alt="Logo"
            className="lg:hidden w-[50px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className=" w-[40px] bg-slate-500 rounded-lg p-2  cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div className="flex gap-3 items-center h-full border rounded-3xl px-5 py-2">
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
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <input
            type="search"
            name=""
            id=""
            placeholder="Search here"
            className="bg-transparent focus:outline-none"
          />
        </div>
      </div>
      <div className="flex gap-4 items-center h-full">
        <Notificationicon/>
        <Profile/>
      </div>
    </div>
  );
};

export default Header;
