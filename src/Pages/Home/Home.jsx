import { Outlet } from "react-router-dom";
import './Style.css'
const Home = () => {
    return (
        <div className="bg-[#F7F7FA] px-6 py-5 overflow-y-scroll custom-scrollbar">
            <Outlet/>
        </div>
    );
};

export default Home;