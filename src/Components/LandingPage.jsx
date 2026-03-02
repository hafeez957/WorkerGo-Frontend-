import React from 'react'
import Navbar from './Navbar'
import SearchIcon from '@mui/icons-material/Search';
import hero from '../assets/images/hero.webp'

const LandingPage = () => {
    return (
        <>
            <Navbar />
             
            <section
                className="relative bg-cover bg-center h-screen flex items-center justify-center"
                  >
                 
                <div className="absolute inset-0 bg-gray-900 bg-opacity-60 w-full bg-cover bg-center" style={{ backgroundImage: `url(${hero})` }}>

                </div>

                 
                <div className="relative text-center text-gray-800 px-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Book Trusted Workers Near You
                    </h1>
                    <p className="text-lg md:text-xl mb-8">
                        Electricians, Plumbers, Carpenters & More
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition">
                        Get Started
                    </button>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Popular Services</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">


                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
                            <div className="text-5xl mb-4">⚡</div>
                            <h3 className="text-xl font-semibold mb-2">Electrician</h3>
                            <p className="text-gray-500 text-sm">Professional electrical repair and installation services.</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
                            <div className="text-5xl mb-4">🚰</div>
                            <h3 className="text-xl font-semibold mb-2">Plumber</h3>
                            <p className="text-gray-500 text-sm">Fix leaks, pipe issues, and bathroom fittings.</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
                            <div className="text-5xl mb-4">🪚</div>
                            <h3 className="text-xl font-semibold mb-2">Carpenter</h3>
                            <p className="text-gray-500 text-sm">Furniture repair, woodwork, and installations.</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
                            <div className="text-5xl mb-4">🧹</div>
                            <h3 className="text-xl font-semibold mb-2">Cleaner</h3>
                            <p className="text-gray-500 text-sm">Home and office cleaning services.</p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">


                        <div>
                            <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                                1
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Search</h3>
                            <p className="text-gray-500">Find trusted professionals near your location.</p>
                        </div>


                        <div>
                            <div className="w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                                2
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Book</h3>
                            <p className="text-gray-500">Select time and confirm your booking instantly.</p>
                        </div>


                        <div>
                            <div className="w-16 h-16 mx-auto bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                                3
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Get Service</h3>
                            <p className="text-gray-500">Sit back and relax while experts handle your work.</p>
                        </div>

                    </div>
                </div>
            </section>

            <footer className="bg-gray-900 text-gray-300 py-12">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">


                        <div>
                            <h3 className="text-white text-xl font-semibold mb-4">WorkerGo</h3>
                            <p className="text-sm text-gray-400">
                                Book trusted workers near you for all home and office services.
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
                                <a href="#" class="hover:text-white transition">Facebook</a>
                                <a href="#" class="hover:text-white transition">Instagram</a>
                                <a href="#" class="hover:text-white transition">Twitter</a>
                                <a href="#" class="hover:text-white transition">LinkedIn</a>
                            </div>
                        </div>

                    </div>


                    <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
                        © 2026 WorkerGo. All rights reserved.
                    </div>

                </div>
            </footer>
        </>
    )
}

export default LandingPage
