import React, { useState } from "react";
import Sidebar from "../../User/comopnents/sidebar";
import DashNav from "../../User/comopnents/DashNav";
import ReNavBar from "./ReNavBar";
import Residebar from "./Residebar";
import ReDashhero from "./ReDashhero";
function ReDashboard() {
  const [active, setactive] = useState("dashboard");
  const handleSidebarClick = (e) => {
    setactive(e);
  };
  return (
    <div>
      <div className="">
        <div className="flex ">
          <div className="w-1/6 h-full fixed top-0 left-0  	">
            <Residebar setactiveclick={handleSidebarClick} />
          </div>
          <div className="w-full ">
            <div className=" left-[240px] fixed top-0 right-0 z-10">
              <ReNavBar />
            </div>
            <div className=" mt-12 relative ">
              <div className=" absolute left-[240px] p-4 right-0">
                <ReDashhero activ={active} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReDashboard;
