import React from 'react'
import bg3image from "../assets/bg3image.jpg"
import bg4image from "../assets/bg4image.jpg"
import bg3 from "../assets/bg3.jpg"
import bg4 from "../assets/bg4.jpg"

//resuable button component
const SelectedPlatformButton:React.FC<{label:string}>=({label})=>(
    <button className='hover:bg-white hover:text-black w-full py-5 border text-lg rounded-sm transition duration-300 ease-in-out font-bold'>
        {label}
    </button>
)

//resuable card component
const GameCard:React.FC<{imageSrc:string; title: string; description: string; buttonLabel: string; bgSrc: string; additionalInfo?: string}> = ({imageSrc, bgSrc, title, description, buttonLabel, additionalInfo})=>(
    <div className="w-full overflow-hidden rounded-lg shadow-sm shadow-white flex flex-col">
        <div className="bg-cover flex items-center justify-center h-[500px]" style={{backgroundImage: `url(${bgSrc})`}}>
            <img src={imageSrc} alt={title} className='w-80' />
        </div>
        <div className="px-8 flex flex-col flex-grow">
            <div className="flex-grow">
                <h1 className="text-5xl font-semibold mb-3">{title}</h1>
                <p className="text-lg">{description}</p>
                {additionalInfo && (
                    <button className='bg-gray-900 my-10 py-2 px-4 border-gray-400 border'>{additionalInfo}</button>
                )}
            </div>
            <div className="mt-auto mb-10">
                <SelectedPlatformButton label={buttonLabel} />
            </div>
        </div>
    </div>
)

//main component
const BuyNowModal:React.FC = () =>{
    return (
        <>
            <h1 className='text-white font-bold text-4xl mb-5'>Buy Now</h1>
            <div className="flex gap-10">
                <GameCard
                    imageSrc={bg3image}
                    bgSrc={bg3}
                    title='Grand Theft Auto Online'
                    description='Includes GTA Online'
                    buttonLabel='SELECT PLATFORM'
                    additionalInfo='story mode upgrade available in game'
                />
                <GameCard
                    imageSrc={bg4image}
                    bgSrc={bg4}
                    title='Grand Theft Auto V'
                    description='Includes GTAV Story Mode & GTA Online'
                    buttonLabel='SELECT PLATFORM'
                />
            </div>
        </>
    )
};
export default BuyNowModal
// const BuyNowModal:React.FC = () => {
//   return (
//     <div className=''>
//         <h1 className='text-white font-bold text-4xl mb-5'>Buy Now</h1>
//         <div className='flex gap-10'>
//             {/* first card */}
//             <div className="w-full overflow-hidden rounded-lg shadow-sm shadow-white">
//             <div className=" bg-bgimage1 bg-cover  flex items-center justify-center h-[500px]">
//                 <img src={bg3image} className='w-80' alt="" />
//             </div>
//             <div className='px-8'>
//             <h1 className='text-5xl font-semibold mb-3'>Grand Theft Auto Online</h1>
//             <p className=' text-lg'>Includes <span className='font-semibold'>GTA Online</span></p>
//             <button className='bg-gray-900 my-10 py-2 px-4 border-gray-400 border-[0.25px]'>Story mode upgrade available in game</button>
//             <button className='hover:bg-white hover:text-black w-full py-5 border text-lg rounded-sm transition duration-300 ease-in-out font-bold mb-10'>SELECT PLATFORM</button>
//             </div>

//             </div>
// {/* second card */}
//             <div className="w-full overflow-hidden rounded-lg shadow-sm shadow-white">
//             <div className=" bg-bgimage2 bg-cover  flex items-center justify-center h-[500px]">
//                 <img src={bg4image} className='w-80' alt="" />
//             </div>
//             <div className='px-8 flex flex-col min-h-[320px] '>
//             <div className="flex-grow">
//             <h1 className='text-5xl font-semibold mb-3'>Grand Theft Auto V</h1>
//             <p className=' text-lg'>Includes <span className='font-semibold'>GTAV Story Mode & GTA Online</span></p>
//             </div>

//             <div className="mt-auto">
//             <button className='hover:bg-white hover:text-black w-full py-5 border text-lg rounded-sm transition duration-300 ease-in-out font-bold mb-10'>SELECT PLATFORM</button>
//             </div>
//             </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default BuyNowModal
