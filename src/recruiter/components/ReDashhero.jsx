import React from 'react'
import Dashboard from './dashboard'

import MainDashboard from './MainDashboard';
import ShowJobs from './ShowJobs';

function ReDashhero({activ}) {

    
  return (
    <div>
        {activ==="dashboard" && <MainDashboard/>}
        {activ==="post" && <ShowJobs />}
        {activ==="profile" && <Dashboard/>}


    
    </div>
  )
}

export default ReDashhero
