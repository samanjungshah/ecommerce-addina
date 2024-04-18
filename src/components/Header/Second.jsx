import React from 'react'
import Logo from '../../assets/imgs/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'




function Second() {
    return (
        <div className='px-12 py-6 text-lg w-full  flex justify-between'>
            <div className='flex gap-20 items-center'>
                <div>
                    <Link to='/'>

                    <img src={Logo} alt="" />
                    </Link>
                </div>

                <ul className='hidden md:flex gap-8 font-semibold'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Shop</li>
                    <li>Pages</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>

            </div>
            <div className='flex items-center gap-12'>
                <div className='relative hidden md:block'>
                    <form action="">
                        <input type="text" name="" id="" className='py-3 px-6 rounded-full border' placeholder='Search...' />
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute top-0 right-0 bg-[#B18B5E] rounded-full p-[17.5px]' />
                    </form>
                </div>
                <div className='space-x-5 flex items-center'>
                    <div className='relative'>

                    <FontAwesomeIcon icon={faHeart} className='text-[30px]' />
                        <span className='rounded-full bg-[#B18B5E] text-base  text-white px-[7px] py-[1px] absolute top-[-15px] right-[-10px]'>3</span>
                    </div>
                    <div className='relative'>
                        <Link to='/cart'>

                        <span className='rounded-full bg-[#B18B5E] text-base text-white px-[7px] py-[1px] absolute top-[-15px] right-[-10px]'>3</span>
                    <FontAwesomeIcon icon={faCartShopping} className='text-[25px]'/>
                        </Link>

                    </div>

                </div>


            </div>

        </div>
    )
}

export default Second