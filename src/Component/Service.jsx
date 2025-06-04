import React from 'react';

export default function Service() {
    return (
        <div className='mt-5 serv1'>
            <div className='p-4'>
                <p className='text-center font-extrabold text-[38px]'>Service We Provide</p>
                <p className='text-center text-lg mt-2'>
                    We Cultivate a Collaborative bond with our client, akin to friendship to ensure <br />
                    the delivery of optimal and tailored solution
                </p>
            </div>

            <div className="flex justify-center items-center">
                <div className="p-[28px] lg:p-12  bg-[#F8DB46] serv2 flex flex-col md:flex-row  md:flex-nowrap w-[95%] lg:w-[85%] rounded-[40px] mb-3 gap-4  md:h-[22rem]">

                    <div className="bg-white serv3 p-3 pt-4 rounded-[20px] w-full md:w-1/4 flex flex-col items-start justify-start ">
                        <img className='mb-3 w-10' src="/logos/Group 107 (1).png" alt="UI/UX" />
                        <p className='mb-2.5 font-semibold text-lg'>UI/UX</p>
                        <p className=' overflow-hidden'>Crafting User-Centric UI/UX elevates brands, drives engagement, fuels growth.</p>
                    </div>

                    <div className="bg-white serv3 p-3 pt-4 rounded-[20px] w-full md:w-1/4 flex flex-col items-start justify-start ">
                        <img className='mb-3 w-10' src="/logos/Layer_1.png" alt="Website Design" />
                        <p className='mb-2.5 font-semibold text-lg'>Website Design</p>
                        <p className=' overflow-hidden'>Our expertise in Website Design ensures engaging solutions driving business success.</p>
                    </div>

                    <div className="bg-white serv3 p-3 pt-4 rounded-[20px] w-full md:w-1/4 flex flex-col items-start justify-start ">
                        <img className='mb-3 w-10' src="/logos/Layer_1 (1).png" alt="Web Development" />
                        <p className='mb-2.5 font-semibold text-lg'>Web Development</p>
                        <p className=' overflow-hidden'>Engineering stellar web apps, where excellence meets digital ingenuity flawlessly.</p>
                    </div>

                    <div className="bg-white serv3 p-3 pt-4 rounded-[20px] w-full md:w-1/4 flex flex-col items-start justify-start">
                        <img className='mb-3 w-13' src="/logos/Layer_1 (2).png" alt="Responsive Design" />
                        <p className='mb-2.5 font-semibold text-lg'>Responsive Design</p>
                        <p className=' lg:overflow-visible md:overflow-hidden'>Look like readable English. Many desktop publishing packages and web page editors now use.</p>
                    </div>

                </div>
            </div>

            <div className="mt-3 flex justify-center items-center">
                <button className="bg-black w-[175px] text-white px-6 py-2.5 round hover:bg-gray-800">Get Started</button>
            </div>
        </div>
    );
}
