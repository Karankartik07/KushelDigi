import React from 'react'

export default function Client() {
    var data = [
        { id: 1, img: "/logos/1f.png" },
        { id: 2, img: "/logos/2f.png" },
        { id: 3, img: "/logos/3f.png" },
        { id: 4, img: "/logos/4f.png" },
        { id: 5, img: "/logos/5f.png" },
        { id: 6, img: "/logos/6f.png" },
        { id: 7, img: "/logos/7f.png" },
    ]
    return (
        <div className='bg-[#0A0F14] p-4'>
            <h2 className=' pt-8 text-white text-center'>Our Clients.</h2>
            <div className='flex lg:justify-around md:justify-between shrink-0 gap-10 justify-evenly    p-9'>
                {
                    data.map((client) => {
                        return (
                            <div key={client.id} className=' flex justify-center items-center max-w-[120px]'><img src={client.img} alt="" /></div>
                        )
                    })
                }
            </div>
        </div>
    )
}
