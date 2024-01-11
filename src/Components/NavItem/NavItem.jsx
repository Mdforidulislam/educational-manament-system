import { FaChalkboardTeacher } from "react-icons/fa";
import { FcDepartment } from "react-icons/fc";
import { IoBookSharp } from "react-icons/io5";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { MdOutlineAccountBalance } from "react-icons/md";
import { GiKoholintEgg } from "react-icons/gi";
import { CiDollar } from "react-icons/ci";
import { CiCircleList } from "react-icons/ci";
import { BsCalendar4Event } from "react-icons/bs";
import { CiTimer } from "react-icons/ci";
import { IoLibraryOutline } from "react-icons/io5";
import { LiaBlogSolid } from "react-icons/lia";
import { CiSettings } from "react-icons/ci";
import { MdVerifiedUser } from "react-icons/md";
import { MdSportsKabaddi } from "react-icons/md";
import { BsHospital } from "react-icons/bs";
import { MdOutlineEmojiTransportation } from "react-icons/md";
import { Link } from "react-router-dom";


const NavItem = () => {
  return (
    <div className="">
      {/* dashboard nav item  */}
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          <div className="flex gap-2 items-center ">
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
                d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
              />
            </svg>
            <span className="text-[#637692] text-md">Dashboard</span>
          </div>
        </div>
        <div className="collapse-content list-none flex justify-center">
          <div className="space-y-6">
          <Link to='/'><li className="hover:bg-[#3D5EE1] hover:text-white p-2 rounded-lg px-2 hover:duration-500">Admin Dashboard</li></Link>
          <Link to='/teacher'><li className="hover:bg-[#3D5EE1] hover:text-white p-2 rounded-lg px-2 hover:duration-500">Teacher Dashboard</li></Link>
          <Link to='/student'><li className="hover:bg-[#3D5EE1] hover:text-white p-2 rounded-lg px-2 hover:duration-500">Student Dashboard</li></Link>
          </div>
        </div>
      </div>

      {/* Students Items */}
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          <div className="flex gap-1 items-center">
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
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>
            <span className="text-[#637692] text-md">Student</span>
          </div>
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      {/* Teacher List */}
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          <div className="flex gap-1 items-center">
          <FaChalkboardTeacher className="text-[#637692] text-md"/> <span className="text-[#637692] text-md">Teachers</span>
          </div>
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      {/* Departments List */}
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          <div className="flex gap-1 items-center">
          <FcDepartment /> <span className="text-[#637692] text-md">Department</span>
          </div>
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>

      {/* subject List */}
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          <div className="flex gap-1 items-center">
          <IoBookSharp  className="text-[#637692] text-md"/> <span className="text-[#637692] text-md">Subjects</span>
          </div>
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>

      {/* Invoice List */}
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          <div className="flex gap-1 items-center">
          <FaFileInvoiceDollar className="text-[#637692] text-md" /> <span className="text-[#637692] text-md">Invoices</span>
          </div>
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <span>Management</span>

      {/* Account List */}
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          <div className="flex gap-1 items-center">
          <MdOutlineAccountBalance /> <span className="text-[#637692] text-md">Account</span>
          </div>
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>

      {/* Holiday List */}
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          <div className="flex gap-1 items-center">
          <GiKoholintEgg /> <span className="text-[#637692] text-md">Holiday</span>
          </div>
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>

      {/* Fees List */}
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          <div className="flex gap-1 items-center">
          <CiDollar /> <span className="text-[#637692] text-md">Fees</span>
          </div>
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>

      {/* Exam List */}
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          <div className="flex gap-1 items-center">
          <CiCircleList /> <span className="text-[#637692] text-md">Exam List</span>
          </div>
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>

      {/* Events List */}
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          <div className="flex gap-1 items-center">
          <BsCalendar4Event /> <span className="text-[#637692] text-md">Events</span>
          </div>
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>

      {/* Time Table List */}
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          <div className="flex gap-1 items-center">
          <CiTimer /> <span className="text-[#637692] text-md">Time Table</span>
          </div>
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>

      {/* Library Table List */}
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          <div className="flex gap-1 items-center">
          <IoLibraryOutline /> <span className="text-[#637692] text-md">Library</span>
          </div>
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>

      {/* Blogs Table List */}
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          <div className="flex gap-1 items-center">
          <LiaBlogSolid /> <span className="text-[#637692] text-md">Blogs</span>
          </div>
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>

      {/* Setting Table List */}
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          <div className="flex gap-1 items-center">
          <CiSettings /> <span className="text-[#637692] text-md">Settings</span>
          </div>
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <span>Pages</span>

        {/* Authentication List */}
        <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          <div className="flex gap-1 items-center">
          <MdVerifiedUser /> <span className="text-[#637692] text-md">Authentication</span>
          </div>
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>

      <span>Others</span>

        {/* Sports  List */}
        <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          <div className="flex gap-1 items-center">
          <MdSportsKabaddi /> <span className="text-[#637692] text-md">Sports</span>
          </div>
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
        {/* Hostel List */}
        <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          <div className="flex gap-1 items-center">
          <BsHospital /> <span className="text-[#637692] text-md">Hostel</span>
          </div>
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
        {/* Transport List */}
        <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          <div className="flex gap-1 items-center">
          <MdOutlineEmojiTransportation /> <span className="text-[#637692] text-md">Transport</span>
          </div>
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default NavItem;
