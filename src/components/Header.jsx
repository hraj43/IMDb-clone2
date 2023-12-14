import React from 'react'
import MenuItem from './MenuItem'
import { FaHome } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";
import DarkModeSwitch from './DarkModeSwitch';
import Link from 'next/link';

function Header() {
  return (
    <div className='flex justify-between items-center'>
    <div className='flex lg:ml-28 gap-4'>
        <MenuItem title="HOME" address="/" Icon={FaHome}/>
        <MenuItem title="ABOUT" address="/about" Icon={BsInfoCircleFill}/>
    </div>
    <div className=' mr-6 lg:mr-20 mt-4 flex items-center space-x-4 '>
      <DarkModeSwitch/>
      <Link href="/">
         <h1><span className="bg-orange-400 font-bold text-2xl mr-1 rounded-md px-2">IMDb</span><span className='text-xl '>Clone</span></h1>
      </Link>
    </div>
    </div>
  )
}

export default Header