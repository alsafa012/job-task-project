import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
     return (
          <div>
               <div className="min-h-screen md:flex container mx-auto">
                    <div className="md:w-[20%] dark-bg">
                         <ul className="menu p-4 space-y-2 text-white">
                              <>
                                   <li>
                                        <NavLink to="/dashboard/allTask">
                                             All Task
                                        </NavLink>
                                   </li>
                                   <li>
                                        <NavLink to="/dashboard/addTask">
                                             Add Task
                                        </NavLink>
                                   </li>
                                   <li>
                                        <NavLink to="/dashboard/userProfile">
                                             My Profile
                                        </NavLink>
                                   </li>
                              </>
                              {/* // )} */}
                              <div className="divider divider-info"></div>
                              {/* shared lists */}
                              <li>
                                   <NavLink to="/">
                                        <FaHome></FaHome>Home
                                   </NavLink>
                              </li>
                              {/* <li>
                              <NavLink to="/">
                                   <FaSearch></FaSearch> Menu
                              </NavLink>
                         </li> */}
                         </ul>
                    </div>
                    <div className="md:flex-1 border light-bg p-5">
                         <Outlet></Outlet>
                    </div>
               </div>
          </div>
     );
};

export default Dashboard;
