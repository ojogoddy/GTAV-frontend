import React from 'react'
import welcome from "../assets/welcome.png"
import online from "../assets/online.png"
import gtav from "../assets/hero2.svg"
import gtavo from "../assets/hero1.svg"

const Welcome:React.FC = () => {
  return (
    <>
    <div className='bg-hero2 bg-center bg-no-repeat bg-cover px-20 h-screen flex items-center'>
        <div className="w-full mr-2">
            <img src={welcome} alt="" />
        </div>
        <div className="w-full">
            <img src={gtav} className='w-[140px]' alt="" />
            <h1 className='text-5xl mb-2 mt-10 font-bold'>Grand Theft Auto Online</h1>
            <p className='text-xl mb-12'>Experience GTA Online, a dynamic and ever-evolving online universe for up to 30 players, where you can rise from street-level hustler to become a kingpin fo your own criminal empire</p>
            <p className='text-xl'>Enjoy new high-performance vehicle upgrades and improvements like the Career Builder as well as all GTA Online gameplay upgrades, expansions, and content released since launch, ready to enjoy solo or with friends. Pull off darling co-operative Heists, enter adrenaline-fueled Stunts Races, compete in unique Adversary Modes, or hang out in social spaces including nightclubs arcades, penthouse parties, car meetups and much more.</p>
        </div>

    </div>
    <div className='bg-hero2 bg-center bg-no-repeat bg-cover px-20 h-screen flex items-center'>

        <div className="w-full">
            <img src={gtavo} className='w-[140px]' alt="" />
            <h1 className='text-6xl mb-2 mt-10 font-bold'>Welcome to Los Santos</h1>
            <p className='text-xl mb-12'>When a young street hustler, a retired bank robber, and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government, and the entertainment ndustry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody - least of all each other</p>
            <p className='text-xl'>Current players can transfer both GTAV Story Mode progress and GTA Online characters and progression to PlayStation 5 and Xbox Series XIS with a one-time migration.</p>
        </div>
        <div className="w-full ml-2">
            <img src={online} alt="" />
        </div>

    </div>
    </>
  )
}

export default Welcome
