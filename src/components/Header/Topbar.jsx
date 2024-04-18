import React from 'react'
import callImg from '../../assets/imgs/call.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';


function Topbar() {
  return (
    <div className="topbar hidden md:block md:px-14 py-3 w-full bg-[#B18B5E]">
            <div className="flex justify-between text-white items-center">
                <div className='flex items-center gap-2'>
                    <img src={callImg} alt="" srcset="" className='w-[20px] h-[20px]' />
                    <p>+380961381876</p>
                </div>
                <div className='hidden md:block'><h2 className='font-semibold'>TAKE CARE OF YOUR Health 25% OFF USE CODE “ DOFIX03 ”</h2></div>
                <ul className='flex gap-8 font-semibold'>
                    <li>English <FontAwesomeIcon icon={faAngleDown}/></li>
                    <li>USD <FontAwesomeIcon icon={faAngleDown}/></li>
                    <li>Setting <FontAwesomeIcon icon={faAngleDown}/></li>
                </ul>
            </div>

        </div>
  )
}

export default Topbar