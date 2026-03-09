import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const UserRegister = () => {

    const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "user",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:8081/auth/register",formData)
    console.log(formData);
  };

  return (
    < >
       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      <div className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl rounded-3xl w-full max-w-md p-10 text-white">
        <h2 className="text-3xl font-bold text-center mb-8">Create Account</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Enter your password"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              <option value="user" className="text-black">User</option>
              <option value="worker" className="text-black">Worker</option>
              <option value="admin" className="text-black">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-white text-purple-600 font-semibold hover:bg-gray-100 transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <Link to={'/userlogin'} className="font-semibold underline">Login</Link>
        </p>
      </div>
    </div>
    </ >
  )
}

export default UserRegister
