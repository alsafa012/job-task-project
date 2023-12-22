import img1 from "../../assets/users/banker.jpeg";
import img2 from "../../assets/users/banker.jpg";
import img3 from "../../assets/users/developer (1).jpeg";
import img4 from "../../assets/users/developer (2).jpeg";
import img5 from "../../assets/users/profetional.jpeg";
import img6 from "../../assets/users/profetional.webp";
const AllPersonSection = () => {
     return (
          <div>
               <h1 className="text-white text-center text-2xl md:text-5xl font-bold my-10">
                    people are using this website
               </h1>
               <div className="my-5 grid md:grid-cols-3 gap-5">
                    <div className="card w-96 bg-base-100 shadow-xl">
                         <figure>
                              <img src={img1} alt="Shoes" />
                         </figure>
                         <div className="card-body">
                              <h2 className="card-title">Shoes!</h2>
                              <p>
                                   Banker
                              </p>
                         </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                         <figure>
                              <img src={img2} alt="Shoes" />
                         </figure>
                         <div className="card-body">
                              <h2 className="card-title">Shoes!</h2>
                              <p>
                                   Banker
                              </p>
                         </div>
                    </div>
                    {/* 3 */}
                    <div className="card w-96 bg-base-100 shadow-xl">
                         <figure>
                              <img src={img3} alt="Shoes" />
                         </figure>
                         <div className="card-body">
                              <h2 className="card-title">Shoes!</h2>
                              <p>
                                   Developer
                              </p>
                         </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                         <figure>
                              <img src={img4} alt="Shoes" />
                         </figure>
                         <div className="card-body">
                              <h2 className="card-title">Shoes!</h2>
                              <p>
                                   Developer
                              </p>
                         </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                         <figure>
                              <img src={img5} alt="Shoes" />
                         </figure>
                         <div className="card-body">
                              <h2 className="card-title">Shoes!</h2>
                              <p>
                                   Professional
                              </p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default AllPersonSection;
