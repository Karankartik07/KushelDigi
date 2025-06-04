import React, { useState } from 'react';

export default function AskQue() {
    const [openIndex, setOpenIndex] = useState(null);

    const array = [
        {
            id: 1,
            text: "Q. What info you need to estimate cost of my App development?",
            answer: "Process of developing an App seemed overwhelming to my company. Kushel Digi has truly made this process painless with their industry knowledge, attention to detail, and a professional step-by-step development system. I look forward to using Kushel Digi moving forward with all of our future projects."
        },
        {
            id: 2,
            text: "Q. What info you need to estimate cost of my App development?",
            answer: "Process of developing an App seemed overwhelming to my company. Kushel Digi has truly made this process painless with their industry knowledge, attention to detail, and a professional step-by-step development system. I look forward to using Kushel Digi moving forward with all of our future projects."
        },
        {
            id: 3,
            text: "Q. What info you need to estimate cost of my App development?",
            answer: "Process of developing an App seemed overwhelming to my company. Kushel Digi has truly made this process painless with their industry knowledge, attention to detail, and a professional step-by-step development system. I look forward to using Kushel Digi moving forward with all of our future projects."
        },
        {
            id: 4,
            text: "Q. What info you need to estimate cost of my App development?",
            answer: "Process of developing an App seemed overwhelming to my company. Kushel Digi has truly made this process painless with their industry knowledge, attention to detail, and a professional step-by-step development system. I look forward to using Kushel Digi moving forward with all of our future projects."
        },
        {
            id: 5,
            text: "Q. What info you need to estimate cost of my App development?",
            answer: "Process of developing an App seemed overwhelming to my company. Kushel Digi has truly made this process painless with their industry knowledge, attention to detail, and a professional step-by-step development system. I look forward to using Kushel Digi moving forward with all of our future projects."
        },
        {
            id: 6,
            text: "Q. What info you need to estimate cost of my App development?",
            answer: "Process of developing an App seemed overwhelming to my company. Kushel Digi has truly made this process painless with their industry knowledge, attention to detail, and a professional step-by-step development system. I look forward to using Kushel Digi moving forward with all of our future projects."
        }
    ];

    const toggleAccordion = (id) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    return (
        <>
            <p className='text-center font-bold text-3xl lg:pt-5 md:pt-0 sm:pt-10 pt-14'>Frequently Asked Questions</p>
            <div className='flex flex-col items-center mt-16 pb-10'>
                <div className='flex items-start lg:w-[990px]'>
                    <h6>Q. What info you need to estimate cost of my App development?</h6>
                    <p className='hidden sm:hidden md:hidden lg:block ml-auto'><img src="/logos/-.png" alt="" /></p>
                </div>
                <div className='mb-2 border-gray-300 mt-3 pb-4 border-b-1'>
                    <p className='lg:w-[990px] w-[430px] sm:w-[300px] md:w-[500px] text-[11px]'>Process of developing an App seemed
                        overwhelming to my company. Kushel Digi has truly made this process
                        painless with their industry knowledge, attention to detail, and a
                        professional step-by-step development system. I look forward to using
                        Kushel Digi moving forward with all of our future projects.</p>
                </div>

                <div className=''>
                    {
                        array.map((que) => (
                            <div key={que.id} className='lg:w-[990px]'>
                                <div
                                    onClick={() => toggleAccordion(que.id)}
                                    className='flex mb-1 border-gray-300 border-b-1 items-start cursor-pointer'
                                >
                                    <p className='font-bold'>{que.text}</p>
                                    <p className='lg:ml-auto ml-2 md:ml-4'>
                                        <img src={openIndex === que.id ? "/logos/-.png" : "/logos/+.png"} alt="" />
                                    </p>
                                </div>
                                {openIndex === que.id && (
                                    <div className='lg:w-[990px] w-[430px] sm:w-[300px] md:w-[500px] text-[11px] lg:ml-0 md:ml-4'>
                                        <p className='text-sm mt-2'>{que.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}
