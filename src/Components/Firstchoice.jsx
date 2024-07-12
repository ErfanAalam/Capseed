import React from 'react'

function Firstchoice() {
  return (
    <div className='bg-[#1D332D] flex p-14 xl:p-20 2xl:p-28 xl:px-20 2xl:px-40 justify-between'>

      <div className='flex flex-col justify-between gap-0 2xl:gap-32 '>
        <div><img src="/Assets/Logo-19.png" alt="" className='w-[180px]'/></div>
        <div className='text-nowrap'>
          <p className='text-[30px] xl:text-[40px] text-white'>Your first choice in</p>
          <p className='text-[30px] xl:text-[40px] text-[#B3BAAA]'>PRIVATE LENDING</p>
        </div>
      </div>
      
      <div className='lg:text-[18px] xl:text-[20px] 2xl:text-[20px] md:pl-20 lg:pl-24 xl:pl-36 2xl:pl-64'>
        <p className='text-white'><span className='text-[#B3BAAA]'>At Capseed, we help businesses and individuals navigate finance with customized solutions and competitive rates.</span>As privte lenders, we offera range of services including Commercial Property Finance, Caveat Loans, Bridge Loans, First Mortgages, and Second Mortgases. Our experienced teams guides you through the loan process, ensuring you have the information needed to make the right decisions.</p>
        <br />
        <p className='text-white'>We value genuine interactions and strive to buils strong, lesting relationships with our clients. Our commitment to exceptional service and support ensures a seamless experience from application to sidbursement. Contact our team today and take the first step towards a brighter financial future.</p>
      </div>
    </div>
  )
}

export default Firstchoice
