import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import Botten from "../../components/Botten";

function Postjob( {back,refres,jobhai} ) {
  const [title, settitle] = useState([]);
  const [address, setlocation] = useState([]);
  const [companyId, setcompanyId] = useState('');
  const [dec, setdec] = useState([]);
  const [skills, setSkills] = useState([]);
  const [salary, setSalary] = useState([]);
  const [position, setpostion] = useState([]);
  const [jobType, setjobtypr] = useState([]);
  const [experience, setExperience] = useState([]);
  const [selected, setSelected] = useState([]);
  const [company, setcompany] = useState([]);
  console.log(company);
  
  const getcompanydata = async () => {
    try {
      const res = await axios.post(
        "http://localhost:4000/companise/getCompany",
        {},
        { withCredentials: true }
      );
      setcompany(res.data.companay);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(jobhai){
setSalary(jobhai.salary)   
settitle(jobhai.title)
setlocation(jobhai.address)
setExperience(jobhai.experience)
setSkills(jobhai.skills)
setpostion(jobhai.position)   
setdec(jobhai.dec)
setjobtypr(jobhai.jobType)
setSelected(jobhai.company)
    }
    getcompanydata();
    if(selected){
      setcompanyId(selected._id)
    }
  }, [selected]);

  
  const postdata = {
    title,
    companyId,
    address,
    dec,
    skills,
    salary,
    position,
    jobType,
    experience,
  };
  const handelpost = async () => {
  

    // console.log(postdata);
    try {
      const res=await axios.post("http://localhost:4000/jobs/postjob",postdata,{withCredentials:true})
      if (res.status === 200) {
        console.log(res.data);
        console.log("job post seccessfully");
       
        toast.success("Job post seccessfully!", {
          position: "bottom-right",
        });
        back("")
        refres()


      }
    } catch (error) {
      console.log("error", error);
    }
  };


  const handeludate=async()=>{

    try {

      
      const res=await axios.put(`http://localhost:4000/jobs/updatejob/${jobhai._id}`,postdata,{withCredentials:true})
      if(res.status===200){
        // console.log("updating successfull",res.data);
        toast.success("Job Updated seccessfully!", {
          position: "bottom-right",
        });
        back("")
        refres()
      }
    } catch (error) {
      console.log(error);
      
    }
    
  }
  console.log(selected);
  

  return (
    <div className="  flex items-center justify-center">
      {/* <ToastContainer /> */}
      <div className="border shadow-lg mt-5 p-5">
        <div className="flex items-center">
          <div className="text-sm px-3 py-2" onClick={() => back("")}>
            ← Back
          </div>
          <div className="flex items-center justify-center w-5/6">
            <div className="font-black text-xl">Job Posting</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="">
            <p className="font-bold">Company</p>
            <Listbox onChange={setSelected} >
              <div className="relative mt-2">
                <ListboxButton className="relative w-full cursor-default  bg-inherit   border   sm:text-sm/6">
                  <span className="flex items-center">
                    <span className="ml-3 block ">
                      {selected.length == 0 ? (
                        <div>select company</div>
                      ) : (
                        selected.name
                      )}

                    </span>
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                    <i className="ri-expand-up-down-fill"></i>
                  </span>
                </ListboxButton>
                <ListboxOptions
                  transition
                  className="absolute z-10 mt-1 max-h-56 w-full overflow-auto  bg-white py-1 text-base shadow-lg ring-1 ring-black/25 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                >
                  {company ? (
                    company.map((e, index) => (
                      <ListboxOption
                        key={index}
                        value={e}
                        className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                      >
                        <div>{e.name} </div>
                      </ListboxOption>
                    ))
                  ) : (
                    <div className="px-4 py-2">No Company </div>
                  )}
                </ListboxOptions>
              </div>
            </Listbox>
          </div>
          <div>
            <p className="font-bold">Title</p>
            <input
              type="text"
              className="outline-0 px-3 py-2 border mt-2 w-80"
              placeholder=""
              value={title}
              onChange={(n) => settitle(n.target.value)}

              name="title"
            />
          </div>

          
          <div className="mt-4">
            <p className="font-bold">Salary</p>
            <input
              type="number"
              className="outline-0 px-3 py-2 border mt-2 w-80 "
              placeholder=""
              value={salary}
              onChange={(n) => setSalary(n.target.value)}
              name="salary"
            />
          </div>
          <div className="mt-4">
            <p className="font-bold">skills</p>
            <input
              type="text"
              className="outline-0 px-3 py-2 border mt-2 w-80 "
              placeholder=""
              value={skills}
              onChange={(n) => setSkills(n.target.value)}
              name="skills"
            />
          </div>
          <div className="mt-4">
            <p className="font-bold">Position</p>
            <input
              type="number"
              className="outline-0 px-3 py-2 border mt-2 w-80 "
              placeholder=""
              value={position}
              onChange={(n) => setpostion(n.target.value)}
              name="position"
            />
          </div>

          <div className="mt-4">
            <p className="font-bold">Location</p>
            <input
              type="text"
              className="outline-0 px-3 py-2 border mt-2 w-80"
              placeholder=""
              value={address}
              onChange={(n) => setlocation(n.target.value)}
              name="address"
            />
          </div>
          <div className="mt-4">
            <p className="font-bold">Experience</p>
            <input
              type="text"
              className="outline-0 px-3 py-2 border mt-2 w-80"
              placeholder=""
              value={experience}
              onChange={(n) => setExperience(n.target.value)}

              name="experience"
            />
          </div>
          <div className="mt-4">
            <p className="font-bold">Description</p>
            <input
              type="text"
              className="outline-0 px-3 py-2 border mt-2 w-80"
              placeholder=""
              value={dec}
              onChange={(n) => setdec(n.target.value)}
              name="dec"
            />
          </div>
          <div className="mt-4">
            <p className="font-bold">Job Type</p>
            <input
              type="radio"
              className=" mt-2  mx-1"
              placeholder=""
              value={"full Time"}
              onChange={(n) => setjobtypr(n.target.value)}
              name="jobType"
            />
            Full Time
            <input
              type="radio"
              className=" mt-2 ml-2 mr-1"
              placeholder=""
              onChange={(n) => setjobtypr(n.target.value)}
              name="jobType"
              value={"Part Time"}
            />
            Part Time
            <input
              type="radio"
              className=" mt-2 ml-2 mr-1"
              placeholder=""
              value={"Remote"}
              onChange={(n) => setjobtypr(n.target.value)}
              name="jobType"
            />
            Remote
          </div>
        </div>
        <div className="w-full flex  justify-center mt-6">
          {" "}
          {/* <div
            className="py-2 w-4/5 text-center  bg-indigo-800 text-white font-bold"
            onClick={() => handelpost()}
          >
            Post Job
          </div> */}


<Botten name={jobhai?"Update Job":"Post A New Job"} clicks={() => {jobhai? handeludate(): handelpost()}} w={"w-96"}/>

        </div>
            <div className="flex items-center justify-center text-red-600 font-bold text-xs pt-2">
              {company.length===0 && <div>* Please register a company first, before posting ajob </div>}
            </div>
      </div>
    </div>
  );
}

export default Postjob;
