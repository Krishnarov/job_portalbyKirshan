import React from 'react'
import Dashboard from './dashboard'
import Profile from './Profile';
import MainDashboard from './MainDashboard';
import ShowJobs from './ShowJobs';

function ReDashhero({activ}) {
// console.log(activ);
    
  return (
    <div>
        {activ==="dashboard" && <MainDashboard/>}
        {activ==="post" && <ShowJobs />}
        {activ==="profile" && <Dashboard/>}


    
    </div>
  )
}

export default ReDashhero
