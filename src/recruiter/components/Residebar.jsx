import React, { useEffect, useState } from "react";

function Residebar({setactiveclick}) {
  const [greeting, setgreeting] = useState("");
const activehendal=(e)=>{
    setactiveclick(e)
}
  useEffect(() => {
    const currenthour = new Date().getHours();
    if (currenthour < 12) {
      setgreeting("Good Morning");
    } else if (currenthour < 18) {
      setgreeting("Good Afternoon");
    } else {
      setgreeting("Good Evening");
    }
  });
  return (
    <div className="w-full h-screen bg-slate-100">
      <div className="px-4 pt-4">
        <h1 className="text-xl font-bold font-serif">{greeting}</h1>
      </div>
      <div className="mt-12">
        <div
            onClick={() => activehendal("dashboard")}
          className={`mt-4  flex items-center gap-4 px-5 py-2 cursor-pointer`} >
          <div>
            <i className="ri-home-2-line"></i>
          </div>
          <div className="test-bold">Dashbord</div>
        </div>
        <div
            onClick={() => activehendal("user")}
          className={`mt-4  flex items-center gap-4 px-5 py-2 cursor-pointer`} >
          <div>
            <i className="ri-home-2-line"></i>
          </div>
          <div className="test-bold">users</div>
        </div>
        <div
            onClick={() => activehendal("post")}
          className={`mt-4  flex items-center gap-4 px-5 py-2 cursor-pointer`} >
          <div>
            <i className="ri-home-2-line"></i>
          </div>
          <div className="test-bold">post job</div>
        </div>
        <div
            onClick={() => activehendal("profile")}
          className={`mt-4  flex items-center gap-4 px-5 py-2 cursor-pointer`} >
          <div>
            <i className="ri-home-2-line"></i>
          </div>
          <div className="test-bold">profile</div>
        </div>
      </div>
    </div>
  );
}

export default Residebar;
