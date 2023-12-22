import { useContext, useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { TbHttpDelete } from "react-icons/tb";
import { MdOutlinePending } from "react-icons/md";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { TbHandClick } from "react-icons/tb";
import { FaRunning } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";
import Swal from "sweetalert2";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import DeadLineCount from "../../../Shared/DeadLineCount/DeadLineCount";
import WebsiteTitle from "../../../Shared/WebsiteTitle/WebsiteTitle";
import { Link, useLocation } from "react-router-dom";

const AllTask = () => {
     const { user } = useContext(AuthContext);
     const [allTask, setAllTask] = useState([]);
     const location = useLocation();
     // const SubmissiondeadLine = new Date(deadline).getTime();
     // console.log("SubmissiondeadLine",SubmissiondeadLine);
     const today = new Date().getTime();
     console.log("today", today);
     const { refetch, data: task = [] } = useQuery({
          queryKey: ["allTasks"],
          queryFn: async () => {
               const res = await axios.get("https://job-task-server-pi.vercel.app/allTasks");
               return res.data;
          },
     });
     useEffect(() => {
          if (user) {
               const filterData = task.filter(
                    (item) => item.email === user?.email
               );
               setAllTask(filterData);
          }
     }, [task, user]);
     const handleRemoveTask = (id) => {
          console.log(id);
          Swal.fire({
               title: "Are you sure?",
               text: "This task will be remove",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Yes, Remove this Task!",
          }).then((result) => {
               if (result.isConfirmed) {
                    axios.delete(`https://job-task-server-pi.vercel.app/allTasks/${id}`).then(
                         (res) => {
                              if (res.data.deletedCount > 0) {
                                   Swal.fire({
                                        title: "Deleted!",
                                        text: "Task has been removed successfully.",
                                        icon: "success",
                                   });
                              }
                              refetch();
                         }
                    );
               }
          });
     };
     // const handleTaskOngoing = (id)=>{
     //      console.log("Task on going",id);
     // }
     // on going function
     const handleTaskOngoing = (id, status) => {
          Swal.fire({
               title: "Are you sure?",
               text: "Want to set this task as On-Going?",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Yes...",
          }).then((result) => {
               if (result.isConfirmed) {
                    const updateOnGoing = { status: status };
                    console.log(updateOnGoing);
                    axios.put(
                         `https://job-task-server-pi.vercel.app/allTasks/${id}`,
                         updateOnGoing
                    ).then((res) => {
                         if (res.data.modifiedCount > 0)
                              Swal.fire(
                                   "success",
                                   "Successfully Updated your task to On-Going",
                                   "success"
                              );
                         refetch();
                    });
               }
          });
     };
     // const handleTaskDone = (id)=>{
     //      console.log("done",id);
     // }
     // task done
     const handleTaskDone = (id, status) => {
          Swal.fire({
               title: "Are you sure?",
               text: "Want to set this task as Complete..?",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Yes...",
          }).then((result) => {
               if (result.isConfirmed) {
                    const updateOnGoing = { status: status };
                    console.log(updateOnGoing);
                    const updateDone = { status: status };
                    console.log(updateDone);
                    axios.put(
                         `https://job-task-server-pi.vercel.app/allTasks/${id}`,
                         updateDone
                    ).then((res) => {
                         if (res.data.modifiedCount > 0)
                              Swal.fire(
                                   "success",
                                   "Successfully Updated your Task to Completed",
                                   "success"
                              );
                         refetch();
                    });
               }
          });
     };

     // update task
     const handleUpdateTask = (id) => {
          console.log(id);
     };
     return (
          <div>
               <WebsiteTitle title={"All Task"}></WebsiteTitle>
               {/* <h1 className="my-5 text-2xl md:text-4xl font-bold text-center text-white">
                    All Task
               </h1> */}
               {/* <h1 className="my-5 text-2xl md:text-4xl font-bold text-center text-white">
                    {allTask.length}
               </h1> */}
               {allTask.length === 0 ? (
                    <div className="text-center mt-10">
                         <h1 className="my-5 text-2xl md:text-4xl font-bold text-center text-white">
                              You Did Not Added Any Task Yet
                         </h1>
                         <Link to="/dashboard/addTask">
                              <button className="primary-btn p-2 text-white border flex gap-2 items-center mx-auto">
                                   Click Here For Add Task <TbHandClick />
                              </button>
                         </Link>
                    </div>
               ) : (
                    <div>
                         <h1 className="my-5 text-2xl md:text-4xl font-bold text-center text-white">
                              All Task
                         </h1>
                         <div className="grid md:grid-cols-3 gap-5 max-h-[75vh] overflow-y-auto text-white">
                              {/* 1st */}
                              <div className="p-2 border rounded-xl dark-bg">
                                   <div className="text-center font-bold text-xl flex gap-2 justify-center">
                                        <p>Todo</p>{" "}
                                        <p>
                                             <MdOutlinePending />
                                        </p>
                                   </div>
                                   <div className="divider divider-warning"></div>
                                   {allTask.map(
                                        (task) =>
                                             task?.status === "todo" && (
                                                  <div
                                                       key={task._id}
                                                       className="shadow-xl light-bg my-5 p-2 rounded-xl space-y-2 relative"
                                                  >
                                                       <p className="underline text-white font-bold">
                                                            Task Title:
                                                       </p>
                                                       <span>
                                                            {task?.taskTitle}
                                                       </span>
                                                       <p className="underline text-white font-bold">
                                                            Task priority:
                                                       </p>
                                                       <span>
                                                            {task?.priority}
                                                       </span>
                                                       <p className="underline text-white font-bold">
                                                            Task description:
                                                       </p>
                                                       <span>
                                                            {task?.description}
                                                       </span>
                                                       <div className="absolute top-0 right-5">
                                                            <button
                                                                 onClick={() =>
                                                                      handleRemoveTask(
                                                                           task._id
                                                                      )
                                                                 }
                                                                 className="primary-btn p-2 bg-white"
                                                            >
                                                                 <TbHttpDelete />
                                                            </button>
                                                            {new Date(
                                                                 task.deadLine
                                                            ).getTime() <
                                                            today ? (
                                                                 <button
                                                                      disabled
                                                                      className="primary-btn p-2 bg-white"
                                                                      title="click for make task On Going"
                                                                 >
                                                                      <FaRunning />
                                                                 </button>
                                                            ) : (
                                                                 <button
                                                                      onClick={() =>
                                                                           handleTaskOngoing(
                                                                                task._id,
                                                                                task.status
                                                                           )
                                                                      }
                                                                      className="primary-btn p-2 bg-white"
                                                                      title="click for make task On Going"
                                                                 >
                                                                      <FaRunning />
                                                                 </button>
                                                            )}
                                                            <Link
                                                                 state={
                                                                      location?.pathname
                                                                 }
                                                                 to={`/dashboard/updateTask/${task._id}`}
                                                            >
                                                                 <button
                                                                      onClick={() =>
                                                                           handleUpdateTask(
                                                                                task._id
                                                                           )
                                                                      }
                                                                      className="primary-btn p-2 bg-white"
                                                                      title="click for Update make task"
                                                                 >
                                                                      <MdOutlineBrowserUpdated />
                                                                 </button>
                                                            </Link>
                                                            {/* <button onClick={()=>handleUpdateTask(task._id)} className="bth">update</button> */}
                                                            {/* <button
                                                           onClick={() =>
                                                                handleTaskOngoing(
                                                                     task._id,
                                                                     task.status
                                                                )
                                                           }
                                                           className="primary-btn p-2 bg-white"
                                                           title="On Going"
                                                      >
                                                           <FaRunning />
                                                      </button> */}
                                                       </div>
                                                       {/* <p>{task.deadLine}</p> */}
                                                       <div className="w-full dark-bg rounded-full">
                                                            <DeadLineCount
                                                                 deadLine={
                                                                      task.deadLine
                                                                 }
                                                            ></DeadLineCount>
                                                       </div>
                                                  </div>
                                             )
                                   )}
                              </div>
                              {/* 2nd */}
                              <div className="p-2 border rounded-xl dark-bg">
                                   <div className="">
                                        <div className="text-center font-bold text-xl flex gap-2 justify-center">
                                             <p>On Going</p>
                                             <p>
                                                  <FaRunning />
                                             </p>
                                        </div>
                                        <div className="divider divider-info"></div>
                                   </div>
                                   {allTask.map(
                                        (task) =>
                                             task?.status === "ongoing" && (
                                                  <div
                                                       key={task._id}
                                                       className="shadow-xl light-bg my-5 p-2 rounded-xl space-y-2 relative"
                                                  >
                                                       <p className="underline text-white font-bold">
                                                            Task Title:
                                                       </p>
                                                       <span>
                                                            {task?.taskTitle}
                                                       </span>
                                                       <p className="underline text-white font-bold">
                                                            Task priority:
                                                       </p>
                                                       <span>
                                                            {task?.priority}
                                                       </span>
                                                       <p className="underline text-white font-bold">
                                                            Task description:
                                                       </p>
                                                       <span>
                                                            {task?.description}
                                                       </span>
                                                       <div className="absolute top-0 right-5">
                                                            <button
                                                                 onClick={() =>
                                                                      handleRemoveTask(
                                                                           task._id
                                                                      )
                                                                 }
                                                                 className="primary-btn p-2 bg-white"
                                                            >
                                                                 <TbHttpDelete />
                                                            </button>
                                                            {/* set time difference */}
                                                            {new Date(
                                                                 task.deadLine
                                                            ).getTime() <
                                                            today ? (
                                                                 <button
                                                                      disabled
                                                                      className="primary-btn p-2 bg-white"
                                                                      title="click for make task as completed"
                                                                 >
                                                                      <IoMdDoneAll />
                                                                 </button>
                                                            ) : (
                                                                 <button
                                                                      onClick={() =>
                                                                           handleTaskDone(
                                                                                task._id,
                                                                                task.status
                                                                           )
                                                                      }
                                                                      className="primary-btn p-2 bg-white"
                                                                      title="click for make task as completed"
                                                                 >
                                                                      <IoMdDoneAll />
                                                                 </button>
                                                            )}
                                                            {/* <button
                                                      onClick={() =>
                                                           handleTaskDone(
                                                                task._id,
                                                                task.status
                                                           )
                                                      }
                                                      className="primary-btn p-2 bg-white"
                                                      title="On Going"
                                                 >
                                                      <IoMdDoneAll />
                                                 </button> */}
                                                            <Link
                                                                 to={`/dashboard/updateTask/${task._id}`}
                                                            >
                                                                 <button
                                                                      onClick={() =>
                                                                           handleUpdateTask(
                                                                                task._id
                                                                           )
                                                                      }
                                                                      className="primary-btn p-2 bg-white"
                                                                      title="click for Update make task"
                                                                 >
                                                                      <MdOutlineBrowserUpdated />
                                                                 </button>
                                                            </Link>
                                                       </div>
                                                       <div className="w-full dark-bg rounded-full">
                                                            <DeadLineCount
                                                                 deadLine={
                                                                      task.deadLine
                                                                 }
                                                            ></DeadLineCount>
                                                       </div>
                                                  </div>
                                             )
                                   )}
                              </div>
                              {/* 3rd */}
                              <div className="p-2 border rounded-xl dark-bg">
                                   <div className="">
                                        <div className="text-center font-bold text-xl flex gap-2 justify-center">
                                             <p>Complete</p>
                                             <p>
                                                  <IoMdDoneAll />
                                             </p>
                                        </div>
                                        <div className="divider divider-success"></div>
                                   </div>
                                   {allTask.map(
                                        (task) =>
                                             task?.status === "completed" && (
                                                  <div
                                                       key={task._id}
                                                       className="shadow-xl light-bg my-5 p-2 rounded-xl space-y-2 relative"
                                                  >
                                                       <p className="underline text-white font-bold">
                                                            Task Title:
                                                       </p>
                                                       <span>
                                                            {task?.taskTitle}
                                                       </span>
                                                       <p className="underline text-white font-bold">
                                                            Task priority:
                                                       </p>
                                                       <span>
                                                            {task?.priority}
                                                       </span>
                                                       <p className="underline text-white font-bold">
                                                            Task description:
                                                       </p>
                                                       <span>
                                                            {task?.description}
                                                       </span>
                                                       <button
                                                            onClick={() =>
                                                                 handleRemoveTask(
                                                                      task._id
                                                                 )
                                                            }
                                                            className="absolute top-0 right-5 primary-btn p-2 bg-white"
                                                       >
                                                            <TbHttpDelete />
                                                       </button>
                                                  </div>
                                             )
                                   )}
                              </div>
                         </div>
                    </div>
               )}
          </div>
     );
};

export default AllTask;
