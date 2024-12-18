import React, { useEffect, useState } from "react";
import ApplideJobs from "./applideJobs";
import Scheduling from "./Scheduling";
import Joblisting from "./Joblisting";
import axios from "axios";
import Profile from "../../components/Profile";
function Arrowdown() {
  return (
    <>
      <i className="ri-arrow-down-s-line text-2xl"></i>
    </>
  );
}
function Arrowright() {
  return (
    <>
      <i className="ri-arrow-right-s-line text-2xl"></i>
    </>
  );
}

function DashHero({ activeSection, onSidebarClick, jobs }) {
  // console.log(jobs.jobs.jobs.length);

  const [jobsall, setjobsall] = useState(null);
  const [applyjobsall, setapplyjobsall] = useState(null);

  const handelacrive = (e) => {
    onSidebarClick(e);
  };
  
  const [allaplidjobs, setallappliedsjob] = useState([]);
  const [greeting, setgreeting] = useState("");

  const applidejobNo = (e) => {
    setapplyjobsall(e);
  };


  const getdata = async () => {
    const res = await axios.post(
      "http://localhost:4000/applicant/allaplidjob",
      {},
      { withCredentials: true }
    );
    setallappliedsjob(res.data?.application);
    // setapplyjob(res.data.application.length);
  };
  
  useEffect(() => {
    const currenthour = new Date().getHours();
    if (currenthour < 12) {
      setgreeting("Good Morning");
    } else if (currenthour < 18) {
      setgreeting("Good Afternoon");
    } else {
      setgreeting("Good Evening");
    }
    if(allaplidjobs.length===0){
      getdata()

    }
    getalljobs();
  },[allaplidjobs]);
  

  const getalljobs = async () => {
    await setjobsall(jobs.jobs.jobs?.length);
  };
  // console.log(applyjobsall);
  // console.log(allaplidjobs);
  return (
    <div className="w-full h-full">
      <div className="flex items-center  gap-6 mt-4">
        <div
          onClick={() => handelacrive("Applied")}
          className="w-1/3 flex items-center bg-indigo-800 text-white px-3 py-5 justify-around"
        >
          <div className="text-5xl font-bold">{allaplidjobs?.length}</div>
          <div className="text-xl px-4 ">All Applide jobs</div>
          {activeSection === "Applied" ? <Arrowdown /> : <Arrowright />}
        </div>
        <div
          onClick={() => handelacrive("Interview")}
          className="w-1/3 flex items-center bg-green-400 text-white px-3 py-5 justify-around"
        >
          {/* <div className="text-5xl font-bold">{props.e.schedule}</div> */}
          <div className="text-xl px-4 ">Schedule for today</div>
          <div>
            {activeSection === "Interview" ? <Arrowdown /> : <Arrowright />}
          </div>
        </div>
        <div
          onClick={() => handelacrive("Listing")}
          className="w-1/3 flex items-center bg-sky-400 text-white px-3 py-5 justify-around"
        >
          <div className="text-5xl font-bold">{jobsall}</div>

          <div className="text-xl px-4 ">Job Listing</div>
          <div>
            {activeSection === "Listing" ? <Arrowdown /> : <Arrowright />}
          </div>
        </div>
      </div>

      <div>
        {activeSection === "Applied" && (
          <ApplideJobs allaplidjobs={allaplidjobs} />
        )}
        {activeSection === "Interview" && <Scheduling />}
        {activeSection === "Profile" && <Profile allaplidjobs={allaplidjobs}/>}
        {activeSection === "Listing" && <Joblisting jobs={jobs} />}
      </div>
    </div>
  );
}

export default DashHero;
