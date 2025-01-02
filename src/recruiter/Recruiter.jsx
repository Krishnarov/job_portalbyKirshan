import React, { useEffect } from "react";
import ReDashboard from "./components/ReDashboard";
import { useNavigate } from "react-router-dom";

function Recruiter() {
  const navegate = useNavigate();
  useEffect(() => {
    const getuser = async () => {
      const user = JSON.parse(sessionStorage.getItem("user"));
      if (!user || !user.usertype === "Recruiter") {
        navegate("/");
        window.location.reload();
      }
      // console.log(user.usertype);
    };

    getuser();
  });
  return (
    <div>

        <ReDashboard />

    </div>
  );
}

export default Recruiter;
