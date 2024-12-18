import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
// axios.defaults.withCredentials = true;
function Login() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const submitData = async (e) => {
    e.preventDefault();
    const userinfo = { email, password };
    // console.log(data);

    try {
      
      const res=await axios.post("http://localhost:4000/user/login",userinfo, { withCredentials: true })
      // console.log(res);
      if(res.status===201){
        // console.log(res.data);
        document.getElementById("my_modal_3").close();

        if(res.data.user.usertype==="client"){
          Swal.fire({
            title: "Login successfull",
            text: `Wellcome mr.${res.data.user.name}`,
            icon: "success",
          });
          sessionStorage.setItem("user",JSON.stringify(res.data.user))
          navigate("/users/dashbord");
          
        }else if(res.data.user.usertype==="Recruiter"){
          Swal.fire({
            title: "Login successfull",
            text: `Wellcome mr.${res.data.user.name}`,
            icon: "success",
          });
          sessionStorage.setItem("user",JSON.stringify(res.data.user))
          return navigate("/recruiter");
        }else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "creindatiol error",
          
        });
        }



      }
      
    } catch (error) {
      console.log(error);
      document.getElementById("my_modal_3").close();
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error,
      })

    }
    
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box rounded-none">
          <form onSubmit={submitData}>
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>

            <h2 className="font-bold text-2xl ">Login</h2>

            <label className="input input-bordered flex items-center gap-2 mt-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="email"
                required
                className="grow"
                placeholder="Username"
                name="email"
                onChange={(u) => setemail(u.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 mt-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                required
                className="grow"
                name="password"
                placeholder="Password"
                onChange={(p) => setPassword(p.target.value)}
              />
            </label>
             {/* <div>
                <div>Recruiter <input type="radio" name="usertype" value="Recruiter" onChange={(e) => setusertype(e.target.value)} /> Client <input type="radio" name="usertype" id="client" value="client" onChange={(e) => setusertype(e.target.value)} /> </div>
              </div> */}
            <div className="flex justify-around  mt-8">
              <button
                type="submit"
                className="bg-indigo-600 hover:text-indigo-600  text-white hover:bg-transparent border-2 border-indigo-600 "
              >
                Login
              </button>
              <p>
                create an account{" "}
                <Link
                  to="/signup"
                  className="text-blue-500 underline cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
