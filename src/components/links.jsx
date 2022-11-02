import React from 'react'
import {FaGithub, FaSlack} from 'react-icons/fa'

const links = () => {
  return (
    <div className=' items-center flex flex-col w-[100%]'>
        <div className='flex items-center justify-center flex-col bg-[#EAECF0] w-[100%] h-[76px] lg:ml-[10px] mt-8 '>
           <a href="https://twitter.com/Manlikemalikk"> <button className='px-4 py-2 text-black rounded-xl cursor-pointer'> Twitter Link </button> </a> 
        </div>


        <div className='flex items-center justify-center flex-col bg-[#EAECF0] w-[100%] h-[76px] lg:ml-[10px] mt-8 '>
            <a href="https://training.zuri.team/"><button className='px-4 py-2 text-black rounded-xl'> Zuri Team </button></a>
        </div>


        <div className='flex items-center justify-center flex-col bg-[#EAECF0] w-[100%] h-[76px] lg:ml-[10px] mt-8 '>
            <a href="http://books.zuri.team "><button className='px-4 py-2 text-black rounded-xl'> zuri Books </button></a>
        </div>

        <div className='flex items-center justify-center flex-col bg-[#EAECF0] w-[100%] h-[76px] lg:ml-[10px] mt-8 '>
            <a href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>"><button className='px-4 py-2 text-black rounded-xl'> Python Books </button></a>
        </div>

        <div className='flex items-center justify-center flex-col bg-[#EAECF0] w-[100%] h-[76px] lg:ml-[10px] mt-8 '>
            <a href="https://background.zuri.team"><button className='px-4 py-2 text-black rounded-xl'> Background Check for Coders </button></a>
        </div>

        <div className='flex items-center justify-center flex-col bg-[#EAECF0] w-[100%] h-[76px] lg:ml-[10px] mt-8 '>
            <a href=" https://books.zuri.team/design-rules "><button className='px-4 py-2 text-black rounded-xl'> Design Books </button></a>
        </div>


        <div className=" flex flex-row items-center mt-8 mb-5 text-center px-4 py-4 p-3">
                            
                            <FaSlack className='text-black text-3xl mr-2' />
                            <FaGithub className='text-black text-3xl ml-3 ' />
                            
							
		</div>

       

    </div>
  )
}

export default links