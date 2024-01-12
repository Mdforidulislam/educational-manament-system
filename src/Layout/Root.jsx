import { useState } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import DrawerMobile from "../Components/LeftNavbar/DrawerMobile";
import LeftNavbar from "../Components/LeftNavbar/LeftNavbar";
import MobileNav from "../Components/LeftNavbar/MobileNav";
import Home from "../Pages/Home/Home";
import './Style.css'
const Root = () => {
// Retrieve data from localStorage
const storedDrawer = localStorage.getItem('drawer');
const parsedDrawer = storedDrawer ? JSON.parse(storedDrawer) : false; // or any default value you want

// Use useState with the parsed value or a default value
const [openD, setOpenD] = useState(parsedDrawer);

// Now you can use openD in your component
console.log(openD);

  return (
    <div className="overflow-hidden overflow-x-hidden">
      <div className="w-full md:flex hidden">
        <Header />
      </div>
      <div className="flex-1">
        <div className="md:flex block">
          <div className="h-[109vh] md:flex hidden ">
            <LeftNavbar />
          </div>
          <div className="w-full md:hidden flex">
            <MobileNav />
          </div>
          <div className="flex-1">
           <div className="flex gap-3">
           <div className={`md:hidden absolute  bg-slate-300 bg-opacity-35 ${openD?'hidden':''}`}>
                <DrawerMobile/>
            </div>
           <div className="flex-1 ">
           <Home />
            <Footer />
           </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Root;
