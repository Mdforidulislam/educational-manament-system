import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import LeftNavbar from "../Components/LeftNavbar/LeftNavbar";
import MobileNav from "../Components/LeftNavbar/MobileNav";
import Home from "../Pages/Home/Home";

const Root = () => {
  return (
    <div className="">
      <div className="w-full md:flex hidden">
        <Header />
      </div>

      <div className="flex-1">
        <div className="md:flex block">
          <div className="h-screen overflow-hidden bg-slate-400 md:flex hidden ">
            <LeftNavbar />
          </div>
          <div className="w-full md:hidden flex">
            <MobileNav />
          </div>
          <div className="flex-1">
            <Home />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Root;
