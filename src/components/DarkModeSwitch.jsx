"use client"
import React from 'react'
import {MdLightMode} from "react-icons/md";
import { BsFillMoonFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';
import { useEffect ,useState} from 'react';



function DarkModeSwitch() {
  const [mounted, setMounted] = useState(false)
  const {SystemTheme,theme,setTheme}=useTheme();
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme=theme=="system"? SystemTheme:theme;

  
  return (
   <div className='flex items-center space-x-4'>
     {mounted&&currentTheme==="dark"?  <MdLightMode className= ' h-6 w-6 hover:text-orange-500' onClick={()=>setTheme("light")}/>:
   <BsFillMoonFill className=' h-5 w-5 hover:text-orange-500' onClick={()=>setTheme("dark")}/> }
    </div>
  
  )
}

export default DarkModeSwitch