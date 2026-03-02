import { Password } from '@mui/icons-material';
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';

const UserLogin = () => {

    let navigate = useNavigate()

    let [data,setData]=useState({email:'',password:''})

    let handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    console.log(data);

    let handleSubmit=(e)=>{
        e.preventDefault()
        if(data.email==='syedhafeez957@gmail.com' && data.password==1234){
            alert("Successfully loged in")
            navigate('/userportal')
        }else{
            alert("Invalid credentials, Please try again")
        }
    }
    
    return (
        < >
        <Navbar/>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
                <div className="bg-white shadow-2xl rounded-2xl flex w-full max-w-4xl overflow-hidden">

                    {/* Left Side - Image Section */}
                    <div className="hidden md:flex w-1/2 bg-blue-600 items-center justify-center p-10">
                        <div className="text-white text-center">
                            <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
                            <p className="text-blue-100">
                                Login to book trusted workers for your home services.
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Form Section */}
                    <div className="w-full md:w-1/2 p-10">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                            User Login
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-5">

                            {/* Email */}
                            <div>
                                <label className="block text-gray-600 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={data.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your email"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-gray-600 mb-2">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    value={data.password}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your password"
                                />
                            </div>

                            {/* Forgot Password */}
                            <div className="text-right">
                                <a
                                    href="#"
                                    className="text-sm text-blue-600 hover:underline"
                                >
                                    Forgot Password?
                                </a>
                            </div>

                            {/* Login Button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                            >
                                Login
                            </button>

                            {/* Register Link */}
                            <p className="text-center text-sm text-gray-600">
                                Don't have an account?{" "}
                                <a
                                    href="/register"
                                    className="text-blue-600 font-medium hover:underline"
                                >
                                    Register
                                </a>
                            </p>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default UserLogin
