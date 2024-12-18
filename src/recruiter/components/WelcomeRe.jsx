import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Create from "./create";

const WelcomeRe = () => {
    const [reg, setreg] = useState(false);
    const navigate = useNavigate();
    // const heandalregister = () => {
    //   // navigate("/recruiter/create")
    //   setreg(true);
    // };
  
    return (
      <div>
        {reg ? (
          <Create />
        ) : (
          <div className="w-full h-screen flex items-center justify-center">
            <div className="px-20 border-2 py-20 -mt-24 shadow-lg text-center">
              <h1 className="text-2xl font-black">Welcome mr. krishna kumar </h1>
              <h1 className="text-2xl font-semibold mt-5">
                Register your company
              </h1>
  
              <div className="flex items-center justify-center mt-12">
                <button
                  className="px-4 py-2 border bg-indigo-500 font-bold text-white "
                  onClick={() =>setreg(true)}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
export default WelcomeRe;