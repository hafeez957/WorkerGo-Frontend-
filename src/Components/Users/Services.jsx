import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Services = () => {
  let [servicesData,setServicesData]=useState({})
    let handleData=async ()=>{
        let data=await axios.get("http://localhost:4000/services")
        setServicesData(data.data);
        
    }
    useEffect(()=>{
      handleData()

    },[])
    console.log(servicesData);
    

  return (
    < >
       <h1>Services</h1>
    </ >
  )
}

export default Services
