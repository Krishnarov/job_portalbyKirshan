import React, { useState } from "react";

function Hero(props) {

  
  const locations = ["Lucknow", "Delhi", "goa", "azamgarh"];
  const [locetiondata, setlocationdata] = useState("");
  const [searchjob, setsearchjob] = useState("");

  const handelsearch = () => {
    console.log("location :- " + locetiondata);
    console.log("search jobs" + searchjob);
  };
  return (
    <div className="md:px-28 px-4 mt-12 bg-slate-100 overflow-hidden">
      <div className="md:flex relative ">
        <div className="md:w-2/5 mt-16 md:mt-32">
          <h1 className="font-black text-5xl md:text-6xl mb-4 ">
            Discover morethen <span className="text-sky-500">50000+Jobs</span>
          </h1>
          <img src="./images/line.png" alt="" />
          <p className="mt-10 text-xl">
            Great platform for the job seeker that searching for new career
            heights and passionate about startups.
          </p>
        </div>

        <div className="w-3/5 bg-i-hero px-16 overflow-hidden hidden md:block">
          <img className="px-12 pt-10 " src="./images/man.png" alt="" />
          <div className="cornor-hero-div"></div>
        </div>
        <div className="md:absolute  md:top-2/3  md:w-3/5 p-4 shadow bg-white flex flex-col md:flex-row items-center my-12 md:my-0 gap-4 ">
          <div className="flex w-full items-center gap-4 md:w-2/5">
            <i className="ri-search-line text-3xl"></i>
            <input
              className="border-b w-full md:h-12 h-14 outline-0"
              placeholder="Job title or keyword"
              type="text"
              name="searchjobs"
              onChange={(j) => setsearchjob(j.target.value)}
              id=""
            />
          </div>
          <div className="flex items-center w-full gap-4 md:w-2/5 selectLocation">
            <i className="ri-map-pin-line text-3xl"></i>
            <select
              name=""
              id=""
              className="border-b h-14 md:h-12 w-full outline-0 "
              onChange={(l) => setlocationdata(l.target.value)}
            >
             
              {props.loc.map((a, index) => (
                <option value={a.address} key={index} >
                  {a.address}
                </option>
              ))}
            </select>
          </div>
          <div className="md:w-1/3 w-full flex justify-end items-cente text-center">
            <button
              onClick={handelsearch}
              className="bg-indigo-600 h-14 md:h-12 w-full hover:text-indigo-600  text-white hover:bg-transparent border-2 border-indigo-600 "
            >
              Search my job
            </button>
          </div>
        </div>
        {/* <div className="text-slate-500 my-20 md:hidden">
             # Team{'{Error}'}
        </div> */}
      </div>
    </div>
  );
}

export default Hero;
