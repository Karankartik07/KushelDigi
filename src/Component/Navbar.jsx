import React from 'react';

export default function Navbar() {
    const data = [
        { id: 1, text: "100% Mobile Friendly" },
        { id: 2, text: "Stunning Design" },
        { id: 3, text: "Conversion Friendly Layout" },
        { id: 4, text: " Effective Call to Action" },
    ];

    return (
        <div className="w-full topNavH mb-5 min-w-[321px] mx-auto">
            <div className="flex flex-col  sm:flex-row justify-between items-center navTop w-full px-4  py-1">
                <img className="h-[54px] w-[169px] md:ml-24 mb-2 md:mb-0" src='/logos/Kds logo 1.png' alt="Kds logo" />
                <p className='md:mt-2 md:mr-20 pt-1 font-medium text-center md:text-right'>Call : +91 9045301702</p>
            </div>

            <div className='bg-[#0d99ff] lg:max-h-[580px] sm:min-h-[600px] p-3'>
                <div className="flex flex-col md:flex-row flex-wrap">
                    <div className="w-full md:w-1/2 pt-4 lg:pl-24 md:pl-14 lg:p-3 md:p-4 p-10   pl-14 sm:pl-5 sm:p-4 text-white">
                        <h1 className="text-2xl md:text-4xl font-semibold leading-snug">
                            Website Design services
                            that Maximize Traffic, Engagement And
                            Conversion
                        </h1>

                        <div className='border-l border-gray-300 mt-6 md:mt-9 pl-2'>
                            <p className='text-base md:text-lg marginset md:w-[103%]'>Improve the communication between your brand and your</p>
                            <p className='text-base md:text-lg marginset md:w-[103%]'>customers with professionally crafted design and best</p>
                            <p className='text-base md:text-lg marginset md:w-[103%]'>practices in web development</p>
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 mt-[32px]'>
                            {data.map((item, index) => (
                                <div key={index} className='flex items-center gap-2'>
                                    <img src="/logos/Mask group.png" alt="icon" />
                                    <span>{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-5 bg-white text-[#111317] text-center py-3 font-bold px-5 rounded-full w-fit  cursor-pointer hover:bg-blue-100">
                            Get Free Consultation
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center items-center p-3 lg:p-10 md:p-10">
                        <form className='bg-white rounded-xl w-full max-w-[470px] p-[18px] lg:max-h-[595px]  md:p-10 shadow-sm '>
                            <div className='flex justify-center md:flex-col lg:flex-row text-xl md:text-2xl mb-6'>
                                <p className='mr-1 text-center'>Let's Build Your</p> <span className='font-bold'>Website!</span>
                            </div>

                            <div className='flex flex-col'>
                                <input className='border-b border-gray-400 outline-none bg-transparent py-3 mb-3' placeholder='Name' type="text" />
                                <input className='border-b border-gray-400 outline-none bg-transparent py-3 mb-3' placeholder='Email' type="text" />
                                <input className='border-b border-gray-400 outline-none bg-transparent py-3 mb-3' placeholder='Phone' type="text" />
                                <textarea className='border-b border-gray-400 outline-none bg-transparent py-1 mb-2 mt-4' rows={4} placeholder="What's Your Project About"></textarea>
                                <button type="submit" className="bg-[#3666FD] text-white py-3 px-6 mt-4 round w-full md:w-[132px] h-[52px] flex justify-center items-center hover:bg-blue-600">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
