import axios from "axios";
import React, { useEffect, useState } from "react";

function Applicants({ back, jobId }) {
  const [data, setdata] = useState([]);
  const getapplicants = async () => {
    try {
      const res = await axios.post(
        `http://localhost:4000/applicant/getaplicants/${jobId}`,
        {},
        { withCredentials: true }
      );
      if (res.status === 200) {
        console.log(res.data);
        setdata(res.data.job.applications);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleReject = (applicantId) => {
    updateStatus(applicantId, "Rejected");
  };
  const handleAccept = (applicantId) => {
    updateStatus(applicantId, "Accepted");
  };
const updateStatus=async(applicantId,status)=>{
  try {
    const res=await axios.put(`http://localhost:4000/applicant/updateStatus/${applicantId}`,{ status },{withCredentials:true})
    if(res.status===200){
      console.log("update successfull");
      getapplicants()
      
    }
  } catch (error) {
    console.log(error);
    
  }
}


  useEffect(() => {
    if (jobId) {
      getapplicants();
    }
  }, [jobId]);

  return (
    <div className=" mt-4">
      <div className="text-sm  py-2" onClick={() => back("")}>
        ← Back
      </div>

      <div className="font-bold">
Applicants {`${data.length}`}

      </div>

      <div className="mt-4">
        <table className="table-auto  w-full">
          <thead>
            <tr className=" bg-gray-100">
              <th className=" py-2 px-2">Full Name</th>
              <th className=" py-2 px-2">Email</th>
              <th className=" py-2 px-2">Contect</th>
              <th className=" py-2 px-2">Resume</th>
              <th className=" py-2 px-2">Date</th>
              <th className=" py-2 px-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, index) => (
              <tr key={index} className="border-b">
                <td className=" py-2 px-2 text-center font-semibold">
                  {e.applicant.name}
                </td>
                <td className=" py-2 px-2 text-center ">{e.applicant.email}</td>
                <td className=" py-2 px-2 text-center ">
                  {e.applicant.mobile}
                </td>
                <td className=" py-2 px-2 text-center ">abhi file nahi hai</td>
                <td className=" py-2 px-2 text-center ">{e.createdAt}</td>
                <td className=" py-2 px-2 min-w-24">
                  <div className="dropdown">
                    <div className="text-3xl ">
                    <div tabIndex={0} className="text-xs border rounded-xl px-2 py-1">

                      {e.status}
                    </div>
                      {/* <i className="r" tabIndex={0}></i> */}
                    </div>
                    <ul
                      tabIndex={0}
                      className=" dropdown-content dropdown-left w-36 bg-base-100 z-[1] p-2 shadow"
                    >
                      <li
                        className="hover:bg-base-300 py-1 "
                        onClick={() => handleAccept(e._id)}
                      >
                        <i className="ri-edit-2-fill px-2  "></i>Asecpt{" "}
                      </li>
                      <li
                        className="hover:bg-base-300 py-1"
                        onClick={() => handleReject(e._id)}
                      >
                        <i class="ri-eye-fill px-2"></i>Rejected
                      </li>
                    </ul>
                  </div>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Applicants;
