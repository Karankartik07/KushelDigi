import React from 'react'

export default function WStart() {
    return (
        <div className='lg:p-15 md:p-15 '>
            <div className=' lg:rounded-3xl lg:pb-10 lg:pt-20 lg:pl-20 lg:flex
            md:rounded-3xl md:pb-10 md:pt-20 md:pl-20 md:flex  
             bg-[#053162]'>

                <div className='flex flex-col lg:p-0 md:p-0 p-8 sm:p-10  '>
                    <p className='text-white text-3xl font-semibold lg:mt-0 md:mt-0 sm:mt-12 '>Not sure from where to start?</p>
                    <p className='text-white lg:w-[600px] md:w-[600px] sm:w-[200px] text-lg mt-3 '>Contact us today to schedule a consultation with our experts
                        and learn how we can help you to reach your goal with the best results.</p>
                    <div className='text-white sm:flex flex flex-col sm:flex-col md:flex-row lg:flex-row gap-4   mt-5 '>
                        <button className='text-black px-6 py-2.5   round bg-[#00FFFF]' >Get Free Consultation</button>
                        <button className='text-white px-6 py-2.5 round bg-[#185396]'>Book a call</button>
                    </div>
                </div>
                <div className='flex lg:pl-40 md:pl-48 hidden sm:hidden md:block lg:block  '> <img className='w-[220px] ' src="/logos/clutch.png" alt="" /></div>
            </div>
        </div>
    )
}
