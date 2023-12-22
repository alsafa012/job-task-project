import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";
import WebsiteTitle from "../../../../Shared/WebsiteTitle/WebsiteTitle";

const UserProfile = () => {
     const { user } = useContext(AuthContext);
     const userData = useLoaderData();
     console.log(userData);
     const filterData = userData.filter((item) => item.email === user?.email);
     return (
          <div className="text-white">
                <WebsiteTitle
                         title={"My Profile"}
                    ></WebsiteTitle>
               {/* <p>user dashboard</p> */}
               <div className=" h-[700px] lg:w-[900px]">
                    <h1 className="text-[40px] text-center font-bold underline ">
                         User profile
                    </h1>

                    <div>
                         {filterData.map((item) => (
                              <div
                                   className="flex flex-col md:flex-col lg:flex-row items-center justify-around lg:mt-[100px]"
                                   key={item._id}
                              >
                                   <img
                                        className="w-[200px] h-[200px] rounded-full object-fill"
                                        src={user?.photoURL}
                                        alt="img"
                                   />

                                   <div className="space-y-2 mt-5">
                                        <h1 className="font-bold text-xl md:text-3xl">
                                             <span className="text-white mr-2">
                                                  User Name:
                                             </span>
                                             {item?.name}
                                        </h1>
                                        <h1 className=" font-bold text-xl md:text-3xl">
                                             <span className="text-white mr-2">
                                                  Email:
                                             </span>
                                             {item?.email}
                                        </h1>
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     );
};

export default UserProfile;
