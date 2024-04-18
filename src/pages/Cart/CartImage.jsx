import React from 'react'
import breadCrumb from '../../assets/imgs/breadcrumb-bg.jpg'

function CartImage() {
  return (
    <>
    <div style={{backgroundImage:`url('${breadCrumb}')`}} className='flex items-center justify-center h-[290px] w-full bg-no-repeat bg-cover bg-top'>
        <div className='text-white space-y-3'>
        <h2 className='text-7xl font-bold'>Cart</h2>
        <p className='text-center text-xl'>Home  Cart</p>

        </div>
    </div>
    </>
  )
}

export default CartImage