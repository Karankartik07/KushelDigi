import React from 'react'

export default function BuildLink() {
    return (
        <div className=' w-full h-[60%] sm:relative lg:p-0 md:p-0 sm:p-4  p-4  lg:mb-0 md:mb-0 sm:mb-[-20px] mb-[-110px] bg-[#437B81]'>
            <img className='lg:hidden md:hidden h-40 w-60  ml-9  sm:ml-10 sm:block sm:mb-[-200px]  mb-[-80px]' src="/logos/lappy2.png" alt="" />
            <div className=' flex lg:flex-row-reverse sm:flex-col-reverse md:flex-row-reverse  h-[600px] '>
                <div className='lg:p-24 sm:p-10 sm:pl-10  lg:pl-33   relative'>
                    <img className='w-[400px] hidden lg:block md:hidden sm:hidden ' src="/logos/bgwhite.png" alt="" />
                    <img className=' absolute lg:block md:block sm:hidden hidden  lg:top-40 h-40 md:h-40 md:max-w-80 lg:max-w-[100%] lg:h-auto lg:w-[450px] md:left-[-500px] lg:left-22' src="/logos/lappy2.png" alt="" />
                </div>
                <div className="flex lg:pt-45 pt-30 md:pt-45 sm:pt-30 lg:mt-0 md:mt-10 md:items-center lg:items-start flex-column">
                    <h1 className='lg:pl-4 md:pl-32 md:text-center lg:text-start sm:pl-10  pl-12 text-white'>Buildlink</h1>
                    <p className='text-white lg:w-[560px] lg:pl-4 md:pl-32 sm:pl-10 pl-12 mt-4 md:w-[100%] text-lg w-[90%] sm:w-[80%] '>A dealing application is a software platform designed to facilitate trading and transactions in financial markets. It provides users with tools for executing buy and sell orders, monitoring market conditions, analyzing financial data, and managing portfolios.</p>
                    <div className='flex flex-start lg:pl-4 md:pl-32 sm:pl-10 pl-12 mt-4'>
                        <button className='text-white '>View Live Site</button>
                        <img className=' lg:pl-4 md:pl-2 sm:pl-10 ml-2' src="/logos/arrowRight.png" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

