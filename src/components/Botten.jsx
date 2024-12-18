import React from "react";

function Botten(props) {
  return (


  <button onClick={props.clicks} className={`bg-indigo-800 hover:bg-indigo-700 cursor-pointer px-3 py-2 text-white font-bold ${props.w}`}>{props.name}</button>


  );
}

export default Botten;
