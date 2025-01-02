import React, { useEffect, useState } from "react";
import Dashbord from "./comopnents/Dashbord";
import axios from "axios";
import constantapi from "../components/ConstentApi.jsx";
function User() {
  const [jobsdata, setjobdatas] = useState({});
  const token = sessionStorage.getItem("token");
  useEffect(() => {
    const getjobs = async () => {
      try {
        const res = await axios.get(`${constantapi()}/jobs/getalljob`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        setjobdatas(res?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getjobs();
  }, []);

  return (
    <div>
      <Dashbord jobs={jobsdata} />
    </div>
  );
}

export default User;
