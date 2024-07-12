import React from 'react'
import StarIcon from '@mui/icons-material/Star';

function Testimonials() {
  return (
    <div className='bg-[#1D332D] p-20 text-white flex justify-around'>
      <div className='w-[480px] flex flex-col gap-10'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-[23px] font-poppins'>John S Broker Partner</h1>
          <p>
            <StarIcon fontSize='large' />  <StarIcon fontSize='large' /><StarIcon fontSize='large' /><StarIcon fontSize='large' /><StarIcon fontSize='large' />
          </p>
        </div>
        <h2 className='text-[28px] font-playfair text-[#B3BAAA]'>Great experience with Capseed</h2>
        <p className='text-[20px] text-justify font-poppins'>Capseed has been a game-changerfor my business. Their private leading solutions are tailored are flexible. making the proesssmooth ans hassle-free. THe team is professionaland always ready tO assits. Highly recommended!</p>
      </div>

      <div className='w-[500px] flex flex-col gap-10'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-[24px] font-poppins'>Quick and Efficient</h1>
          <p>
            <StarIcon fontSize='large' />  <StarIcon fontSize='large' /><StarIcon fontSize='large' /><StarIcon fontSize='large' /><StarIcon fontSize='large' />
          </p>
        </div>
        <h2 className='text-[28px] font-playfair text-[#B3BAAA]'>Great experience with Capseed</h2>
        <p className='text-[20px] text-justify font-poppins'>Capseed has been a game-changerfor my business. Their private leading solutions are tailored are flexible. making the proesssmooth ans hassle-free. THe team is professionaland always ready tO assits. Highly recommended!</p>
      </div>

      <div className='w-[500px] flex flex-col gap-10'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-[23px] font-poppins'>John S Broker Partner</h1>
          <p>
            <StarIcon fontSize='large' />  <StarIcon fontSize='large' /><StarIcon fontSize='large' /><StarIcon fontSize='large' /><StarIcon fontSize='large' />
          </p>
        </div>
        <h2 className='text-[28px] font-playfair text-[#B3BAAA]'>Great experience with Capseed</h2>
        <p className='text-[20px] text-justify'>Capseed has been a game-changerfor my business. Their private leading solutions are tailored are flexible. making the proesssmooth ans hassle-free. THe team is professionaland always ready tO assits. Highly recommended!</p>
      </div>
    </div>
  )
}

export default Testimonials
