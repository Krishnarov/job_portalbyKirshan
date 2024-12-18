import React, { useEffect, useState } from "react";
import Dashbord from "./comopnents/Dashbord";
import axios from "axios";
import constantapi from "../components/ConstentApi.jsx"
function User() {
  const [jobsdata, setjobdatas] = useState({});
  
  useEffect(() => {
    const getjobs = async () => {
      try {
        const res = await axios.get(`${constantapi()}/jobs/getalljob`,{},{withCredentials: true});
        console.log(res.data);
        
        setjobdatas(res?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getjobs();
  }, []);
  console.log(jobsdata);
  return (
    <div>
      <Dashbord  jobs={jobsdata}/>

    </div>
  );
}

export default User;
