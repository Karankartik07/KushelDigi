import React from 'react'

export default function Portfolio() {
    return (
        <div className='bg-[#24204E]  lg:mb-0 md:mb-0 sm:mb-[-20px] mb-[-140px]'>
            <h4 className=' mb-4 text-center'>Our Portfolio</h4>
            <img className='lg:hidden md:hidden h-40 w-56 ml-9 sm:ml-16 sm:block mb-[-70px]  ' src="/logos/lappy.png" alt="" />
            <div className=' flex w-100 lg:gap-0  h-[600px]'>

                <div className='lg:p-24  sm:pl-10 md:pl-0  lg:pl-33  relative'>
                    <img className='w-[400px] hidden lg:block md:hidden sm:hidden  ' src="/logos/bgwhite.png" alt="" />

                    <img className=' absolute lg:block md:block sm:hidden hidden  lg:top-40 h-40 md:h-40 md:max-w-80 lg:max-w-[100%] lg:h-auto lg:w-[450px] md:left-[360px] lg:left-22' src="/logos/lappy.png" alt="" />
                </div>
                <div className="flex lg:pt-45 pt-30 md:pt-45 sm:pt-30 lg:mt-0 md:mt-10 md:items-center lg:items-start  flex-column">
                    <h1 className='lg:pl-0 md:pl-0  md:text-center lg:text-start sm:pl-10 pl-12  text-white'>DigitalMna</h1>
                    <p className='text-[#CCD2D9] lg:text-start md:text-center lg:w-[540px] lg:pl-0 md:pl-0 sm:pl-10 pl-12 mt-4 text-lg w-[90%] sm:w-[80%]  '>Crypto apps are mobile or web applications
                        designed to facilitate various activities
                        related to cryptocurrencies. These apps allow users
                        to buy, sell, trade, and manage their digital assets
                        securely. Features often include real-time price tracking.</p>
                    <div className='flex flex-start lg:pl-0 md:pl-0 sm:pl-10 pl-12 mt-4'>
                        <button className='text-white '>View Live Site</button>
                        <img className=' ml-2' src="/logos/Group 3.png" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}
