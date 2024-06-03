import React from 'react'
import img from '../assets/hero-img.png'
import image1 from '../assets/imges1.png'
import image2 from '../assets/imges2.png'
import image3 from '../assets/imges3.png'
import image4 from '../assets/imges4.png'
import image5 from '../assets/imges5.png'

function Hero() {
    return (
        <>
            <div className='rounded-3xl h-auto bg-[#3585FF] py-8 my-12 mx-16 flex items-center justify-between'>
                <div className=''>
                    <img src={img} width={604} height={520} alt="" />
                </div>
                <div>
                    <div className='w-[498px] h-[420px] gap-9'>
                        <h1 className='w-[498px] h-[212px] text-white font-extrabold text-[56px] leading-[67.77px] text-left py-2'>Organize Your Life Better With Our TO DO App</h1>
                        <p className='w-[488px] h-[93px] font-semibold text-white text-lg text-left px-2'>Innovative solutions designed to streamline your workflow and boot your productivity. Unlock the full potential of your business with cutting edge technology</p>
                        <div className='gap-4 w-[350px] h-[63px] flex'>
                            <button className='rounded-md  py-5 px-9 text-[#3585FF] bg-white'>Download</button>
                            <button className='rounded-md py-5 px-9 text-white bg-[#004CBF]'>Open Web App</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex items-center justify-center gap-4 my-12 mx-16'>
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                    <img src={image4} alt="" />
                    <img src={image5} alt="" />
                </div>
            </div>
        </>
    )
}

export default Hero