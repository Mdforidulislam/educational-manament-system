import AdminOverview from "../../Graph/AdminOverview";
import AdminCard from "../../Shared/AdminCard";
import AdminHeading from "../../Shared/adminHeading";

const AdminDashboard = () => {
    return (
        <div className="h-screen">
            <div>
             <AdminHeading/>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {
                [1,2,3,4].map(item => (
                    <div key={item} className="bg-white ">
                        <AdminCard  />
                    </div>
                ))
              } 
            </div>

            <div>
                <div>
                    <AdminOverview/>
                </div>
            </div> 
            </div>
        </div>
    );
};

export default AdminDashboard;