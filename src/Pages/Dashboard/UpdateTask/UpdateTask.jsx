import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Container from "../../../Shared/ContainerDiv/Container";
import WebsiteTitle from "../../../Shared/WebsiteTitle/WebsiteTitle";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const UpdateTask = () => {
     const task = useLoaderData();
     const { _id, taskTitle, priority, deadLine, description, status, email } =
          task;
     // console.log(task);
     const location = useLocation()
     console.log(location);
     const navigate = useNavigate();
     const from = location.state || '/'
     const { register, handleSubmit } = useForm();
     // const navigate = useNavigate();
     const onSubmit = async (data) => {
          // const myTask =  {_id,taskTitle,priority,deadLine,description,status,email};
          // console.log("task",myTask);
          // console.log(data);
          const allMyTask = {
               taskTitle: data.name,
               priority: data.tag,
               deadLine: data.date,
               description: data.description,
          };
          console.log("input",allMyTask);
          fetch(`http://localhost:5000/allTasks/${_id}`, {
               method: "PATCH",
               headers: {
                    "content-type": "application/json",
               },
               body: JSON.stringify(allMyTask),
          })
               .then((res) => res.json())
               .then((data) => {
                    console.log(data);
                    if (data.modifiedCount) {
                         Swal.fire(
                              "success",
                              "Successfully Updated your assignment",
                              "success"
                         );
                    }
                    navigate(from, {replace:true});
               });
     };
     return (
          <div className="text-white">
               <h1 className="text-xl md:text-5xl font-bold text-center underline">
                    UpdateTask
               </h1>
               <div>
                    <Container>
                         <WebsiteTitle title={"Update Task"}></WebsiteTitle>
                         <h1 className="text-center text-3xl md:text-4xl p-5 font-bold text-white">
                              Add Task Here
                         </h1>
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
                                                       defaultValue={taskTitle}
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
                                                       defaultValue={priority}
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
                                                       defaultValue={deadLine}
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
                                                       {...register(
                                                            "description",
                                                            {
                                                                 required: true,
                                                            }
                                                       )}
                                                       defaultValue={
                                                            description
                                                       }
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
          </div>
     );
};

export default UpdateTask;
