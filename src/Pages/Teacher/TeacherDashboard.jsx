import AreaChart from "../../Graph/AdminOverview";
import TeacherActivity from "../../Graph/TeachingActivity";
import AdminCard from "../../Shared/AdminCard";
import AdminHeading from "../../Shared/AdminHeading";
import MyCalendar from "./Calendar";
import SemesterProgres from "./SemesterProgres";
import UpCommingLesson from "./UpCommingLesson";

const TeacherDashboard = () => {
    return (
        <div>
            <div>
                <AdminHeading/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        [1,2,3,4].map(item =>(
                            <AdminCard key={item}/>
                        ))
                    }
                </div>
                <div className="flex gap-6">
                    <div className="">
                        <div className="flex justify-between">
                            <UpCommingLesson/>
                            <SemesterProgres/>
                        </div>
                        <AreaChart/>
                        
                    </div>
                    <div>
                        <MyCalendar/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherDashboard;