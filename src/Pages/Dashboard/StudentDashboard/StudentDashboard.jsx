import StudentPieChart from "../../../Graph/StudentPieChart";
import { BsThreeDotsVertical } from "react-icons/bs";

const StudentDashboard = () => {
    return (
        <div className="min-h-screen">
            <div className="mt-12">
                <div className="w-full">
                    <div className="grid grid-cols-5 gap-7">
                        <div className="bg-white p-8 rounded-lg shadow-sm col-span-3 flex flex-col justify-center items-center w-full">
                            <div className="flex justify-between items-center w-full">
                                <div>
                                    <h1 className="font-semibold text-lg">Today&#39;s Lesson</h1>
                                </div>
                                <div className="flex justify-center items-center gap-3">
                                    <span className="font-medium text-sm">View All</span>
                                    <span>
                                        <button className="bg-gray-300 rounded-sm p-1">
                                            <BsThreeDotsVertical size={14} />
                                        </button>
                                    </span>
                                </div>

                            </div>
                            <div className="flex flex-row gap-5">
                                <div>
                                    <StudentPieChart />
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex flex-col gap-2">
                                        <div>
                                            <span>
                                                
                                            </span>
                                            <span>
                                                <p>Class</p>
                                                <h1>Electrical Engg</h1>
                                            </span>
                                        </div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <button className="btn btn-outline btn-primary btn-md ">
                                        Submit
                                    </button>
                                    <button className="btn btn-md  btn-primary">
                                        Continue
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-sm col-span-2">
                            <div><h1>Calender Section</h1></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;