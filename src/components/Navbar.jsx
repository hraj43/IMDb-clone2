import React from 'react'
import NavbarItem from './NavbarItem'

function Navbar() {
  return (
    <div className='flex justify-center my-4 py-3 space-x-4 bg-gray-500 '>
        <NavbarItem title="Trending" param="fetchTrending"/>
        <NavbarItem title="Top Rated" param="fetchTopRated"/>

    </div>
  )
}

export default Navbar