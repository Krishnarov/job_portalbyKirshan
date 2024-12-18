import React, { useEffect, useState } from "react";
import Botten from "../../components/Botten";
import axios from "axios";
import Postjob from "./Postjob";
import { toast, ToastContainer } from "react-toastify";
import Applicants from "./Applicants";

function ShowJobs() {
  const [job, setjob] = useState([]);
  const [onejob, setonejob] = useState([]);
  const [active, setactive] = useState("");
  const getjobdata = async () => {
    try {
      const res = await axios.post(
        "http://localhost:4000/jobs/getadminjob",
        {},
        { withCredentials: true }
      );
      if (res.status === 200) {
        setjob(res.data.jobs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const habdelback = (e) => {
    setactive(e);
  };
  const handeledit = (e) => {
    setonejob(e);
    setactive("edit");
  };
  const handeldelete = async (e) => {
    try {
      const res = await axios.delete(
        `http://localhost:4000/jobs/deletejob/${e}`,
        { withCredentials: true }
      );
      if (res.status === 200) {
        getjobdata();
        toast.success("Job Deleted seccessfully!", {
          position: "bottom-right",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getjobdata();
  }, []);

  const handelApplicants= async (e) => {
    setonejob(e)
    setactive("Applicants")
  }



  return (
    <div className="px-12">
      <ToastContainer />
      {active==="postjob" && (
        <Postjob back={habdelback} refres={getjobdata} />
      ) }
      {active==="" && (
        <>
          <div className="flex justify-between items-center mt-5">
            <div className="text-xl font-bold">All Posted Job</div>
            <Botten name={"Post Job"} clicks={() => setactive("postjob")} />
          </div>
          <div className="mt-4">
            <table className="table-auto  w-full">
              <thead>
                <tr className=" bg-gray-100">
                  <th className=" py-2 px-2">company</th>
                  <th className=" py-2 px-2">title</th>
                  <th className=" py-2 px-2">Date</th>
                  <th className=" py-2 px-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {job?.map((e, index) => (
                  <tr key={index} className="border-b">
                    <td className=" py-2  px-2">
                      <div className="flex items-center gap-4 font-semibold">
                        <img
                          src={`http://localhost:4000/public/${
                            e.company === null ? null : e.company.logo
                          }`}
                          className="w-16 h-16 rounded-full"
                          alt=""
                        />

                        {e.company === null
                          ? "company nahi hai"
                          : e.company.name}
                      </div>
                    </td>
                    <td className=" py-2 px-2  text-center">{e.title}</td>

                    <td className=" py-2 px-2  text-center">{e.createdAt}</td>
                    <td className=" py-2 min-w-32 px-2">
                      <div className="dropdown">
                        <div className="text-3xl ">
                          <i class="ri-more-fill " tabIndex={0}></i>
                          {/* <i className="r" tabIndex={0}></i> */}
                        </div>
                        <ul
                          tabIndex={0}
                          className=" dropdown-content dropdown-left w-36 bg-base-100 z-[1] p-2 shadow"
                        >
                          <li
                            className="hover:bg-base-300 py-1 "
                            onClick={() => handeledit(e)}
                          >
                            <i className="ri-edit-2-fill px-2  "></i>Edit{" "}
                          </li>
                          <li
                            className="hover:bg-base-300 py-1"
                            onClick={() => handelApplicants(e._id)}
                          >
                            <i class="ri-eye-fill px-2"></i>Applicants
                          </li>
                          <li
                            className="hover:bg-base-300 py-1  text-red-400"
                            onClick={() => handeldelete(e._id)}
                          >
                            <i className="ri-delete-bin-6-line px-2"></i>Delete{" "}
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
        )}
      
      {active==="edit" && <Postjob back={habdelback} jobhai={onejob} refres={getjobdata} />}
      {active==="Applicants" && <Applicants jobId={onejob} back={habdelback} />}
    </div>
  );
}

export default ShowJobs;
