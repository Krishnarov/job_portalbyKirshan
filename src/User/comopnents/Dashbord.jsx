import React, { useState } from "react";

import Sidebar from "./sidebar";
import DashNav from "./DashNav";
import DashHero from "./DashHero";
import { useNavigate } from "react-router-dom";

const data = {
  name: "krishna",
  notification: 0,
  review: 78,
  schedule: 3,
  messages: 24,
};
function Dashbord(jobs) {


  const [active, setActive] = useState("dashboard");

  const handleSidebarClick = (section) => {
    setActive(section);
  };


  const navgate = useNavigate();

  const userdata = JSON.parse(sessionStorage.getItem("user"));
  // console.log(userdata.user);
  // window.addEventListener("popstate", () => {
  //   sessionStorage.clear();
  //   window.location.reload();
  // });
  if (!userdata || !userdata.usertype==="client") {
    setTimeout(() => {
      navgate("/");
      console.log(userdata);
      
    }, 2000);
    return (
      <div className="w-full h-svh flex items-center justify-center text-lg">
        Loading...
      </div>
    );
  }
  return (
    <div className="">
      <div className="flex ">
        <div className="w-1/6 h-full fixed top-0 left-0  	">
          <Sidebar data={userdata} onSidebarClick={handleSidebarClick} activeSection={active}/>
        </div>
        <div className="w-full ">
          <div className=" left-[240px] fixed top-0 right-0 z-10">
            <DashNav data={userdata} e={data} />
          </div>
          <div className=" mt-12 relative ">
            <div className=" absolute left-[240px] p-4 right-0">
              <DashHero data={userdata} e={data} jobs={jobs} activeSection={active} onSidebarClick={handleSidebarClick}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
