import React from 'react'

import products1 from './products1'
import './Products.css'
import Product from './Product'


function Products() {
    return (
        <>
            <div className="md:px-28 px-12">
                <div className='space-y-4'>
                    <span className='text-[#B18B5E] bg-[#F3EEE7] px-3 py-1 font-semibold'>THIS MONTH</span>
                    <h2 className='text-6xl font-semibold'>Trendy Collection</h2>

                </div>
                <div className="flex flex-row  mt-12 flex-wrap gap-12 mb-24  ">
                    {products1.map(product =>(

                   <Product key={product.id} product={product} />
                    ))}

                </div>


            </div>

        </>
    )
}

export default Products