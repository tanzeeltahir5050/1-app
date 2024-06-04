import React from 'react'
import bluedot from '../assets/blue-dot.png'

function Pricing() {
    return (
        <>
            <div className='rounded-[48px] bg-blue-500 py-8 my-12 mx-16 h-[770px] relative'>
                <h1 className='font-bold text-5xl text-white text-center mt-16'>Pick Your Best Plan</h1>
                <p className='font-semibold text-lg text-center px-48 py-8 text-white'>Innovative solutions designed to streamline your workflow and boost productivity.Unlock the full potential of your business with cutting-edge technology.</p>
                <div className='w-[374px] h-[644px] bg-[#FFFFFF] drop-shadow-2xl absolute top-96 left-24 rounded-[20px]'>
                    <div className='flex flex-col items-center justify-center m-4 p-4'>
                        <h1 className='text-[#333333] text-5xl font-semibold'>Free</h1>
                        <p className='font-semibold text-lg text-[#A6A6A6] mx-4 text-center'>Have a go  and test your  superpowers</p>
                        <div className='relative'>
                            <h3 className=' font-medium text-lg text-[#A6A6A6] absolute top-0 right-8'>$</h3>
                            <h1 className='text-[#333333] text-5xl'>0</h1>
                        </div>
                    </div>
                    <div className='w-[334px] h-[300px] bg-[#F9FAFB] mx-4 rounded-lg'>
                        <div className='flex w-full justify-evenly'>
                            <div>
                                <div className='mx-8 gap-3 text-[#333333] flex items-center font-medium text-lg mt-6 mb-4'>
                                    <img src={bluedot} alt="" />
                                    <p>2 Users</p>
                                </div>
                                <div className='mx-8 gap-3 text-[#333333] flex items-center font-medium text-lg mb-4'>
                                    <img src={bluedot} alt="" />
                                    <p>2 Files</p>
                                </div>
                                <div className='mx-8 gap-3 text-[#333333] flex items-center font-medium text-lg mb-4'>
                                    <img src={bluedot} alt="" />
                                    <p>Public Shares & Coments</p>
                                </div>
                                <div className='mx-8 gap-3 text-[#333333] flex items-center font-medium text-lg mb-4'>
                                    <img src={bluedot} alt="" />
                                    <p>Chat Support</p>
                                </div>
                                <div className='mx-8 gap-3 text-[#333333] flex items-center font-medium text-lg '>
                                    <img src={bluedot} alt="" />
                                    <p>New income apps</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <button className='bg-[#3585FF] text-white px-9 py-5 rounded-lg my-4'>Signup for free</button>
                    </div>
                </div>
                <div className='w-[374px] h-[654px] bg-[#FFFFFF] drop-shadow-2xl absolute top-80 left-[26rem] z-10 rounded-[20px]'>
                    <div className='flex flex-col items-center justify-center m-4 p-2'>
                        <h1 className='text-[#333333] text-5xl font-semibold'>Pro</h1>
                        <p className='font-semibold text-lg text-[#333333] mx-4 text-center'>Experiment the power of infinite possibilities</p>
                        <div className='relative'>
                            <h3 className='text-[#333333] font-medium text-lg absolute top-0 right-8'>$</h3>
                            <h1 className='text-[#333333] text-5xl'>8</h1>
                        </div>
                        <button className='font-semibold text-sm text-[#3585FF] bg-[#F9F9FA] px-4 py-1 rounded-lg'>Save $50 a year</button>
                    </div>
                    <div className='w-[334px] h-[300px] bg-[#F9FAFB] mx-4 rounded-lg'>
                        <div className='flex w-full justify-evenly'>
                            <div>
                                <div className='mx-8 gap-3 text-[#333333] flex items-center font-medium text-lg mt-6 mb-4'>
                                    <img src={bluedot} alt="" />
                                    <p>All the features of pro plan</p>
                                </div>
                                <div className='mx-8 gap-3 text-[#333333] flex items-center font-medium text-lg mb-4'>
                                    <img src={bluedot} alt="" />
                                    <p>Account success Manager</p>
                                </div>
                                <div className='mx-8 gap-3 text-[#333333] flex items-center font-medium text-lg mb-4'>
                                    <img src={bluedot} alt="" />
                                    <p>Single Sign-On (SSO)</p>
                                </div>
                                <div className='mx-8 gap-3 text-[#333333] flex items-center font-medium text-lg mb-4'>
                                    <img src={bluedot} alt="" />
                                    <p>Co-conception pogram</p>
                                </div>
                                <div className='mx-8 gap-3 text-[#333333] flex items-center font-medium text-lg '>
                                    <img src={bluedot} alt="" />
                                    <p>Collaboration-Soon</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <button className='bg-[#3585FF] text-white px-9 py-5 rounded-lg mt-4'>Goto Business</button>
                    </div>
                </div>
                <div className='w-[374px] h-[644px] bg-[#FFFFFF] drop-shadow-2xl absolute top-96 right-24 rounded-[20px]'>
                    <div className='flex flex-col items-center justify-center m-4 p-4'>
                        <h1 className='text-[#333333] text-5xl font-semibold'>Business</h1>
                        <p className='font-semibold text-lg text-[#A6A6A6] mx-4 text-center'>Unveil new superpowers and join the Design Leaque</p>
                        <div className='relative'>
                            <h3 className=' font-medium text-lg text-[#A6A6A6] absolute top-0 right-14'>$</h3>
                            <h1 className='text-[#333333] text-5xl'>16</h1>
                        </div>
                    </div>
                    <div className='w-[334px] h-[300px] bg-[#F9FAFB] mx-4 rounded-lg'>
                        <div className='flex w-full justify-evenly'>
                            <div>
                                <div className='mx-8 gap-3 text-[#333333] flex items-center font-medium text-lg mt-6 mb-4'>
                                    <img src={bluedot} alt="" />
                                    <p>All the features of pro plan</p>
                                </div>
                                <div className='mx-8 gap-3 text-[#333333] flex items-center font-medium text-lg mb-4'>
                                    <img src={bluedot} alt="" />
                                    <p>Account success Manager</p>
                                </div>
                                <div className='mx-8 gap-3 text-[#333333] flex items-center font-medium text-lg mb-4'>
                                    <img src={bluedot} alt="" />
                                    <p>Single Sign-On (SSO)</p>
                                </div>
                                <div className='mx-8 gap-3 text-[#333333] flex items-center font-medium text-lg mb-4'>
                                    <img src={bluedot} alt="" />
                                    <p>Account success Manager</p>
                                </div>
                                <div className='mx-8 gap-3 text-[#333333] flex items-center font-medium text-lg '>
                                    <img src={bluedot} alt="" />
                                    <p>Collaboration-Soon</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <button className='bg-[#3585FF] text-white px-9 py-5 rounded-lg my-4'>Goto Business</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing