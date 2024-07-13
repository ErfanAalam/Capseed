import React from 'react'
import '../App.css'

function Homebanner() {
  return (
    <div className='homebanner flex flex-col items-center justify-center text-white font-poppins'>
      <h1 className='text-[50px] tracking-[28px]'>CAPSEED</h1>
      <p className='text-[20px] leading-[15px] tracking-[2px] mb-10'>PRIVATE LENDING FOR BUSINESS</p>
      <button className= 'p-2 w-[200px] text-[20px] items-center rounded-lg bg-[#1D332D]'>LEARN MORE</button>
    </div>
  )
}

export default Homebanner
