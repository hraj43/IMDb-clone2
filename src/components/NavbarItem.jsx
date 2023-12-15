"use client"
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

function NavbarItem({title,param}) {
    const searchParams=useSearchParams();
    console.log(searchParams);
    const genre=searchParams.get("genre");
    console.log(genre);
  return (
    <div className='text-lg hover:text-amber-600'>
        <Link className={`font-semibold ${genre&&genre===param && "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"}`} href= {`\?genre=${param}`}>
        {title}
        </Link>
    </div>
  )
}

export default NavbarItem