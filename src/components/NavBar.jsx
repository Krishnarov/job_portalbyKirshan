import React, { useEffect, useState } from "react";
import Login from "./Login";
import { Link } from "react-router-dom";
import Menu from "./menu";

function NavBar() {
  const [sticky, setSticky] = useState(false);
  const [menu,setmenu]=useState(false)
  useEffect(() => {
    const heandlscroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
        setmenu(false)
      } else {
        setSticky(false);
        setmenu(false)

      }
    };
    window.addEventListener("scroll", heandlscroll);
    return () => {
      window.addEventListener("scroll", heandlscroll);
    };


  }, []);

function menuhandel() {
  if(menu===true){
    setmenu(false)

  }else{
    setmenu(true)
  }
}
  return (
    <div
      className={`py-2 md:px-28 px-4 bg-slate-100 fixed top-0 left-0 right-0 z-50 ${
        sticky ? " shadow-md duration-300 transition-all ease-in-out" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="px-4 py-1 bg-indigo-600 text-white rounded-full font-black text-xl">
            j
          </div>
          <div className="font-black text-2xl ml-3">JOB_YAHNA</div>

          {/* <div className="md:flex items-center gap-4 ml-8 md:block hidden">
            <div>
              <a href="">Find Jobs</a>
            </div>
            <div>
              <a href="">Browse Companies</a>
            </div>
          </div> */}
        </div>
        <div className="md:flex items-center gap-4 hidden md:block">
          <button
            className="bg-slate-100 text-indigo-600 hover:bg-indigo-600 hover:text-white border-2 border-indigo-600 "
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Login
          </button>
          <Login />
            <Link  to="/signup">
          <button className="bg-indigo-600 hover:text-indigo-600  text-white hover:bg-transparent border-2 border-indigo-600 ">
            Signup
          </button>
            </Link>
        </div>
        <div className="border rounded-full bg-white flex items-center justify-center w-10 h-10 md:hidden block" onClick={()=>menuhandel() }>
          {menu===false? <i className="ri-menu-fill"></i>:"X"}

        </div>
      </div>
      <div className="md:hidden block text-right absolute right-5  ">
          {menu===true? <Menu />:null}
      </div>

      
    </div>
  );
}

export default NavBar;
