import React from 'react'
import Chair2 from '../assets/imgs/chair2.png'

function Slide(props) {
    return (
        <>
               <div className='md:w-1/2 text-start space-y-4'>
            <span className='bg-[#EBE5D9] text-[#B18B5E] text-base py-1 px-[5px]'>NEW ARRIVAL...</span>
            <h2 className='md:text-8xl text-6xl font-semibold'>Elevate <br />Your Home Aestetics</h2>
            <p className='md:text-lg text-base max-w-2xl md:max-w-lg w-full text-gray-600'>A furniture e-commerce company operates in the digital space, offering a wide range
                of furniture products for sale
                through an online platform.</p>
            <div className="flex gap-6">
                <button className='transition-all ease-in duration-200 bg-[#B18B5E] text-white py-4 px-8 border-2 border-[#B18B5E] hover:bg-white hover:text-[#B18B5E]'>BUY NOW  </button>
                <button className='transition-all ease-in duration-200  md:py-4  px-8 text-[#B18B5E] border border-[#B18B5E] hover:bg-[#B18B5E] hover:text-white'>VIEW DETAILS</button>

            </div>
        </div>
        <div className="md:w-1/2  md:block relative  ">
            <div className="-z-10 md:block hidden cricle bg-[#D3BFA6] h-[500px] w-[500px] rounded-full absolute top-0 right-8"></div>
            <img src={props.image} className='z-10 mt-8 bg-contain' alt="" srcset="" />
        </div>
        </>

 
    )
}

export default Slide