import React from 'react'
import Link from 'next/link'

function MenuItem({title,address,Icon}) {
  return (
    <div>
        <Link href={address}>
            <Icon className="w-8 h-8 mt-4 ml-8 s-x-2 lg:hidden hover:bg-yellow-500"/>
            <h1 className=' hidden mt-4 font-bold text-lg sm:block  hover:text-yellow-500'>{title}</h1>
        </Link>

    </div>
  )
}

export default MenuItem