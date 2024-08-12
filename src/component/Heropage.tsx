import React, { useState } from 'react'
import hero1 from "../assets/hero1.svg"
import hero2 from "../assets/hero2.svg"
import Modal from './Modal'
import BuyNowModal from './BuyNowModal'

const Heropage:React.FC = () => {
    const [buyNow, setBuyNow] = useState(false)
    const [trailer, setTrailer] = useState(false)

  const handleBuyNow = ()=>{
    setBuyNow(!buyNow)
  }
  const handleTrailer = ()=>{
    setTrailer(!trailer)
  }
  return (
    <div className='px-20 bg-hero bg-center bg-no-repeat bg-cover flex flex-col justify-center' style={{ height: "calc(100vh - 80px)" }}>
        {/* <div className="absolute top-0 left-0 w-full bg-black opacity-60 h-screen "></div> */}
        <div className="flex gap-5">
            <img src={hero2} className='w-[140px]' alt="" />
            <img src={hero1} className='w-[140px]' alt="" />
        </div>
        <h1 className='mt-10 text-5xl w-[500px] font-bold mb-2 '>Now available for PS5 and Xbox Series XIS</h1>
        <p className='w-[500px] text-xl'>Experience entertainment blockbusters, Grand Theft Auto V and GTA Online</p>

        <div className=" mt-10 ">
            <button onClick={handleTrailer} className='py-4 px-20 font-semibold rounded text-2xl border-white border mr-5 font-mono  hover:bg-white hover:text-black transition duration-300 ease-in-out'>WATCH THE TRAILER</button>
            <Modal isVisible={trailer} onClose={handleTrailer}>

            </Modal>
            <button onClick={handleBuyNow} className='py-4 px-20 font-semibold font-mono rounded text-2xl border border-white hover:bg-white hover:text-black transition duration-300 ease-in-out'>BUY NOW</button>
            <Modal isVisible={buyNow} onClose={handleBuyNow}>
                <BuyNowModal/>
            </Modal>
        </div>
    </div>
  )
}

export default Heropage
