import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { FaListUl } from "react-icons/fa";
import Container from "../Shared/ContainerDiv/Container";
const Dashboard = () => {
     return (
          <div className="light-bg">
               <Container>
                    <div className="drawer lg:drawer-open min-h-screen">
                         {/* <div className="drawer lg:drawer-open min-h-screen overflow-hidden max-h-screen"> */}
                         <input
                              id="my-drawer-2"
                              type="checkbox"
                              className="drawer-toggle"
                         />
                         <div className="drawer-content relative max-h-screen overflow-y-auto light-bg">
                              {/* Page content here */}
                              <label
                                   htmlFor="my-drawer-2"
                                   className="btn primary-btn drawer-button lg:hidden fixed z-10 top-2 right-2 "
                              >
                                   <FaListUl />
                              </label>
                              <div className="px-2">
                                   <Outlet></Outlet>
                              </div>
                         </div>
                         <div className="drawer-side min-h-screen">
                              <label
                                   htmlFor="my-drawer-2"
                                   aria-label="close sidebar"
                                   className="drawer-overlay"
                              ></label>
                              <ul className="menu p-4 w-80 min-h-full dark-bg text-white">
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
                                   </li>{" "}
                                   {/* Sidebar content here */}
                                   {/* <ul className="menu p-4 space-y-2"> */}
                              </ul>
                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default Dashboard;
