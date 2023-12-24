import { useContext, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import WebsiteTitle from "../../Shared/WebsiteTitle/WebsiteTitle";
import SocialLogin from "../../Components/SocialLogins/SocialLogin";
import { MdNavigateBefore } from "react-icons/md";
// import { PiNavigationArrowDuotone } from "react-icons/pi";
// <PiNavigationArrowDuotone />
const LoginPage = () => {
     // const from = location?.state?.from?.pathname || "/";
     const [showPassword, setShowPassword] = useState(false);
     const { user, userSignIn } = useContext(AuthContext);
     const [errorMessage, setErrorMessage] = useState(false);
     const location = useLocation();
     const navigate = useNavigate();
     const from = location?.state?.from?.pathname || "/";
     // const handleGoogleSignIn = () => {
     //      if (user) {
     //           return Swal.fire({
     //                title: "Error!",
     //                text: "user already logged in",
     //                icon: "error",
     //                // confirmButtonText: "Cool",
     //           });
     //      }
     //      // sign in using google account
     //      googleSignIn()
     //           .then((result) => {
     //                // navigate(location?.state ? location.state : "/");
     //                return Swal.fire(
     //                     "Good job!",
     //                     "You Signed In With Google Successfully",
     //                     "success"
     //                );
     //           })
     //           .catch((error) => {
     //                console.log(error);
     //           });
     //      // Swal.fire({
     //      //      title: 'Are you sure?',
     //      //      text: "You won't be able to revert this!",
     //      //      icon: 'warning',
     //      //      showCancelButton: true,
     //      //      confirmButtonColor: '#3085d6',
     //      //      cancelButtonColor: '#d33',
     //      //      confirmButtonText: 'Yes, delete it!'
     //      //    }).then((result) => {
     //      //      if (result.isConfirmed) {
     //      //        Swal.fire(
     //      //          'Deleted!',
     //      //          'Your file has been deleted.',
     //      //          'success'
     //      //        )
     //      //      }
     //      //    })
     // };
     const handleLogin = (e) => {
          if (user) {
               return Swal.fire({
                    title: "Error!",
                    text: "user already logged in",
                    icon: "error",
                    confirmButtonText: "Cool",
               });
          }
          e.preventDefault();
          const form = e.target;
          const email = form.email.value;
          const password = form.password.value;
          console.log(email, password);
          userSignIn(email, password)
               .then((result) => {
                    // navigate(location?.state ? location.state : "/");
                    console.log(result.user);
                    Swal.fire(
                         "Good job!",
                         "User login successfully",
                         "success"
                    );
                    navigate(from, { replace: true });

                    e.target.email.value = "";
                    e.target.password.value = "";
               })
               .catch((error) => {
                    console.log(error);
                    setErrorMessage(
                         "User login failed..! Invalid email or password"
                    );
               });
     };
     return (
          <div className="dark-bg min-h-screen py-5 md:py-10">
               <WebsiteTitle title={"Login Page"}></WebsiteTitle>
               {/* <PageTitle title="Login"></PageTitle> */}
               <div className="relative light-bg border text-white w-4/5 md:w-1/2 lg:w-1/3 mx-auto p-5 rounded-xl">
                    <p className="text-3xl font-bold mb-6 text-center mt-5">
                         Login Here..
                    </p>
                    <Link to="/">
                         <button className="btn login-btn absolute top-0 left-0">
                              <MdNavigateBefore />
                              home
                         </button>
                    </Link>
                    <form onSubmit={handleLogin} className="text-white">
                         <div className="form-control">
                              <label className="label">
                                   <span className="">Email</span>
                              </label>
                              <input
                                   type="text"
                                   name="email"
                                   placeholder="Email"
                                   className="input input-bordered text-black font-medium"
                                   required
                              />
                         </div>
                         <div className="form-control relative">
                              <label className="label">
                                   <span className="">Password</span>
                              </label>
                              <input
                                   type={showPassword ? "text" : "password"}
                                   name="password"
                                   placeholder="Password"
                                   className="input input-bordered text-black font-medium"
                                   required
                              />
                              <label className="label mt-3">
                                   <a href="#" className="-alt link link-hover">
                                        Forgot password?
                                   </a>
                              </label>
                              <span
                                   className="text-xl absolute top-[40%] right-4 text-black font-medium"
                                   onClick={() =>
                                        setShowPassword(!showPassword)
                                   }
                              >
                                   {showPassword ? (
                                        <FiEye></FiEye>
                                   ) : (
                                        <FiEyeOff></FiEyeOff>
                                   )}
                              </span>
                         </div>
                         <h3>
                              {errorMessage && (
                                   <p className="text-red-600 pt-1">
                                        {errorMessage}
                                   </p>
                              )}
                         </h3>
                         <div className="form-control mt-6">
                              <button className="btn text-white dark-bg hover:bg-[#2a2c39]">
                                   Login
                              </button>
                         </div>

                         {/* <div className="form-control w-[300px] mx-auto text-center mt-6">
                              <button
                                   onClick={handleGoogleSignIn}
                                   type="button"
                                   className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg btn inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                              >
                                   <svg
                                        className="w-4 h-4 mr-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 18 19"
                                   >
                                        <path d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" />
                                   </svg>
                                   Sign in with Google
                              </button>
                         </div> */}
                    </form>
                    <div className="divider divider-info">OR</div>
                    {/* <div className="divider w-4/5 md:w-1/3 mx-auto border">OR</div> */}
                    <SocialLogin></SocialLogin>
                    <p className="text-center py-4">
                         Do not Have An Account ?
                         <Link
                              className="text-[#FF444A] font-bold hover:underline ml-1"
                              to="/registration"
                         >
                              Sign Up
                         </Link>
                    </p>
               </div>
          </div>
     );
};

export default LoginPage;
