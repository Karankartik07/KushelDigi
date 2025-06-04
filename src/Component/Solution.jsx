import React from 'react';

const steps = [
  {
    number: 1,
    title: 'Strategy',
    description:
      'We dive deep into your business requirements and develop detailed development plan with key deliverables, budget, and timeline',
  },
  {
    number: 2,
    title: 'Design',
    description:
      'Initially, you will receive prototypes for three main pages: product page, category page, and homepage. After testing and optimizing their UI/UX, we get your approval and move to design your actual store',
  },
  {
    number: 3,
    title: 'Development',
    description:
      'You can always choose a pre-built theme for your store. However, if you want to stand out, we will create a custom design that meets your customers’ expectations and business objectives',
  },

];

const steps2 = [
  {
    number: 4,
    title: 'Consulting & IT staff',
    description:
      'We construct your ecommerce architecture from the ground up, customize all website features, and import customers and products into your store. The development phase is delivered in sprints, and you’ll have a dedicated project manager reporting on the milestones and details',
  },
  {
    number: 5,
    title: 'Support',
    description:
      'We construct your ecommerce architecture from the ground up, customize all website features, and import customers and products into your store. The development phase is delivered in sprints, and you’ll have a dedicated project manager reporting on the milestones and details',
  },
]

export default function Solution() {
  return (
    <section className="px-6 mt-[530px] py-12 max-w-6xl mx-auto text-center">
      <p className="text-4xl  font-extrabold text-gray-900">
        This Is How We Create Solutions
      </p>
      <p className=" text-4xl text-black  mb-6">
        People become addicted to
      </p>
      <p className="text-gray-700 max-w-3xl lg:w-[62%] text-lg mx-auto mb-12">
        We are an end-to-end e-Commerce agency offering services falling under Digital Media, whether you need a content based introductory website or a database driven eCommerce website or any complex business web solution to digitize your business processes and maximize the productivity of your team.
      </p>

      <div className="grid gap-12  pb-13 mt-[100px] border-t pr-15  relative border-r  border-[#0B60FF]  sm:grid-cols-2 lg:grid-cols-3">
        <img src="/logos/tick.png" className=' absolute -top-4 bg-white ' alt="" />
        <img src="/logos/tick.png" className=' lg:absolute hidden sm:hidden md:hidden lg:block -top-4 left-[360px] bg-white ' alt="" />
        <img src="/logos/tick.png" className=' hidden sm:hidden md:hidden lg:block lg:absolute lg:-top-4 left-[727px] bg-white ' alt="" />
        {steps.map((step) => (

          <div key={step.number} className="relative mt-5 text-left  rounded-2xl ">

            <div className="absolute -top-5 mt-3 lg:ml-0 md:ml-0 sm:ml-2 ml-10   bg-white border-2 border-dotted border-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-blue-500 font-bold">
              {step.number}

            </div>
            <h3 className="text-lg mt-5 lg:pl-0 md:pl-0 sm:pl-2 pl-10 font-semibold text-gray-900 ">
              {step.title}
            </h3>
            <p className="text-md text-gray-400 lg:pl-0 md:pl-0 sm:pl-2 pl-10 mt-2">
              {step.description}
            </p>

          </div>
        ))}
      </div>
      <div className="grid gap-12  border-t   relative  border-[#0B60FF]  sm:grid-cols-2 lg:grid-cols-3">
        <img src="/logos/tick.png" className=' absolute -top-4 bg-white ' alt="" />
        <img src="/logos/tick.png" className=' absolute -top-4 hidden sm:hidden md:hidden lg:block left-96 bg-white ' alt="" />

        {steps2.map((step) => (

          <div key={step.number} className="relative mt-5 text-left  rounded-2xl ">

            <div className="absolute -top-5 mt-3 lg:ml-0 md:ml-0 sm:ml-2 ml-10  bg-white border-2 border-dotted border-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-blue-500 font-bold">
              {step.number}

            </div>
            <h3 className="text-lg mt-5 lg:pl-0 md:pl-0 sm:pl-2 pl-10 font-semibold text-gray-900 ">
              {step.title}
            </h3>
            <p className="text-md lg:pl-0 md:pl-0 sm:pl-2 pl-10 lg:pr-0 md:pr-0 sm:pr-2 pr-10 text-gray-400 mt-2">
              {step.description}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}
