import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Signup from './components/Signup';
import Dashbord from './User/comopnents/Dashbord';
import Users from "./User/Users"
import ApplideJobs from './User/comopnents/applideJobs';
import Joblisting from './User/comopnents/Joblisting';
import Recruiter from './recruiter/Recruiter'
import Create from './recruiter/components/create';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {


  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home />}/>
  {/* <Route path='/signup' element={<Signup />}/> */}
  {/* <Route path='/users/dashbord' element={<Users />}/> */}
  {/* <Route path='/users/dashboard/applidjob' element={<ApplideJobs />}/> */}
  {/* <Route path='/users/joblisting' element={<Joblisting />}/> */}
{/* <Route path='/recruiter' element={<Recruiter/>}/> */}
{/* <Route path='/recruiter/create' element={<Create/>}/> */}
</Routes>
</BrowserRouter>
  
  )
}

export default App
