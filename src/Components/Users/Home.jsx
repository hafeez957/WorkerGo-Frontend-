import React from "react";
import { useNavigate } from "react-router-dom";

let Home=()=>{
    let navigate=useNavigate()
    let handleService=()=>{
        navigate('/userportal/services')
    }
  return (
    <>
    <div className="bg-gray-50 min-h-screen">

      <section
        className="h-screen bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center text-white px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Book Trusted Workers Near You
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Electricians, Plumbers, Carpenters & More
          </p>
          <button onClick={handleService}  className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-semibold transition">
            Explore Services
          </button>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: "⚡", title: "Electrician" },
              { icon: "🚰", title: "Plumber" },
              { icon: "🪚", title: "Carpenter" },
              { icon: "🧹", title: "Cleaner" },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { step: "1", title: "Search" },
              { step: "2", title: "Book" },
              { step: "3", title: "Get Service" },
            ].map((item, index) => (
              <div key={index}>
                <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">WorkerGo</h3>
            <p className="text-sm text-gray-400">
              Book trusted professionals for your home services easily.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: support@workergo.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Location: India</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">Facebook</a>
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-10">
          © 2026 WorkerGo. All rights reserved.
        </div>
      </footer>
    </div>
    </>
  );
}

export default Home