import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import AdminDashboard from "../Pages/Admin/AdminDashboard";
import TeacherDashboard from "../Pages/Teacher/TeacherDashboard";
import StudentDashboard from "../Pages/Student/StudentDashboard";

const Router = createBrowserRouter([
    {
        path:'/',
        element: <Root/>,
        children:[
            {
                path:'/',
                element: <Home/>,
                children:[
                    {
                        path:'/',
                        element:<AdminDashboard/>
                    },
                    {
                        path:'/teacher',
                        element:<TeacherDashboard/>
                    },
                    {
                        path:'student',
                        element:<StudentDashboard/>
                    }
                ]
            },
        ]
    }
])
export default Router;