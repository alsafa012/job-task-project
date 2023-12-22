import { useForm } from "react-hook-form";
import WebsiteTitle from "../../../Shared/WebsiteTitle/WebsiteTitle";
import Container from "../../../Shared/ContainerDiv/Container";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";

const AddTask = () => {
     const { user } = useContext(AuthContext);
     const { register, handleSubmit, reset } = useForm();
     // const navigate = useNavigate();
     const onSubmit = async (data) => {
          console.log(data);
          const createATask = {
               taskTitle: data.name,
               priority: data.tag,
               email: user?.email,
               deadLine: data.date,
               description: data.description,
               status: "todo",
          };
          console.log(createATask);
          const contextRes = await axios.post(
               "https://job-task-server-pi.vercel.app/allTasks",
               createATask
          );
          console.log(contextRes.data);
          console.log("object");
          if (contextRes.data.insertedId) {
               Swal.fire({
                    title: "Good job!",
                    text: `${data.name} Task added Successfully`,
                    icon: "success",
               });
               // navigate("/dashboard/allTasks")
          }
          reset();
     };

     return (
          <div>
               <Container>
                    <WebsiteTitle
                         title={"Add Task List"}
                    ></WebsiteTitle>
                    <h1 className="text-center text-3xl md:text-4xl p-5 font-bold text-white">Add Task Here</h1>
                    <div className="p-2">
                         <form onSubmit={handleSubmit(onSubmit)}>
                              <div className="space-y-3 font-medium">
                                   <div className="grid md:grid-cols-2 md:gap-5 text-white">
                                        {/* Task name */}
                                        <div className="form-control w-full">
                                             <label className="label">
                                                  <span className="">
                                                       Task Title*
                                                  </span>
                                             </label>
                                             <input
                                                  {...register("name", {
                                                       required: true,
                                                  })}
                                                  type="text"
                                                  placeholder="Task Title"
                                                  className="input input-bordered w-full text-black"
                                             />
                                        </div>
                                        {/*Priority tags */}
                                        <div className="form-control w-full">
                                             <label className="label">
                                                  <span className="">
                                                  Priority Type/Tags*
                                                  </span>
                                             </label>

                                             <select
                                                  {...register("tag", {
                                                       required: true,
                                                  })}
                                                  className="select select-bordered w-full text-black"
                                             >
                                                  <option value="low">
                                                       Low
                                                  </option>
                                                  <option value="medium">
                                                       Medium
                                                  </option>
                                                  <option value="high">
                                                       High
                                                  </option>
                                             </select>
                                        </div>
                                        {/* Task deadLine */}
                                        <div className="form-control w-full">
                                             <label className="label">
                                                  <span className="">
                                                  Task deadLine*
                                                  </span>
                                             </label>
                                             <input
                                                  {...register("date", {
                                                       required: true,
                                                  })}
                                                  type="date"
                                                  placeholder="Price Money"
                                                  className="input input-bordered w-full text-black"
                                             />
                                        </div>
                                        {/* Task Description*/}
                                        <div className="form-control w-full">
                                             <label className="label">
                                                  <span className="">
                                                       Task Description*
                                                  </span>
                                             </label>
                                             <textarea
                                                  {...register("description", {
                                                       required: true,
                                                  })}
                                                  className="textarea textarea-bordered text-black"
                                                  placeholder="Description"
                                             ></textarea>
                                        </div>
                                   </div>
                              </div>
                              {/* +++++++++++ */}
                              <div className="text-center">
                                   <button className="btn mt-2 w-full text-center primary-btn">
                                        Create Task
                                   </button>
                              </div>
                         </form>
                    </div>
               </Container>
          </div>
     );
};

export default AddTask;
