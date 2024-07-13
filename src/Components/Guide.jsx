import React from 'react'

function Guide() {
  return (
    <div className='p-20 flex justify-evenly font-poppins'>
      <div>
        <img src="https://images.unsplash.com/photo-1641326201918-3cafc641038e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="" className='w-[400px]' />
      </div>
      <div className='w-[40%] flex flex-col justify-center gap-16'>
        <h1 className='text-[70px] flex flex-col font-[600] leading-[85px] text-[#1D332D]'><span>Download</span> <span>Product Guide</span></h1>
        <p className='flex flex-col gap-4'>
          <span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, praesentium itaque sed, assumenda quos eveniet dicta aspernatur voluptates fugiat quo illo quidem quaerat neque nulla optio. Repudiandae porro aut rem?
          </span>
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus enim ducimus sed et ut optio architecto porro aut doloribus velit. Suscipit dolores totam reprehenderit sed eligendi, laborum porro quis repellendus.
          </span>
        </p>
        <button className='p-4 w-[240px] text-[30px] items-center text-gray-800 rounded-lg bg-[#B3BAAA]'>DOWNLOAD</button>
      </div>
    </div>
  )
}

export default Guide
