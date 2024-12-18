import React, { useEffect, useState } from "react";
import JobDetails from "./JobDetails";

function Joblisting({ jobs }) {
  const rate = 5;
  const [Jobs, setJobs] = useState([]);
  const [Job, setJob] = useState([]);
  const [active, setatrive] = useState(false);
  console.log(jobs.jobs.jobs);
  useEffect(() => {
    const setJobData = async () => {
      setJobs(jobs.jobs.jobs || []);
    };
    if (Jobs.length === 0) {
      setJobData();
    }

  }, [Jobs, jobs]);
const onejob=(e)=>{
  console.log(e);
  setatrive(e)
  
}
  console.log(Jobs);
  return (
    <div>
      {active ? <JobDetails back={onejob} job={Job}/>:(
      <div className="md:px-28 px-4 py-12 bg-i-hero">
        <div className=" grid md:grid-cols-1 gap-6 mt-12 ">

          {Jobs.map((item, index) => (
            <div
              key={index}
              onClick={()=>{setJob(item),setatrive(true)}}
              className="bg-white p-4 px-12 md:flex gap-8 shadow border"
            >
              <div className="flex items-center md:mb-0 mb-2 w-16">

                <img
                  src={`http://localhost:4000/public/${
                    item.company === null ? null : item.company.logo
                  }`}
                />
              </div>
              <div className="flex justify-between w-full">
                <div className=" ">
                  <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                  <p>
                    {item.company.name} . {item.address}
                  </p>
                  <div className="flex items-center flex-wrap md:flex-nowrap gap-4 mt-4">
                    {item.skills[0] ? (
                      <div className="px-3 py-1 bg-pink-100 text-pink-700 rounded-2xl">
                        {item.skills[0]}
                      </div>
                    ) : null}
                    {item.skills[1] ? (
                      <div className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-2xl">
                        {item.skills[1]}
                      </div>
                    ) : null}
                    {item.skills[2] ? (
                      <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-2xl">
                        {item.skills[2]}
                      </div>
                    ) : null}
                    {item.skills[3] ? (
                      <div className="px-3 py-1 bg-green-100 text-green-700 rounded-2xl">
                        {item.skills[3]}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className=" w-full relative">
                  <div className="flex justify-end">
                    <button  className="border-indigo-700 border-2 px-2 py-1 hover:bg-indigo-600 hover:text-white">
                      Apply Now
                    </button>
                    <p>{item.jobType}</p>
                  </div>
                  <div>
                    <i className="ri-star-fill text-yellow-500"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
      )}
    </div>
  );
}

export default Joblisting;
