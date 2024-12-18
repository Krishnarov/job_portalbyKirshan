import React, { useEffect, useState } from "react";
import Logout from "./Logout";

function DashNav(props) {
const [stiky ,setstiky]=useState(false)
const [greeting, setgreeting] = useState("");
  
 
useEffect(()=>{

  const currenthour = new Date().getHours();
  if (currenthour < 12) {
    setgreeting("Good Morning");
  } else if (currenthour < 18) {
    setgreeting("Good Afternoon");
  } else {
    setgreeting("Good Evening");
  }





  const handelscroll=()=>{
  if(window.scrollY>0){
    setstiky(true)
  }else{
    setstiky(false)
  }

  }
  window.addEventListener("scroll",handelscroll)
  return(()=>window.addEventListener("scroll",handelscroll))

})

  return (
    <div className={`border-b {} w-full px-4 ${stiky ? "shadow-md duration-300 transition-all ease-in-out bg-slate-200":""}` }>
      <div className="flex items-center justify-between">
        <div className="flex items-center p-2 gap-2">
          {/* <div className="w-12 h-12 ">
            {" "}
            <img
              src="./images/ClassPass.png"
              className="object-contain aspect-square"
              alt=""
            />
          </div>
          <div>
            <p className="text-slate-500 text-sm">Compani</p>
            <h1 className="text-xl font-bold">Job_yahan</h1>
          </div> */}
          <div>
          <h1 className="text-xl font-bold font-serif">
            {greeting}, {props.data.name}
          </h1>
          <p className="text-slate-500 text-sm">
            Here is your job listings statistic report from July 19 - July 25.
          </p>
        </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="relative"><i className="ri-notification-2-line text-2xl"></i> <span className="bg-red-500 top-0 left-3 w-4 h-4 text-center absolute rounded-full text-white text-xs font-bold">{props.noti? props.noti:null}</span> </div>
          <Logout/>
           </div>
      </div>
    </div>
  );
}

export default DashNav;
