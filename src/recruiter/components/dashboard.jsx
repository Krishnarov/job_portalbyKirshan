import React, { useEffect, useState } from "react";
import Postjob from "./Postjob";
import axios from "axios";
import Swal from "sweetalert2";
import Editjob from "./Editjob";

function Dashboard() {
  const [job, setjob] = useState([]);
  const [curentjobid,setcurentjobid]=useState(null)
  useEffect(() => {
    const getjobdata = async () => {
      const res = await axios.get("http://localhost:4000/jobs/");
      if (res.status === 200) {
        // console.log(res.data);
         setjob(res.data);
      }
    };
    getjobdata();

    
  }, []);

  const heandaldelete = async (jobid) => {
    if (!jobid) {
      console.log("job id is required to detete ");

      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axios.delete(
          `http://localhost:4000/jobs/deletejob/${jobid}`
        );

        if (res.status === 200) {
          console.log("job deleted seccessfull");
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        }
      }
    });
  };




  return (
    <div className="px-4">
     
      <Postjob />

      <div className="mt-4">
        <table className="table-auto border border border-gray-300 w-full">
          <tr className="bg-gray-100">
            <th className="border py-2 px-2">title</th>
            <th className="border py-2 px-2">company</th>
            <th className="border py-2 px-2">address</th>
            <th className="border py-2 px-2">dec</th>
            <th className="border py-2 px-2">Skills</th>
            <th className="border py-2 px-2">salary</th>
            <th>-</th>
          </tr>
          {job.map((e, index) => (
            <tr key={index}>
              <td className="border py-2 px-2">{e.title}</td>
              <td className="border py-2 px-2">{e.company}</td>
              <td className="border py-2 px-2">{e.address}</td>
              <td className="border py-2 px-2">{e.dec}</td>
              <td className="border py-2 px-2">{e.skills}</td>
              <td className="border py-2 px-2">{e.salary}</td>
              <td className="flex  items-center justify-around">
                <div className="px-3 py-2 border rounded-lg font-bold"
                onClick={() => {setcurentjobid(e._id); document.getElementById("my_modal_6").showModal();}}
                >
                  Edit
                </div>
                <Editjob jobid={curentjobid}/>
                <div
                  className="px-3 py-2 border rounded-lg text-red-400 font-bold"
                  onClick={() => heandaldelete(e._id)}
                >
                  Delete
                </div>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
