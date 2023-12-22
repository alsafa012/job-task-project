import Container from "../../Shared/ContainerDiv/Container";
import img1 from "../../assets/users/banker.jpeg";
import img2 from "../../assets/users/banker.jpg";
import img3 from "../../assets/users/developer (1).jpeg";
import img4 from "../../assets/users/developer (2).jpeg";
import img5 from "../../assets/users/profetional.jpeg";
import img6 from "../../assets/users/profetional.webp";
const AllPersonSection = () => {
     return (
          <div>
               <Container>
                    <h1 className="text-white text-center text-2xl md:text-5xl font-bold my-10">
                         people are using this website
                    </h1>
                    <div className="my-5 grid md:grid-cols-3 gap-5">
                         {/* 1 */}
                         <div className="card bg-base-100 shadow-xl">
                              {/* <figure> */}
                              <img
                                   src={img1}
                                   alt="Shoes"
                                   className="w-full object-fill h-[150px] rounded-t-xl"
                              />
                              {/* </figure> */}
                              <div className="card-body">
                                   <p className="text-xl font-bold text-center">
                                        Banker
                                   </p>
                              </div>
                         </div>
                         {/* 2 */}
                         <div className="card bg-base-100 shadow-xl">
                              {/* <figure> */}
                              <img
                                   src={img2}
                                   alt="Shoes"
                                   className="w-full object-fill h-[150px] rounded-t-xl"
                              />
                              {/* </figure> */}
                              <div className="card-body">
                                   <p className="text-xl font-bold text-center">
                                        Banker
                                   </p>
                              </div>
                         </div>
                         {/* 3 */}
                         <div className="card bg-base-100 shadow-xl">
                              {/* <figure> */}
                              <img
                                   src={img3}
                                   alt="Shoes"
                                   className="w-full object-fill h-[150px] rounded-t-xl"
                              />
                              {/* </figure> */}
                              <div className="card-body">
                                   <p className="text-xl font-bold text-center">
                                        Developer
                                   </p>
                              </div>
                         </div>
                         {/* 4 */}
                         <div className="card bg-base-100 shadow-xl">
                              {/* <figure> */}
                              <img
                                   src={img4}
                                   alt="Shoes"
                                   className="w-full object-fill h-[150px] rounded-t-xl"
                              />
                              {/* </figure> */}
                              <div className="card-body">
                                   <p className="text-xl font-bold text-center">
                                        Developer
                                   </p>
                              </div>
                         </div>
                         {/* 5 */}
                         <div className="card bg-base-100 shadow-xl">
                              {/* <figure> */}
                              <img
                                   src={img5}
                                   alt="Shoes"
                                   className="w-full object-fill h-[150px] rounded-t-xl"
                              />
                              {/* </figure> */}
                              <div className="card-body">
                                   <p className="text-xl font-bold text-center">
                                        Professional
                                   </p>
                              </div>
                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default AllPersonSection;
