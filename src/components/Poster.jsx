import React from "react";

function Poster() {
  return (
    <div className="md:px-28  mt-12 relative overflow-hidden">
      <div className="bg-indigo-600 flex-col md:py-0 py-16 md:flex-row flex">
        <div className="md:w-2/4 md:p-20 px-4  text-center  md:text-left text-white">
          <h1 className="md:text-5xl text-4xl  font-bold md:pr-14 mb-6">
            Start posting jobs today
          </h1>
          <p className="mb-6"> Start posting jobs for only $10.</p>
          <button className="text-indigo-600 md:w-2/4 w-full">Signup for free</button>
        </div>
        <div className="md:w-2/4 flex  md:justify-center md:mt-0 mt-10 items-end">
          <img
            className="object-fill w-4/5 z-10 md:block hidden"
            src="./images/dashbord.png"
            alt=""
          />
          <img
            className="object-fill pl-4 md:w-4/5 z-10 block md:hidden"
            src="./images/dashbord1.png"
            alt=""
          />
        </div>
            <div className="coener-div md:top-[-47px] md:left-[54px] top-[-50px] z-10 left-[-50px]"></div>
            <div className="coener-div md:buttom-[-27px] md:right-[55px] bottom-[-50px] right-[-30px]"></div>
      </div>
    </div>
  );
}

export default Poster;
