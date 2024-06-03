import React from 'react'
import feature1 from '../assets/feature1.png'
import feature2 from '../assets/feature2.png'
import feature3 from '../assets/feature3.png'
function Features() {
    return (
        <>
            <div className='rounded-[48px] h-auto bg-[#F9F9FA] py-8 my-12 mx-16'>
                <h1 className='text-center text-[#333333] font-bold text-5xl'>Our Features you can get</h1>
                <div className='flex w-full justify-around gap-4 mt-12'>
                    <div>
                        <img src={feature1} alt="" />
                        <h1 className='text-3xl text-[#333333] font-semibold py-2 px-4'>Collboration Teams </h1>
                        <p className='text-lg font-medium text-[#A6A6A6] py-2 px-4'>Here you can handle projects together with team virtually</p>
                    </div>
                    <div>
                        <img src={feature2} alt="" />
                        <h1 className='text-3xl text-[#333333] font-semibold py-2 px-4'>Cloud Storage </h1>
                        <p className='text-lg font-medium text-[#A6A6A6] py-2 px-4'>No nedd to worry about storage because we provide storage up to 2 TB</p>
                    </div>
                    <div>
                        <img src={feature3} alt="" />
                        <h1 className='text-3xl text-[#333333] font-semibold py-2 px-4'>Daily Analytics </h1>
                        <p className='text-lg font-medium text-[#A6A6A6] py-2 px-4'>We always provide useful informatin to make it easier for you every day</p>
                    </div>
                </div>
                <div className='text-center m-6'>
                    <button className='rounded-lg bg-[#3585FF] text-white text-lg font-semibold py-5 px-9'>Get Started</button>
                </div>
            </div>
        </>
    )
}

export default Features