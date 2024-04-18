import React from 'react'
import './cartarea.css'
import product1 from '../../assets/imgs/products/product1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'


function CartArea() {
  return (
    <>
      <div className="md:px-28 w-full py-12">
        <table>
          <tr>
            <th>Images</th>
            <th>Product</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>

          </tr>
          <tr>

            <td className='flex justify-center'><img src={product1} alt="" className='w-[150px]' srcset="" /></td>
            <td>Alexander Sofa</td>
            <td>$24.00</td>
            <td className='quantity'>

              <form action="#" className='max-w-xs mx-auto '>
                <div className="flex justify-center relative">
                  <button className='absolute left-16 top-3 text-xl'><FontAwesomeIcon icon={faMinus} /></button>
                  <input type="text" className='border p-2 text-center max-w-[120px] focus:border-[#B18B5E] ' name="" placeholder='1' id="" />
                  <button className='absolute right-16 top-3 text-lg'><FontAwesomeIcon icon={faPlus} /></button>

                </div>
              </form>

            </td>
            <td>$24.00</td>
            <td>x</td>
          </tr>
          <tr>

            <td className='flex justify-center'><img src={product1} alt="" className='w-[150px]' srcset="" /></td>
            <td>Alexander Sofa</td>
            <td>$24.00</td>
            <td className='quantity'>

              <form action="#" className='max-w-xs mx-auto '>
                <div className="flex justify-center relative">
                  <button className='absolute left-16 top-3 text-xl'><FontAwesomeIcon icon={faMinus} /></button>
                  <input type="text" className='border p-2 text-center max-w-[120px] focus:border-[#B18B5E] ' name="" placeholder='1' id="" />
                  <button className='absolute right-16 top-3 text-lg'><FontAwesomeIcon icon={faPlus} /></button>

                </div>
              </form>

            </td>
            <td>$24.00</td>
            <td>x</td>
          </tr>
          <tr>

            <td className='flex justify-center'><img src={product1} alt="" className='w-[150px]' srcset="" /></td>
            <td>Alexander Sofa</td>
            <td>$24.00</td>
            <td className='quantity'>

              <form action="#" className='max-w-xs mx-auto '>
                <div className="flex justify-center relative">
                  <button className='absolute left-16 top-3 text-xl'><FontAwesomeIcon icon={faMinus} /></button>
                  <input type="text" className='border p-2 text-center max-w-[120px] focus:border-[#B18B5E] ' name="" placeholder='1' id="" />
                  <button className='absolute right-16 top-3 text-lg'><FontAwesomeIcon icon={faPlus} /></button>

                </div>
              </form>

            </td>
            <td>$24.00</td>
            <td>x</td>
          </tr>



        </table>
        <div className='mt-8 space-y-4'>
          <h2 className='text-2xl font-semibold'>Cart Totals</h2>
          <ul className=''>
            <li className='border max-w-lg p-4 flex justify-between'>
              <span className='text-left'>Subtotal</span>
              <span className='text-right'>$78.00</span>
            </li>
            <li className='border max-w-lg p-4 flex justify-between'>
              <span className='text-left'>total</span>
              <span className='text-right'>$78.00</span>
            </li>

          </ul>
          <button className='bg-[#B18B5E] px-7 py-4 rounded-full text-white'>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </>
  )
}

export default CartArea