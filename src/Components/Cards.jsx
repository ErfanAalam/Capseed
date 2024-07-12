import React from 'react'

function Cards() {
  return (
    <div className='bg-[#f2f2f2] p-10 '>

      <div className="flex justify-center">
        <div className=' p-6 w-[400px] bg-white m-10 text-center flex flex-col gap-6 shadow-lg shadow-black'>
          <div className=''>
            <img src="https://images.unsplash.com/photo-1641326201918-3cafc641038e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="" className='w-[400px] h-[400px]' />
          </div>
          <div>
            <h1 className='text-[30px] text-center font-playfair'>Fisrt Mortgage Loans</h1>
            <p className='px-20'>Avial low interest Funding against your Property</p>
          </div>
          <div>
            <button className='p-4 w-[180px] items-center text-gray-800 rounded-lg bg-[#B3BAAA]'>LEARN MORE</button>
          </div>
        </div>

        <div className=' p-6 w-[400px] bg-white m-10 text-center flex flex-col gap-6 shadow-lg shadow-black'>
          <div className=''>
            <img src="https://images.unsplash.com/photo-1641326201918-3cafc641038e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="" className='w-[400px] h-[400px]' />
          </div>
          <div>
            <h1 className='text-[30px] text-center font-playfair'>Second Mortgage Loans</h1>
            <p className='px-20'>Avial low interest Funding against your Property</p>
          </div>
          <div>
            <button className='p-4 w-[180px] items-center text-gray-800 rounded-lg bg-[#B3BAAA]'>LEARN MORE</button>
          </div>
        </div>

        <div className=' p-6 w-[400px] bg-white m-10 text-center flex flex-col gap-6 shadow-lg shadow-black'>
          <div className=''>
            <img src="https://images.unsplash.com/photo-1641326201918-3cafc641038e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="" className='w-[400px] h-[400px]' />
          </div>
          <div>
            <h1 className='text-[30px] text-center font-playfair'>Bridge Loans</h1>
            <p className='px-20'>Avial low interest Funding against your Property</p>
          </div>
          <div>
            <button className='p-4 w-[180px] items-center text-gray-800 rounded-lg bg-[#B3BAAA]'>LEARN MORE</button>
          </div>
        </div>

      </div>

      <div className="flex justify-center gap-6">
        <div className=' p-6 w-[680px] h-[400px] bg-white flex gap-10 shadow-lg shadow-black'>
          <div className=''>
            <img src="https://images.unsplash.com/photo-1641326201918-3cafc641038e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="" className='w-[350px] h-[350px]' />
          </div>
          <div className='flex flex-col justify-between items-center '>
            <h1 className='text-[30px] text-center flex flex-col mt-10 font-playfair'><span>Caveat</span> <span>Loans</span></h1>
            <p className='text-center w-[230px]'>Quick, Short-Term Financing For Real Estate Development</p>
            <button className='p-4 w-[180px] items-center text-gray-800 rounded-lg bg-[#B3BAAA]'>LEARN MORE</button>
          </div>
        </div>

        <div className=' p-6 w-[650px] h-[400px] bg-white  flex gap-6 shadow-lg shadow-black'>
          <div className=''>
            <img src="https://images.unsplash.com/photo-1641326201918-3cafc641038e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="" className='w-[500px] h-[350px]' />
          </div>
          <div className='flex flex-col justify-between items-center'>
            <h1 className='text-[30px] text-center flex flex-col mt-10 font-playfair'><span>Commercial</span> <span>Property</span> <span>Finance</span></h1>
            <p className='text-center w-[200px]'>Loans For Buying Retail Spaces, offices & other Commercial Properties</p>
            <button className='p-4 w-[180px] items-center text-gray-800 rounded-lg bg-[#B3BAAA]'>LEARN MORE</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Cards
