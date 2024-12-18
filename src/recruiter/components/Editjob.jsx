import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

function Editjob({jobid}) {
    const [title,settitle]=useState('')
    const [company,setcompany]=useState('')
    const [address,setAddress]=useState('')
    const [dec,setdec]=useState('')
    const [skills,setSkills]=useState([])
    const [salary,setSalary]=useState('')

    // console.log(jobid);
    const handelpost=async()=>{

    
       const postdata={
        title,
        company,
        address,
        dec,
        skills,
        salary,
       }
    //    console.log(postdata);
       try {
        const res=await axios.put(`http://localhost:4000/jobs/updatejob/${jobid}`,postdata)
        if(res.status===200){
            console.log(res);
            console.log("job post seccessfully");
            Swal.fire({
              title: "Done",
              text: `Job post seccessfully`,
              icon: "success",
            });
            document.getElementById("my_modal_6").close();
            setTimeout(() => {
              window.location.reload()
            },1500);
            
            
        }


       } catch (error) {
            console.log('error', error)
       }




   }


useEffect(()=>{

    const featchjobdata=async()=>{
try {
const featchjob=await axios.post(`http://localhost:4000/jobs/getjob/${jobid}`)    
 console.log(featchjob.data.joddata);
settitle(featchjob.data.joddata.title)
setcompany(featchjob.data.joddata.company)
setAddress(featchjob.data.joddata.address)
setdec(featchjob.data.joddata.dec)
setSkills(featchjob.data.joddata.skills)
setSalary(featchjob.data.joddata.salary)


} catch (error) {
    console.log("data featching error");
}


    }
    if(jobid){

        featchjobdata()
    }


},[jobid])







  return (
    <div>
      <dialog id="my_modal_6" className="modal">
        <div className="modal-box rounded-none">
          <form >
            <div
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_6").close()}
            >
              ✕
            </div>

            <h2 className="font-bold text-2xl ">Edit Posted Job</h2>
            <div className="mt-4">
            <span>Job title</span>
                <br />
                <label className="input input-bordered flex items-center gap-2">

                  <input
                    type="text"
                    name="title"
                    required
                    value={title}
                    onChange={(n) => settitle(n.target.value)}
                    className="grow dark:text-black"
                    placeholder="Enter Job title is hear"
                  />
                </label>
            </div>
            <div>
            <span>company</span>
                <br />
                <label className="input input-bordered flex items-center gap-2">

                  <input
                    type="text"
                    name="company"
                    required
                    value={company}
                    onChange={(n) => setcompany(n.target.value)}
                    className="grow dark:text-black"
                    placeholder="Enter company name is hear"
                  />
                </label>
            </div>
            <div>
            <span>Address</span>
                <br />
                <label className="input input-bordered flex items-center gap-2">

                  <input
                    type="text"
                    name="address"
                    required
                    value={address}
                    onChange={(n) => setAddress(n.target.value)}
                    className="grow dark:text-black"
                    placeholder="Enter company address"
                  />
                </label>
            </div>
            <div>
            <span>dec</span>
                <br />
                <label className="input input-bordered flex items-center gap-2">

                  <input
                    type="text"
                    name="dec"
                    required
                    value={dec}
                    onChange={(n) => setdec(n.target.value)}
                    className="grow dark:text-black"
                    placeholder="Enter decraption"
                  />
                </label>
            </div>
            <div>
            <span>Skills</span>
                <br />
                <label className="input input-bordered flex items-center gap-2">

                  <input
                    type="text"
                    name="skill"
                    required
                    value={skills}
                    onChange={(n) => setSkills(n.target.value)}
                    className="grow dark:text-black"
                    placeholder="Enter skill"
                  />
                </label>
            </div>
            <div>
            <span>Salary</span>
                <br />
                <label className="input input-bordered flex items-center gap-2">

                  <input
                    type="number"
                    name="salary"
                    required
                    value={salary}
                    onChange={(n) => setSalary(n.target.value)}
                    className="grow dark:text-black"
                    placeholder="Enter salary amount"
                  />
                </label>
            </div>
            <div className="mt-5 flex justify-center">
            <div onClick={()=>handelpost()} type="submit" className="w-80 py-2 bg-green-500 text-white text-center font-bold">Post</div>
            </div>
                
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Editjob;
