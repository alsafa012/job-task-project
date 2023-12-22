import { Link } from "react-router-dom";
import { FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
     return (
          <footer className="footer footer-center p-4 bg-base-300 dark-bg text-white">
               <div className="flex justify-center gap-5 text-white">
                    <Link className="hover:underline">contact</Link>
                    <Link className="hover:underline">About</Link>
                    <Link className="hover:underline">contact</Link>
               </div>
               <div className="flex justify-center gap-5">
                    <a
                         className="text-3xl"
                         href="https://github.com/alsafa012"
                         rel="noreferrer"
                         target="_blank"
                    >
                         {/* <img className="w-10 bg-white rounded-full" src={github} alt="" /> */}
                         {/* <a target="_blank" className="text-3xl" href=""> */}
                         <FaGithub />
                         {/* </a> */}
                    </a>
                    <a
                         className="text-3xl"
                         href="https://www.facebook.com/rjridoy012"
                         rel="noreferrer"
                         target="_blank"
                    >
                         {/* <img className="w-10 bg-white rounded-full" src={facebook} alt="" /> */}
                         {/* <a target="_blank" className="text-3xl" href=""> */}
                         <FaFacebook />
                         {/* </a> */}
                    </a>
               </div>
               <p className="text-white font-medium">
                    Copyright © 2023 - All right reserved by Al-Safa Ridoy
               </p>
          </footer>
     );
};

export default Footer;
