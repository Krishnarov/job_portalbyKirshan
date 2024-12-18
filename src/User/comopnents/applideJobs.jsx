import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

function ApplideJobs({allaplidjobs}) {

  
  // const [allaplidjob, setallappliedsjob] = useState([]);
  // const getdata = async () => {
  //   const res = await axios.post(
  //     "http://localhost:4000/applicant/allaplidjob",
  //     {},
  //     { withCredentials: true }
  //   );
  //   setallappliedsjob(res.data.application);
  //   setapplyjob(res.data.application.length);
  // };
  // useEffect(() => {
  //   getdata()
  // },[]);
  console.log(allaplidjobs);
  
  return (
    <div className="w-full h-full p-8 border">
      <h1>All applide jobs</h1>

      {allaplidjobs?.map((e, index) => (
        <div key={index} className="px-12 py-3 border shadow w-full mt-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
              className="h-20"
                src={`http://localhost:4000/public/${
                  e.job?.company === null ? null : e.job.company?.logo
                }`}
              />{" "}
            <div className="pl-20">
              <div className="font-bold">{e.job?.title}</div>
              <div>{e.job.company?.name}</div>
            </div>
            </div>
            <div className="">
              <div className={`border px-2 rounded-full  text-center flex items-center justify-center ${e?.status==="accepted" ? "bg-green-300":"bg-red-300"} `}>{e?.status}</div>
              {/* <div>{moment(e.updatedAt).fromNow}</div> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ApplideJobs;
