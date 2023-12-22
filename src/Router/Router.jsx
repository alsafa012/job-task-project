import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import RegistrationPage from "../Pages/RegistrationPage/RegistrationPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import Dashboard from "../Layout/Dashboard";
import UserProfile from "../Pages/Dashboard/UserDashboard/UserProfile/UserProfile";
import AddTask from "../Pages/Dashboard/AddTask/AddTask";
import AllTask from "../Pages/Dashboard/AllTask/AllTask";
import PrivateRoute from "./PrivateRoute";
import UpdateTask from "../Pages/Dashboard/UpdateTask/UpdateTask";

const MyCreatedRouter = createBrowserRouter([
     {
          path: "/",
          element: <Root></Root>,
          errorElement: <ErrorPage></ErrorPage>,
          children: [
               {
                    path: "/",
                    element: <HomePage></HomePage>,
               },
               {
                    path: "/login",
                    element: <LoginPage></LoginPage>,
               },
               {
                    path: "/registration",
                    element: <RegistrationPage></RegistrationPage>,
               },
          ],
     },
     {
          path: "/dashboard",
          element: (
               <PrivateRoute>
                    <Dashboard></Dashboard>
               </PrivateRoute>
          ),
          children: [
               {
                    path: "/dashboard/allTask",
                    element: (
                         <PrivateRoute>
                              <AllTask></AllTask>
                         </PrivateRoute>
                    ),
                    loader: () => fetch("http://localhost:5000/allTasks"),
               },
               {
                    path: "/dashboard/updateTask/:id",
                    element: (
                         <PrivateRoute>
                              <UpdateTask></UpdateTask>
                         </PrivateRoute>
                    ),
                    loader: ({params}) => fetch(`http://localhost:5000/allTasks/${params.id}`),
               },
               {
                    path: "/dashboard/userProfile",
                    element: (
                         <PrivateRoute>
                              <UserProfile></UserProfile>
                         </PrivateRoute>
                    ),
                    loader: () => fetch("http://localhost:5000/users"),
               },
               {
                    path: "/dashboard/addTask",
                    element: (
                         <PrivateRoute>
                              <AddTask></AddTask>
                         </PrivateRoute>
                    ),
               },
          ],
     },
]);

export default MyCreatedRouter;
