import React, { useEffect, useState } from "react";
import Botten from "../../components/Botten";
import axios from "axios";
function JobDetails(props) {
  const [isApplid, setisApplid] = useState(false);
  console.log(props);
  const getApplicantIds = (job) => {
    if (job.applications && job.applications.length > 0) {
      const applicantIds = job.applications.map(
        (application) => application.applicant._id
      );
      return applicantIds;
    }
    return [];
  };
  const getapplicent = async () => {
    const res = await axios.post(
      `http://localhost:4000/applicant/getaplicants/${props.job._id}`,
      {},
      { withCredentials: true }
    );

    const applicantIds = getApplicantIds(res.data.job);
    const user=JSON.parse(sessionStorage.getItem("user"))
    console.log(applicantIds,user._id);
    
    if (applicantIds.includes(user._id)) {
        setisApplid(true); // Match found, set `isApplid` to true
      } else {
        setisApplid(false); // No match, set `isApplid` to false
      }
  };

  console.log(isApplid);
  useEffect(() => {
    getapplicent();
  }, []);
  const Apply = async () => {
    try {
      const res = await axios.post(
        `http://localhost:4000/applicant/aplidjob/${props.job._id}`,
        {},
        { withCredentials: true }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-20 mt-5 border py-5">
      <div className="flex items-center mb-5">
        <div className="w-2/4" onClick={() => props.back(false)}> ← Back</div>
        <div className="text-2xl  w-2/4 underline font-bold">Job Details</div>
      </div>
      <div className="flex items-center">
        <div className="w-2/5">
          <img
            className="w-3/4"
            src={`http://localhost:4000/public/${props.job.company?.logo}`}
            alt=""
          />
        </div>
        <div className="w-2/4">
          <table width={"100%"}>
            <tr className="w-full">
              <td className="font-bold">Job Title :- </td>
              <td>{props.job?.title}</td>
            </tr>
            <tr>
              <td className="font-bold">Company :- </td>
              <td>{props.job.company?.name}</td>
            </tr>
            <tr>
              <td className="font-bold">Company location :- </td>
              <td>{props.job.company?.location}</td>
            </tr>
            <tr>
              <td className="font-bold">Address :- </td>
              <td>{props.job?.address}</td>
            </tr>
            <tr>
              <td className="font-bold">Company website :- </td>
              <td>{props.job.company?.website}</td>
            </tr>
            <tr>
              <td className="font-bold">Job createdAt:- </td>
              <td>{props.job?.createdAt}</td>
            </tr>
            <tr>
              <td className="font-bold">Job Description :- </td>
              <td>{props.job?.dec}</td>
            </tr>
            <tr>
              <td className="font-bold">Job experience :- </td>
              <td>{props.job?.experience}</td>
            </tr>
            <tr>
              <td className="font-bold">Job jobType :- </td>
              <td>{props.job?.jobType}</td>
            </tr>
            <tr>
              <td className="font-bold">Job position :- </td>
              <td>{props.job?.position}</td>
            </tr>
            <tr>
              <td className="font-bold">Salary :- </td>
              <td>{props.job?.salary}</td>
            </tr>
            <tr>
              <td className="font-bold">Skills :- </td>
              <td>
                {props.job?.skills?.map((e, index) => (
                  <ul key={index}>
                    <li>{e}</li>
                  </ul>
                ))}
              </td>
            </tr>
          </table>
          <div className="w-full mt-5">
            <Botten
              name={!isApplid ? "Apply Now" : "Allrady Apply"}
              clicks={Apply}
              w={"w-full"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
