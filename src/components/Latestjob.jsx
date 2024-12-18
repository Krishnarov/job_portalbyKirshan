import React from "react";
function Latestjob(props) {
  console.log(props);
  
  return (
    <div className="bg-slate-100">
      <div className="md:px-28 px-4 py-12 bg-i-hero">
        <div className="md:flex items-center justify-between mb-12">
          <h2 className="md:text-5xl text-4xl font-black ">
            Latest <span className="text-sky-500">jobs</span>
          </h2>
          <div className="md:flex items-center text-indigo-600 md:block hidden">
            Show all jobs <i className="ri-arrow-right-line"></i>
          </div>
        </div>

        <div className=" grid md:grid-cols-2 grid-cols-1 gap-6 mt-12">
          {props.jobs.slice(0, 6).map((item, index) => (
            <div key={index} className="bg-white p-4 px-12 md:flex gap-8">
              <div className="flex items-center md:mb-0 mb-2">
                {/* <img className="h-14 " src={item.logo} alt="" /> */}
                <img
                className="h-14 "
                  src={`http://localhost:4000/public/${
                    item?.company === null ? null : item.company?.logo
                  }`}
                />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">{item?.title}</h2>
                <p>
                  {item.company?.name} . {item?.address}
                </p>
                <div className="flex items-center flex-wrap md:flex-nowrap gap-4 mt-4">
                  {item.skills[0] ? (
                    <div className="px-3 py-1 bg-pink-100 text-pink-700 rounded-2xl">
                      {item?.skills[0]}
                    </div>
                  ) : null}
                  {item?.skills[1] ? (
                    <div className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-2xl">
                      {item?.skills[1]}
                    </div>
                  ) : null}
                  {item?.skills[2] ? (
                    <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-2xl">
                      {item.skills[2]}
                    </div>
                  ) : null}
                  {item?.skills[3] ? (
                    <div className="px-3 py-1 bg-green-100 text-green-700 rounded-2xl">
                      {item?.skills[3]}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center mt-4 text-indigo-600 block md:hidden">
            Show all jobs <i className="ri-arrow-right-line"></i>
          </div>
      </div>
    </div>
  );
}

export default Latestjob;
