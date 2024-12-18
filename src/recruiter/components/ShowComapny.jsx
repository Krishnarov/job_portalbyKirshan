import React, { useEffect, useState } from "react";
import axios from "axios";
import UpdateCompany from "./UpdateCompany";
import { toast, ToastContainer } from "react-toastify";

function ShowComapny({ clickActive, compId }) {
  const [companise, setcompanises] = useState([]);
  const [curentId, setcurentid] = useState("");

  const [search, setsearch] = useState("");

  const fetchCompanies = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/companise/getCompany",
        {},
        {
          withCredentials: true,
        }
      );
      setcompanises(response.data.companay);

      
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };
  const handeledit = (e) => {
    console.log(e);
    // setcurentid(e)
    clickActive("updateCompany");
    compId(e);
  };

  const handeldelete=async(e)=>{
// console.log(e);
const res=await axios.delete(`http://localhost:4000/companise/deletecompany/${e}`,   {
  withCredentials: true,
})
// console.log(res);

if(res.status===200){
  fetchCompanies();
  toast.success("Successfully company deleted!", {
    position: "bottom-right",
  });
}




  }
  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <div className="">
         <ToastContainer />
      <div className=" px-20 ">
        <div className="flex justify-between items-center py-5">
          <div>
            <input
              type="text"
              name="search"
              className="px-3 py-2 outline-0 border w-96"
              placeholder="Filter By name"
              onChange={(s) => setsearch(s.target.value)}
            />
          </div>
          <div
            className=" font-bold bg-indigo-800 text-white px-3 py-2"
            onClick={() => clickActive("createCompani")}
          >
            New Company
          </div>
        </div>
        {/* {clickActive === "updateCompany" && <UpdateCompany  compId={curentId}/>} */}

        <div>
          <table border="2px" width="100%">
            <thead>
            <tr className=" bg-gray-100">
              <th className="py-2"> Logo</th>
              <th className="py-2">Name</th>
              <th className="py-2">Date</th>
              <th className="py-2">Action</th>
            </tr>
            </thead>
            <tbody>
            {companise.map((c, index) => (
              <tr key={index} className="border-b">
                <td className="py-2">
                  {!c.logo ? (
                    <img
                      src="./images/digi.jpeg"
                      className="w-16 h-16 rounded-full"
                      alt=""
                    />
                  ) : (
                    <img src={`http://localhost:4000/public/${c.logo}`} className="w-16 h-16 rounded-full" alt="" />
                  )}
                </td>
                <td className="py-2 text-center">{c.name}</td>
                <td className="py-2 text-center">{c.createdAt}</td>
                <td className="py-2">
                  <div className="dropdown">
                    <i className="ri-more-fill text-3xl " tabIndex={0}></i>
                    <ul
                      tabIndex={0}
                      className=" dropdown-content dropdown-right w-32 bg-base-100 z-[1]  p-2 shadow"
                    >
                      <li
                        className="hover:bg-base-300 py-1 "
                        onClick={() => handeledit(c._id)}
                      >
                        <i className="ri-edit-2-fill px-2  "></i>Edit{" "}
                      </li>
                      {/* <li className="hover:bg-base-300 py-1 rounded-lg"><i className="ri-edit-2-fill px-2  "></i>Edit </li> */}
                      <li className="hover:bg-base-300 py-1  text-red-400" onClick={()=>handeldelete(c._id)}>
                        <i className="ri-delete-bin-6-line px-2"></i>Delete{" "}
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
            </tbody>
          </table>

          <p className="text-xs text-slate-500 text-center mt-10">
            A list of your recent Register companise
          </p>
        </div>
      </div>
    </div>
  );
}

export default ShowComapny;
