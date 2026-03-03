import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Services = () => {
  let [servicesData,setServicesData]=useState([])
    let handleData=async ()=>{
        let data=await axios.get("http://localhost:3000/services")
        setServicesData(data.data);
        
    }
    useEffect(()=>{
      handleData()

    },[])
    console.log(servicesData);

    
    
    return (
      < >
        <div className=" grid gap-16 p-10 sm:grid-cols-2 lg:grid-cols-3 bg-gray-200">
  {servicesData.map((ele) => {
    const { id, category, name, description, image, price, rating } = ele;

    return (
      <div
        key={id}
        className="bg-gray-300 rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
      >
        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-44 object-cover group-hover:scale-110 transition duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-500 mt-1">{category}</p>

          <p className="text-sm text-gray-600 mt-3 line-clamp-2">
            {description}
          </p>

          {/* Price + Rating */}
          <div className="flex justify-between items-center mt-4">
            <span className="text-lg font-bold text-green-600">
              ₹{price}
            </span>
            <span className="text-yellow-500 font-medium">
              ⭐ {rating}
            </span>
          </div>

          {/* Button */}
          <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    );
  })}
</div>
    </ >
  )
}

export default Services
