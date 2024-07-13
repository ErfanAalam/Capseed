import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Upperfooter() {
  return (
    <div className='bg-[rgb(29,51,45)] px-20 flex flex-col items-center p-16'>
      <div className='bg-[rgb(29,51,45)] flex justify-center gap-40 py-14 items-center'>
        <h1 className='text-white text-[35px]'>BANKS SAID NO? CAPSEED SAYS YES!</h1>
        <button className='p-4 w-[180px] items-center text-gray-800 rounded-lg bg-[#B3BAAA]'>GET IN TOUCH</button>
      </div>
      <span className='w-[95%] mx-20 h-[1px] border-[1px] flex border-white' ></span>

      <div className='text-[#B3BAAA] p-10 flex justify-between w-[100%] '>
        <div className='flex flex-col gap-10 mt-10'>
          <div><img src="/Assets/Logo-19.png" alt="" className='w-[260px]' /></div>
          <ul className='flex flex-col gap-6 text-[20px] w-[220px]'>
            <a href=""><li>Contact us</li></a>
            <a href=""><li>First Motgage Loans</li></a>
            <a href=""><li>Second Motgage Loans</li></a>
            <a href=""><li>Bridge Loans</li></a>
            <a href=""><li>Caveat Loans</li></a>
            <a href=""> <li>Commercial Property Finance</li></a>
            <a href=""><li>Apply Now</li></a>
          </ul>
        </div>

        <div className='flex flex-col gap-0 mt-8 leading-8'>
          <h1 className='text-[50px] font-playfair mb-6'>Contact us</h1>
          <ul className='flex flex-col gap-6 text-[20px] w-[320px]'>
            <li className='text-[24px] font-playfair'>Head Office</li>
            <li>Suite 10,242-244 Caroline Springs Blvd, Caroline Springs <br /> VIC 3023</li>
            <li>9:00am-5:00pm</li>
            <li>MOnday-Friday <br /> (E.S.T Australia)</li>
            <li><span className='text-2xl font-playfair'>Mail us</span> <br />info@capseed.com.au</li>
            <li><span className='text-2xl font-playfair'>Phone</span> <br /> 0 426 805 278</li>
          </ul>
        </div>

        <div className='flex flex-col mt-4 gap-10'>
          <h1 className='text-[50px] font-playfair'>Socials</h1>
          <div className='flex gap-4'>
            <span className='border-[1px] border-gray-500 p-2 text-white'><FacebookIcon fontSize='medium' /></span>
            <span className='border-[1px] border-gray-500 p-2 text-white'><InstagramIcon fontSize='medium' /></span>
            <span className='border-[1px] border-gray-500 p-2 text-white'><LinkedInIcon fontSize='medium' /></span>
            <span className='border-[1px] border-gray-500 p-2 text-white'> <YouTubeIcon fontSize='medium' /></span>
          </div>
          <h1 className='text-[40px] font-playfair'>Stay updated</h1>
          <form action="">
            <div className='flex'>
              <input type="text" placeholder='First Name *' className='bg-transparent border-gray-500 placeholder:text-2xl placeholder:text-white border-[1px] p-6 w-[200px]' />
              <input type="text" placeholder='Last Name *' className='bg-transparent border-gray-500 placeholder:text-2xl placeholder:text-white border-[1px] p-6 w-[200px]' />
            </div>
            <div>
              <input type="text" name="" id="" placeholder='Email Address*' className='bg-transparent placeholder:text-2xl placeholder:text-white border-[1px] border-gray-500 p-6 w-[270px]' />
              <button className='p-[22px] border-[1px] w-[130px] bg-slate-400 text-black text-[18px]'>Sign up</button>
            </div>
          </form>
        </div>
      </div>


    </div>
  )
}

export default Upperfooter
