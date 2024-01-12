import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div className="bg-[#F7F7FA] px-6 py-5  overflow-y-scroll ">
            <Outlet/>
        </div>
    );
};

export default Home;