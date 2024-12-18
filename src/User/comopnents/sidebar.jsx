import React, { useState } from "react";

function Sidebar({ onSidebarClick, activeSection, data }) {
  console.log(data);

  const [active, setactive] = useState("dashboard");

  const activehendal = (a) => {
    setactive(a);
    onSidebarClick(a);
  };

  return (
    <div className="py-4 px- bg-slate-100 h-svh relative">
      <div className="flex items-center gap-2 justify-center">
        <span className="px-4 py-[4px] text-xl rounded-full font-black bg-indigo-600 text-white">
          j
        </span>
        <span className="text-2xl font-bold ">JOB_YAHAN</span>
      </div>
      <div className="text-sm text-slate-800">
        <div
          onClick={() => activehendal("dashboard")}
          className={`${
            activeSection === "dashboard"
              ? "border-l-2 border-indigo-600 text-black bg-slate-200"
              : null
          }   mt-4  flex items-center gap-4 px-5 py-2 cursor-pointer`}
        >
          <div>
            <i className="ri-home-2-line"></i>
          </div>
          <div className="test-bold">Dashbord</div>
        </div>
        <div
          onClick={() => activehendal("Messages")}
          className={`flex items-center mt-4 gap-4 px-5 py-2 cursor-pointer ${
            activeSection === "Messages"
              ? "border-l-2 border-indigo-600 text-black bg-slate-200"
              : null
          } `}
        >
          <div>
            <i className="ri-message-2-line"></i>
          </div>
          <div>Messages</div>
        </div>
        <div
          onClick={() => activehendal("Applied")}
          className={`flex items-center mt-4 gap-4 px-5 py-2 cursor-pointer ${
            activeSection === "Applied"
              ? "border-l-2 border-indigo-600 text-black bg-slate-200"
              : null
          } `}
        >
          <div>
            <i className="ri-hotel-line"></i>
          </div>
          <div>Applied Jobs</div>
        </div>
        <div
          onClick={() => activehendal("Interview")}
          className={`flex items-center mt-4 gap-4 px-5 py-2 cursor-pointer ${
            activeSection === "Interview"
              ? "border-l-2 border-indigo-600 text-black bg-slate-200"
              : null
          } `}
        >
          <div>
            <i className="ri-group-line"></i>
          </div>
          <div>Schedule Interview</div>
        </div>
        <div
          onClick={() => activehendal("Listing")}
          className={`flex items-center mt-4 gap-4 px-5 py-2 cursor-pointer ${
            activeSection === "Listing"
              ? "border-l-2 border-indigo-600 text-black bg-slate-200"
              : null
          } `}
        >
          <div>
            <i className="ri-file-list-3-line"></i>
          </div>
          <div>Job Listing</div>
        </div>
        <hr className="border-slate-400 mt-8 " />
        <div className="flex items-center mt-4  gap-4 py-2 px-10 ">
          <div className=" text-slate-600">Setting</div>
        </div>{" "}
        <div
          onClick={() => activehendal("Profile")}
          className={`flex items-center mt-4 gap-4 px-5 py-2 cursor-pointer ${
            activeSection === "Profile"
              ? "border-l-2 border-indigo-600 text-black bg-slate-200"
              : null
          } `}
        >
          <div>
            <i className="ri-profile-line"></i>
          </div>
          <div>Profile</div>
          <span className="w-2 h-2  rounded-full bg-red-500"></span>
        </div>{" "}
        <div
          onClick={() => activehendal("Help")}
          className={`flex items-center mt-4 gap-4 px-5 py-2 cursor-pointer ${
            activeSection === "Help"
              ? "border-l-2 border-indigo-600 text-black bg-slate-200"
              : null
          } `}
        >
          <div>
            <i className="ri-message-2-line"></i>
          </div>
          <div>Help Center</div>
        </div>
      </div>

      <div className="flex items-center absolute bottom-4 left-2 justify-center gap-2 ">
        <div className="h-10 w-10">
          <img
            className="aspect-square object-cover object-center rounded-full"
            src="./images/ClassPass.png"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-xl font-bold">{data.name}</h1>
          <p className="text-slate-500 text-sm">{data.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
