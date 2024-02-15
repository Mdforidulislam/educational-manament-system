import AreaChart from "../../../Graph/AdminOverview";
import BarChart from "../../../Graph/BarChart";
import PieChart from "../../../Graph/PieChart";
import AdminCard from "../../../Shared/AdminCard";
import AdminHeading from "../../../Shared/adminHeading";
import AdminStarStudent from "../../../Table/AdminStarStudent";

const AdminDashboard = () => {
  return (
    <div className="h-screen">
      <div>
        <AdminHeading />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white ">
              <AdminCard />
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="w-full">
            <div className="lg:flex block gap-10 ">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <BarChart />
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <AreaChart />
              </div>
            </div>

            <div className="lg:flex block gap-10 mt-10">
              <div className="bg-white p-8 rounded-lg shadow-sm ">
              <AdminStarStudent />
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
              <PieChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
