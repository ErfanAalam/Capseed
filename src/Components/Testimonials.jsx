import React from 'react'
import StarIcon from '@mui/icons-material/Star';

function Testimonials() {
  return (
    <div className='bg-[#1D332D] p-32 text-white flex justify-between gap-10 font-poppins'>
      <div className='w-[480px] flex flex-col gap-10'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-[23px] font-poppins'>John S <span className='text-gray-300 font-[500]'>Broker Partner</span></h1>
          <p>
            <StarIcon fontSize='medium' />  <StarIcon fontSize='medium' /><StarIcon fontSize='medium' /><StarIcon fontSize='medium' /><StarIcon fontSize='medium' />
          </p>
        </div>
        <h2 className='text-[24px] font-playfair text-[#B3BAAA]'>Great experience with Capseed</h2>
        <p className='text-[16px] text-justify font-poppins'>Capseed has been a game-changerfor my business. Their private leading solutions are tailored are flexible. making the proesssmooth ans hassle-free. THe team is professionaland always ready tO assits. Highly recommended!</p>
      </div>

      <div className='w-[500px] flex flex-col gap-10'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-[23px] font-poppins'>Emily R <span className='text-gray-300 font-[500]'>Broker Partner</span></h1>
          <p>
            <StarIcon fontSize='medium' />  <StarIcon fontSize='medium' /><StarIcon fontSize='medium' /><StarIcon fontSize='medium' /><StarIcon fontSize='medium' />
          </p>
        </div>
        <h2 className='text-[24px] font-playfair text-[#B3BAAA]'>Great experience with Capseed</h2>
        <p className='text-[16px] text-justify font-poppins'>Capseed has been a game-changerfor my business. Their private leading solutions are tailored are flexible. making the proesssmooth ans hassle-free. THe team is professionaland always ready tO assits. Highly recommended!</p>
      </div>

      <div className='w-[500px] flex flex-col gap-10'>
        <div className='flex flex-col gap-4'>
        <h1 className='text-[23px] font-poppins'>Mark L <span className='text-gray-300 font-[500]'>Broker Partner</span></h1>
          <p>
            <StarIcon fontSize='medium' />  <StarIcon fontSize='medium' /><StarIcon fontSize='medium' /><StarIcon fontSize='medium' /><StarIcon fontSize='medium' />
          </p>
        </div>
        <h2 className='text-[24px] font-playfair text-[#B3BAAA]'>Great experience with Capseed</h2>
        <p className='text-[16px] text-justify'>Capseed has been a game-changerfor my business. Their private leading solutions are tailored are flexible. making the proesssmooth ans hassle-free. THe team is professionaland always ready tO assits. Highly recommended!</p>
      </div>
    </div>
  )
}

export default Testimonials
