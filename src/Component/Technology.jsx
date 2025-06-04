import React from 'react';

export default function Technology() {
    return (
        <>
            <div className='mt-20'>
                <div className="relative techRes">
                    <div className="absolute md:left-[180px] sm:left-[170px] lg:left-[359px] mt-7 md:w-[600px] sm:w-[200px]  lg:w-[600px] h-[323px] p-8 flex flex-col justify-center items-center bg-white rounded-lg ">
                        <h1 className="text-xl font-bold text-center mb-4"><span className=' font-extrabold'>Web Technologies</span> we love working on</h1>
                        <p className="text-center lg:w-[620px] md:w-[720px] sm:w-screen font-medium text-lg  lg:ml-0 md:ml-0 sm:ml-32 lg:p-0 md:p-0 sm:p-10   mb-6">
                            Our team of highly efficient engineers love working on various coding languages that includes
                            Node, Angular, React, Laravel, MongoDB, HTML5, PHP, ASP.NET and Wordpress. As far as the
                            front-end technologies are concerned, we undertake CSS3, Magento, CMS and object modeling.
                        </p>
                        <div className='flex mt-3 pl-4 justify-center'>
                            <button className="bg-black text-white w-[200px] p-3 round ">
                                Get Started for free
                            </button>
                        </div>
                    </div>
                </div>

                <div className='relative techRes sm:w-40'>

                    <div className='absolute max-w-full h-auto w-[110px] node hidden lg:block md:hidden sm:hidden  left-[207px]'>
                        <img src="/techno/Group 121.png" alt="icon1" />
                    </div>
                    <div className='absolute hidden lg:block md:hidden sm:hidden  max-w-full h-auto w-[110px] html top-[230px]  left-[229px]'>
                        <img src="/techno/Group 122.png" alt="icon2" />
                    </div>
                    <div className='absolute hidden lg:block md:hidden sm:hidden  max-w-full h-auto w-[110px] php  left-[1050px]'>
                        <img src="/techno/Group 123.png" alt="icon3" />
                    </div>
                    <div className='absolute hidden lg:block md:hidden sm:hidden  max-w-full h-auto w-[110px] top-[170px] vue  left-[960px]'>
                        <img src="/techno/Group 124.png" alt="icon4" />
                    </div>
                    <div className='absolute hidden lg:block md:hidden sm:hidden  max-w-full h-auto w-[110px]  top-[320px] larvel left-[850px]'>
                        <img src="/techno/Group 125.png" alt="icon5" />
                    </div>
                    <div className='absolute hidden lg:block md:hidden sm:hidden  max-w-full h-auto w-[110px] top-[300px] wordpress  left-[1100px]'>
                        <img src="/techno/Group 126.png" alt="icon6" />
                    </div>
                    <div className='absolute hidden lg:block md:hidden sm:hidden  max-w-full h-auto w-[110px] top-[320px] angular  left-[50px]'>
                        <img src="/techno/Group 127.png" alt="icon7" />
                    </div>
                    <div className='absolute hidden lg:block md:hidden sm:hidden  max-w-full h-auto w-[110px]  react top-[120px] left-[60px]'>
                        <img src="/techno/Group 130.png" alt="icon8" />
                    </div>
                </div>
            </div>
        </>
    );
}



