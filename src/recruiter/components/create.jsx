import axios from "axios";
import React, {useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import UpdateCompany from "./UpdateCompany";


function Create({clickActive}) {
  const [name, setname] = useState("");

  const [curentId,setcurentid]=useState("")



  const handalcantinue = async () => {
    try {
      if (!name) {
        return console.log("all filde are requiard");
      }
      const res = await axios.post(
        "http://localhost:4000/companise/regcompanise",
        { name },{ withCredentials: true }
      );

      
      if (res.status === 200) {

        setcurentid(res.data.newcompani._id)
        toast.success("Success Notification!", {
          position: "bottom-right",
        });


      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full">
      <ToastContainer />
      {curentId ? 
       (<UpdateCompany clickActive={clickActive} compId={curentId}  />) :(

     
        <div className="px-24 py-20">
          <h1 className="text-3xl font-black ">Your Company name</h1>
          <p className="font-serif mt-5">
            What would you like to give your Company name ? You can change this
            later.
          </p>
          <p className="font-bold mt-12">Company Name</p>
          <div className="border-2 border-black w-2/3 mt-2">
            <input
              onChange={(e) => setname(e.target.value)}
              type="text"
              name="name"
              placeholder="Digicoders"
              className="outline-0 w-full px-2 py-2"
            />
          </div>
          <div className="flex items-center gap-4 mt-5 ">
            <div>
              <button className="px-3 py-2 border border-indigo-800  hover:text-white hover:bg-indigo-800"  onClick={() =>clickActive("companyHai")}>
                Cancal
              </button>
            </div>
            <div>
              <button
          onClick={() => {handalcantinue()}}
                className="px-3 py-2 border border-indigo-800 hover:text-indigo-800 hover:bg-white   text-white bg-indigo-800"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
     )}
    </div>
  );
}

export default Create;
