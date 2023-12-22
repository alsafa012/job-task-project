// import React from "react";
import { Link } from "react-router-dom";
// import bannerImg from "../../../assets/Banner/task-management-tips.webp"
// import bannerImg from "../../../assets/Banner"
// import bannerImg from "../../../assets/Banner"

const Banner = () => {
     return (
          <div>
               <div
                    className="hero min-h-screen"
                    // style={{
                    //      backgroundImage:
                    //           "url(https://i.ibb.co/XtfrWym/what-is-task-management.png)",
                    // }}
                    style={{
                         backgroundImage:
                              "url(https://i.ibb.co/jDYvSfZ/task-management-tips.webp)",
                    }}
               >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                         <div className="max-w-md">
                              <h1 className="mb-5 text-2xl md:text-5xl font-bold">
                                   Welcome to Task Management Website
                              </h1>
                              <p className="mb-5 text-lg">
                                  In here anyone can manage their task by add task on our dashboard.
                              </p>
                              <Link to="/dashboard/allTask">
                                   <button className="btn primary-btn hover:bg-[#252734]">
                                        Let’s Explore
                                   </button>
                              </Link>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Banner;
