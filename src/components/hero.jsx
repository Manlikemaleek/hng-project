import React from 'react'
import Avatar from '../img/avatar2.jpg'

const hero = () => {
  return (
    <div className=' flex item-center justify-center'>
        <div className='bg-white w-1/3 mt-10'>
            <div className='flex items-center justify-center pt-10 flex-col'>
                <img className=' rounded-full w-32' src={Avatar} alt="" />

                <h1 className='text-gray-800 text-xl font-semibold mt-5'>Manlikemalikk</h1>
            </div>
        </div>
    </div>
  )
}

export default hero