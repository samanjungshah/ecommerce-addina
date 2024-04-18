import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF,faTwitter,faInstagram,faLinkedin,} from '@fortawesome/free-brands-svg-icons'
import { faMap, faMapLocation,faPhone } from '@fortawesome/free-solid-svg-icons';
import logoLight from '../assets/imgs/logo-light.svg'

function Footer() {
  return (
    <>
    <div className="md:px-28 bg-black pt-16 pb-8 ">
      <div className="flex md:flex-row flex-col text-white gap-6  md:justify-between px-4 md:px-0 text-lg">
        <div className='col-1 space-y-6'>
          <div>
            <img src={logoLight} alt="" />
          </div>
          <p className='max-w-sm '>It helps designers plan out where the content will sit, the content to be written and approved.</p>
          <div className='flex gap-8 mt-3'>
            <FontAwesomeIcon icon={faFacebookF} className='text-xl bg-white text-black px-2.5 py-2 rounded-full' />
            <FontAwesomeIcon icon={faTwitter} className='text-xl bg-white text-black px-2.5 py-2  rounded-full'/>
            <FontAwesomeIcon icon={faInstagram} className='text-xl bg-white text-black px-2.5 py-2  rounded-full'/>
            <FontAwesomeIcon icon={faLinkedin} className='text-xl bg-white text-black px-2.5 py-2  rounded-full'/>
          </div>

        </div>
        <div className="col-2 hidden md:block">
          <h2 className='font-bold text-2xl'>Services</h2>
          <ul className='space-y-2 mt-2'>
            <li>Login</li>
            <li>Wishlist</li>
            <li>Return Policy</li>
            <li>Privacy Policy</li>
            <li>Shopping FAQs</li>
          </ul>
        </div>
        <div className="col-3 hidden md:block">
          <h2 className='font-bold text-2xl'>Company</h2>
          <ul className='space-y-2 mt-2'>
            <li>Home</li>
            <li>About us</li>
            <li>Pages</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="col-4">
          <h2 className='font-bold text-2xl'>Contact</h2>
          <div className='mt-2 space-y-3'>
          <p className='max-w-xs'>4517 Washington Ave. Manchester, Kentucky 39495</p>
          <div className='flex items-center gap-4 '>
            <FontAwesomeIcon icon={faMapLocation} className='bg-[#b08b5d] py-2 px-2  rounded-full'/>
            <p>711-2880 Nulla St.</p>
          </div>
          <div className='flex items-center gap-4'>
            <FontAwesomeIcon icon={faPhone} className='bg-[#b08b5d] py-2 px-2  rounded-full'/>
            <div className='flex flex-col'>

            <p>711-2880 Nulla St.</p>

            <p>Mon - Sat: 9 AM - 5 PM</p>
            </div>
          </div>
            
          </div>

        </div>
      </div>
      <div className=' hidden md:flex  md:flex-row flex-col gap-4 text-center md:text-start  text-white md:justify-between py-8 mt-8  border-t-2 border-gray-400 text-lg'>
        <div>
          <p>© All Copyright 2024 by Addina</p>
        </div>
        <div className='flex'>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div>
          <p>Terms & Condition
Privacy Policy</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer