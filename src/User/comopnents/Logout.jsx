import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Cookies from 'js-cookie';

function Logout() {
  const navigate = useNavigate();
  const logouthandel =async () => {

    
    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be Logout",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout",
    }).then(async(result) => {
      if (result.isConfirmed) {
        navigate("/");
        sessionStorage.clear();
        Cookies.remove("token");
        const res=await axios.post("http://localhost:4000/user/logout")
        console.log(res);
        Swal.fire({
          title: "Logout!",
          text: "Your file has been deleted.",
          icon: "success",
            });
            // setTimeout(()=>{
    
            //     window.location.reload();
            // },1000)
        }
    })
  };

  return (
    <div>
      <button
        className="bg-indigo-800 text-white font-bold"
        onClick={logouthandel}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
