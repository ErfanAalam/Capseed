import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Whychoose() {
  return (
    <div className='flex gap-20'>

      <div className='p-14 flex flex-col gap-16 bg-[#f2f2f2] w-[40%] pt-32 pl-32 pb-24'>
        <h3 className='text-[24px]'>WHY CHOOSE CAPSEED</h3>
        <p className=' xl:text-[24px] 2xl:text-[30px] pr-0 flex flex-col font-playfair leading-[55px]'><span>Choose Capseed for</span> <span>tailored, flexible lending</span> <span>solutions with exceptional</span> <span>customer service, quick</span> <span>approvals, and a seamless,</span> <span>hassle-free process</span></p>
        <button className='p-6 w-[240px] text-[28px] items-center text-gray-800 rounded-md bg-[#B3BAAA]'>MORE INFO</button>
      </div>

      <div className='w-[70%] pr-10'>
        <div className='flex gap-16 justify-center pt-28 '>

          <div className='w-[250px] flex flex-col gap-4'>
            <p className='text-[50px] h-[70px] w-[70px] rounded-md text-white  text-center bg-[#B3BAAA] font-playfair'>F</p>
            <h3 className='text-[40px] flex flex-col mb-12 font-playfair leading-[50px]'><span>Fexible</span> <span>Financing</span></h3>
            <p className='text-[16px] font-poppins text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae ea sed commodi autem voluptates mollitia assumenda! Quasi, a numquam. Perspiciatis, sequi culpa ipsum corporis ut aperiam et. Fugiat, dolor itaque.</p>
          </div>

          <div className='w-[250px] flex flex-col gap-4'>
            <p className='text-[50px] h-[70px] w-[70px] rounded-md text-white text-center font-playfair bg-[#B3BAAA]'>$</p>
            <h3 className='text-[40px] flex flex-col mb-12 font-playfair leading-[50px]'><span>Quick</span> <span>Loans</span></h3>
            <p className='text-[16px] text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae ea sed commodi autem voluptates mollitia assumenda! Quasi, a numquam. Perspiciatis, sequi culpa ipsum corporis ut aperiam et. Fugiat, dolor itaque.</p>
          </div>

          <div className='w-[280px] flex flex-col gap-4'>
            <p className='text-[50px] h-[70px] w-[70px] font-playfair rounded-md text-white text-center bg-[#B3BAAA]'>P</p>
            <h3 className='text-[40px] flex flex-col mb-12 font-playfair leading-[50px]'><span>Transparent</span> <span>Process</span></h3>
            <p className='text-[16px] text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae ea sed commodi autem voluptates mollitia assumenda! Quasi, a numquam. Perspiciatis, sequi culpa ipsum corporis ut aperiam et. Fugiat, dolor itaque.</p>
          </div>
        </div>

        <div className='px-0 flex flex-col items-end gap-4 my-10'>
          <span><ArrowForwardIcon fontSize='large' /></span>
          <span className='border-2 border-gray-400 h-[100%] w-[100%] relative'>
            <span className='border-[2px] border-gray-700 absolute w-[13%] top-0 left-0'></span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Whychoose
