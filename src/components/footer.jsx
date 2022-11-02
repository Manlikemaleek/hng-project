import React from 'react'
import Logo from '../img/lih.webp'

const footer = () => {
  return (
    <div className=''>
        <div className=' w-[80%] h-[1px] border-none mr-auto ml-auto mt-6 mb-4 bg-black'>
            
        </div>


        <div className='flex flex-row-3 justify-between  px-12'>
            <p className='text-3xl text-black lg:mr-60'>Zuri<span className=' text-red-600 text-2xl'>.</span>Internship</p>

            <p className='text-xl text-[#667085] lg:mr-48'>HNG Internship 9 Frontend Task</p>

            <img className='w-[132PX] h-[32px] ' src={Logo} alt="" />
            
        </div>

        
        
        
    </div>
  )
}

export default footer