"use client"
import React from 'react'
import { useEffect } from 'react'

function Error({error,reset}) {
    useEffect(()=>{
      console.log(error);
    },[error]);
  return (
    <div className='text-amber-500 text-center mt-12 p-4'>
        <h1>Something went wrong!</h1>
        <button onClick={()=>reset()}>Try Again!</button>
    </div>
  )
}

export default Error