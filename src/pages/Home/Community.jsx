import React from 'react'
import playStore from '../../assets/imgs/play-store.png'
import appleStore from '../../assets/imgs/apple-store.png'
import brand1 from '../../assets/imgs/community/brand-01.png'
import brand2 from '../../assets/imgs/community/brand-02.png'
import brand3 from '../../assets/imgs/community/brand-03.png'
import brand4 from '../../assets/imgs/community/brand-04.png'
import brand5 from '../../assets/imgs/community/brand-05.png'

function Community() {
  return (
  <>
  <div className="md:px-28 px-4 py-12">
    <div className="flex md:flex-row flex-col gap-8 my-16">
      <div className='bg-[#D9F3FB] p-8 space-y-6' >
        <h2 className='text-3xl font-semibold'>Exclusive offers for you</h2>
        <p className='text-lg max-w-sm text-gray-600'>Get weekly deals, valuable health information and more.</p>
        <button className='border-2 border-black px-10 hover:bg-[#B18B5E] hover:text-white transition-all duration-75 ease-in py-3'>SIGN UP </button>
      </div>
      <div className='bg-[#F9FFE0] p-8 space-y-6' >
        <h2 className='text-3xl font-semibold'>Join Our Community</h2>
        <p className='text-lg max-w-sm text-gray-600'>Get weekly deals, valuable health information and more.</p>
        <button className='border-2 border-black px-10 hover:bg-[#B18B5E] hover:text-white transition-all duration-75 ease-in py-3'>JOIN FREE NOW</button>
      </div>
      <div className='bg-[#FFE2E5] p-8 space-y-6' >
        <h2 className='text-3xl font-semibold'>Get our FREE app Now!</h2>
        <p className='text-lg max-w-sm text-gray-600'>Get weekly deals, valuable health information and more.</p>
        <div className="flex gap-3">
          <img src={playStore} alt=""  className='bg-black p-3'/>
          <img src={appleStore} alt="" className='bg-black p-3' />
        </div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row gap-4 justify-between px-12 items-center my-12">
      <div>
        <img src={brand1} alt="" />
      </div>
      <div>
        <img src={brand2} alt="" />
      </div>
      <div>
        <img src={brand3} alt="" />
      </div>
      <div>
        <img src={brand4} alt="" />
      </div>
      <div>
        <img src={brand5} alt="" />
      </div>
    </div>
  </div>
  </>
  )

}

export default Community