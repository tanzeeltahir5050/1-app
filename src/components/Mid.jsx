import React from 'react'
import img from '../assets/mid-image.png'
import img2 from '../assets/mid-image-2.png'
import bluedot from '../assets/blue-dot.png'

function Mid() {
    return (
        <>
            <div className='rounded-[48px] min-w-full md:w-[498px] h-auto bg-[#F9F9FA] py-8 my-12 flex items-center justify-evenly flex-col md:flex-row'>
                <div className=' md:w-[1240px]'>
                    <img src={img} alt="" width={492} height={427} />
                </div>
                <div>
                    <div className='mt-4'>
                        <h1 className='text-[#3585FF] font-bold text-3xl md:font-extrabold  md:text-[56px] leading-9 md:leading-[60.48px] mt-28'>Stay Organized in Your Life</h1>
                        <p className='font-normal text-[#333333] text-lg text-left'>Innovative solutions designed to streamline your workflow and boost productivity.Unlock the full potential of your business with cutting-edge technology.</p>
                    </div>
                </div>
            </div>

            <div className='rounded-[48px]  min-w-full md:w-[498px] h-auto bg-[#F9F9FA] py-8 my-12 flex items-center justify-between'>
                <div className='flex w-full justify-evenly flex-col md:flex-row'>
                    <div>
                        <h1 className='text-[#333333] font-bold leading-9 md:leading-[60.51px]  text-2xl md:text-[50px] mx-8'>What Benefits Will You Get</h1>
                        <div className='mx-8 gap-5 flex items-center font-medium text-lg mt-10 mb-5 md:mb-10'>
                            <img src={bluedot} alt="" />
                            <p>Free Consulting With Experet Saving Money</p>
                        </div>
                        <div className='mx-8 gap-5 flex items-center font-medium text-lg mb-5 md:mb-10 '>
                            <img src={bluedot} alt="" />
                            <p>Online Banking</p>
                        </div>
                        <div className='mx-8 gap-5 flex items-center font-medium text-lg mb-5 md:mb-10 '>
                            <img src={bluedot} alt="" />
                            <p>Investment Report Every Month</p>
                        </div>
                        <div className='mx-8 gap-5 flex items-center font-medium text-lg mb-5 md:mb-10 '>
                            <img src={bluedot} alt="" />
                            <p>Saving Money For The Future</p>
                        </div>
                        <div className='mx-8 gap-5 flex items-center font-medium text-lg mb-5 md:mb-10 '>
                            <img src={bluedot} alt="" />
                            <p>Online Transection</p>
                        </div>
                    </div>
                    <div>
                        <img src={img2} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mid