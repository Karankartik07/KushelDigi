import React from 'react'

export default function Footer() {
    return (
        <div className='mt-15'>
            <div className='bg-[#0D99FF] w-full md:w-70%'>
                <div className="flex justify-between lg:w-full md:w-[90%]">
                    <img className='h-[400px] hidden sm:hidden md:block lg:block lg:w-[350px] sm:w-[0px] md:w-[0px]' src="/logos/Vector 3.png" alt="" />
                    <div className='text-white flex  pt-15  flex-col'>
                        <p className='text-center font-bold text-[32px]'>Say hello.</p>
                        <p className='text-[22px] text-center lg:p-0 md:p-0 sm:p-3 p-3 lg:w-[110%] md:w-[110%] sm:w-[90%] '>Tell some words about your idea. <br /> We believe that every big deal starts with simple “Hello”</p>
                        <div className='flex lg:flex-row flex-col md:flex-row sm:flex-col  gap-3  pt-4 items-center justify-center  '>
                            <div className='flex round justify-center items-center gap-2 bg-[#00FFFF] text-black px-6 py-3 '>
                                <img className='h-[20px]' src="/logos/Group 100.png" alt="" />
                                <span className='text-[12px]'>Create brand new website</span>
                            </div>
                            <div className='flex round justify-center items-center px-6 py-3 gap-2  bg-white text-black'>
                                <img className='h-[20px]' src="/logos/Group 100.png" alt="" />
                                <span className=' text-center text-[12px]'>Improve my existing website</span>
                            </div>
                        </div>
                        <div className='text-center lg:w-[110%] lg:pl-0 md:pl-0 pl-24 sm:pl-[5px] md:w-[110%] w-[470px] sm:w-[80%] pt-[28px]'>
                            <p className='text-[18px]'>Not sure what is your case? <span className=' border-b-1 border-b-white'>Book a call and get a FREE consultation</span></p>
                        </div>
                    </div>
                    <img className='h-[400px] hidden sm:hidden md:block lg:block lg:w-[350px] sm:w-[0px] md:w-[0px]' src="/logos/Vector 2.png" alt="" />
                </div>

            </div>
            <div className=' lg:p-[18px] md:p-[18px] p-[28px] lg:pl-0 md:pl-0 sm:pl-5 pl-20  bg-[#191919] lg:flex lg:justify-between md:flex md:justify-between md:gap-9'>
                <img className="h-[51px] w-[153px] lg:mt-0 md:mt-3 md:ml-[119px] ml-[120px] sm:ml:[150px] text-white lg:ml-24" src='/logos/Kds logo white 1.png' alt="Kds logo" />
                <div className='text-white pt-3 flex gap-3  pr-56'>
                    <p className=' border-white border-r lg:ml-0 md:ml-0 ml-[120px]  pr-6'>Privacy Policy   </p>
                    <p >      Terms of Services</p>
                </div>
                <p></p>

            </div>
        </div>
    )
}
