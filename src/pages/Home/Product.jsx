import React from 'react'
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faEye, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import ao1 from '../../assets/imgs/products/product1.png'


function Product({product}) {
    return (
        <div className="md:w-[22%] w-[42%] flex md:flex-col flex-col">
            <div className='bg-[#F5F1E6] flex  items-center justify-center product-img  pb-16 pt-14'>
                <div className='product-image relative w-[200px]  md:w-[400px] md:h-[250px]'>

                    <img src={product.image} alt="" className='absolute left-2 md:left-6 md:top-0 top-[-54px] ' />
                    <p>{}</p>
                    <div className=' gap-3 absolute bottom-[-10px] left-20 hover-icons hidden'>
                        <FontAwesomeIcon icon={faCartShopping} className='text-white bg-[#B18B5E] p-2 rounded-full' />
                        <FontAwesomeIcon icon={faEye} className='text-white bg-[#B18B5E] p-2 rounded-full' />
                        <FontAwesomeIcon icon={faHeart} className='text-white bg-[#B18B5E] p-2 rounded-full' />

                    </div>

                </div>
            </div>

            <div className='space-y-2 mt-2'>
                <h2 className='font-semibold text-xl'>{product.name}</h2>
                <FontAwesomeIcon icon={faStar} className='text-[#B18B5E]' />
                <FontAwesomeIcon icon={faStar} className='text-[#B18B5E]' />
                <FontAwesomeIcon icon={faStar} className='text-[#B18B5E]' />
                <FontAwesomeIcon icon={faStar} className='text-[#B18B5E]' />
                <FontAwesomeIcon icon={faStar} className='text-[#B18B5E]' />

                <p className='text-[#B18B5E] text-lg font-semibold'>USD {product.price}.00</p>
            </div>
        </div>
    )
}

export default Product