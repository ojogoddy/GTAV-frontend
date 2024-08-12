import React, { useState } from 'react'
import logo1 from "../assets/logo1.svg"
import logo2 from "../assets/loog2.svg"
import { BiSearch, BiUser } from 'react-icons/bi'
import Modal from '../component/Modal'
import BuyNowModal from '../component/BuyNowModal'
import arrow from "../assets/arrow.svg"
import UserClick from '../component/UserClick'

const Header:React.FC = () => {
  const [buyNow, setBuyNow] = useState(false)
  const [user, setUser] = useState(false)

  const handleUser =()=>{
    setUser(!user)
  }

  const handleBuyNow = ()=>{
    setBuyNow(!buyNow)
  }
  return (
    <>
      <div className="bg-black h-20 flex items-center justify-between px-20 shadow-white shadow-sm">
        <div className=" flex gap-3 ">
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
        </div>

         <nav className=''>
          <ul className='flex items-center text-[16px]'>
              <li className='px-5 hover:text-[#ffcc33] cursor-pointer'>Overview</li>
              <li className='px-5 hover:text-[#ffcc33] cursor-pointer flex items-center'>GTA Online <span className='mt-1 ml-1'><img src={arrow} alt="" /></span> </li>
              <li className='px-5 hover:text-[#ffcc33] cursor-pointer flex items-center'>Story <span className='mt-1 ml-1'><img src={arrow} alt="" /></span></li>
              <li className='px-5 hover:text-[#ffcc33] cursor-pointer'>GTA+</li>
              <li className='px-5 hover:text-[#ffcc33] cursor-pointer flex items-center'>Community <span className='mt-1 ml-1'><img src={arrow} alt="" /></span></li>
              <li className='px-5 hover:text-[#ffcc33] cursor-pointer'>Support</li>
          </ul>
         </nav>
         <div className="flex items-center gap-5 ">
          <button onClick={handleBuyNow} className=' border-white border text-[15px] px-[15px] py-[10px] rounded-md  hover:bg-white hover:text-black transition duration-300 ease-in-out'>Buy Now</button>
          <BiSearch className='text-2xl' />
          <div onClick={handleUser} className="bg-white/20 p-2 rounded-full">
          <BiUser className=' text-xl' />
          </div>
          {user && (
            <div className='absolute top-[80px] right-16'>
              <UserClick/>
            </div>
          )}
         </div>

         <Modal isVisible={buyNow} onClose={handleBuyNow}>
            <BuyNowModal/>
         </Modal>

      </div>
    </>
  )
}

export default Header
