import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Companies from '../components/Companies';
import Category from '../components/Category';
import Poster from '../components/Poster';
import FeaturedJobs from '../components/FeaturedJobs ';
import Latestjob from '../components/Latestjob';
import Footer from '../components/Footer';
import axios from 'axios';
import constantapi from "../components/ConstentApi.jsx"

function Home() {

  const [jobsdatas,setjobdatas]=useState([])

  
  useEffect(()=>{
    const getjobs=async () => {
      try {
        const res=await axios.get(`${constantapi()}/jobs/getalljob`,{}, { withCredentials: true })
        setjobdatas(res.data?.jobs)

      } catch (error) {
        console.log(error);
        
      }
    }
    getjobs()

    // const getcompanise=async ()=>{
    //   try {
    //     const res=await axios.get(`${constantapi()}/companise/getCompany`,{}, { withCredentials: true });
    //     // setCompnise(res?.data)
    //     // console.log('res.data', res.data)
        
    //   } catch (error) {
    //     console.log('companise data fatchig error', error)
    //   }
    // }
    // getcompanise()



    
    },[])

  return (
    <div>
      <NavBar />
      <Hero loc={jobsdatas}/>
      {/* <Companies  comp={companies}/> */}
      <Category />
      <Poster/>
      <FeaturedJobs jobs={jobsdatas}/>
        
      <Latestjob jobs={jobsdatas}/>
      <Footer />
    </div>
  )
}

export default Home;
