import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

const Navbar = () => {
  let [bool, setBool] = useState(true)

  let toggle = () => {
    setBool(!bool)
  }
  return (
    < >
      <nav className='dark:bg-gray-900'>
        <div id="navbar" className='flex justify-between p-7 pt-3 pb-3 md:justify-around p-3.5 bg-gray-900 text-white rounded-4xl' >
          <div id="logo" className={bool?'block':'hidden'}>
            <h1 className='text-2xl text-blue-500'>Worker<span className='text-red-500'>Go</span></h1>
          </div>
          <div className="md:hidden">
            <button onClick={toggle}>{bool ? <MenuIcon /> : <div className='relative sm:left-75 left-65'><ClearIcon /></div>}</button>
            {bool ? '' :

              <div id="links" className='flex flex-col'>
                <div id="logo" className='relative bottom-5'>
                  <h1 className='text-2xl text-blue-500'>Worker<span className='text-red-500'>Go</span></h1>
                </div>
                <div className="">
                  <ul className='flex flex-col  justify-around gap-5'>
                    <li className='hover:bg-blue-500 rounded-xl p-1'><NavLink className=''>Home</NavLink></li>
                    <li className='hover:bg-blue-500 rounded-xl p-1'><NavLink>Services</NavLink></li>
                    <li className='hover:bg-blue-500 rounded-xl p-1'><NavLink>Login</NavLink></li>
                    <li className='hover:bg-blue-500 rounded-xl p-1'><NavLink>Become a Worker</NavLink></li>
                  </ul>
                </div>
              </div>
            }
          </div>

          <div id="links" className='hidden md:block'>
            <ul className='flex justify-around gap-5'>
              <li className='hover:bg-blue-500 rounded-xl p-1'><NavLink className=''>Home</NavLink></li>
              <li className='hover:bg-blue-500 rounded-xl p-1'><NavLink>Services</NavLink></li>
              <li className='hover:bg-blue-500 rounded-xl p-1'><NavLink>Login</NavLink></li>
              <li className='hover:bg-blue-500 rounded-xl p-1'><NavLink>Become a Worker</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>

    </ >
  )
}

export default Navbar
