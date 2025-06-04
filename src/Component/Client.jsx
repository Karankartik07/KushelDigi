import React from 'react';


export default function Client() {
    const data = [
        { id: 1, img: "/logos/1f.png" },
        { id: 2, img: "/logos/2f.png" },
        { id: 3, img: "/logos/3f.png" },
        { id: 4, img: "/logos/4f.png" },
        { id: 5, img: "/logos/5f.png" },
        { id: 6, img: "/logos/6f.png" },
        { id: 7, img: "/logos/7f.png" },
    ];


    const extendedData = [...data, ...data];

    return (
        <div className='bg-[#0A0F14] p-4 overflow-hidden'>
            <h2 className='pt-8 text-white text-center'>Our Clients.</h2>
            <div className='p-9 overflow-hidden'>
                <div className='flex animate-slide lg:justify-around md:justify-between justify-evenly lg:w-[1000px] md:w-[768px] sm:w-[640px] w-[320px] gap-10 whitespace-nowrap'>
                    {
                        extendedData.map((client, index) => (
                            <div key={index} className='flex justify-center items-center max-w-[120px] min-w-[120px]'>
                                <img src={client.img} alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
