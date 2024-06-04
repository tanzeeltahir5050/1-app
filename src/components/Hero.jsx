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
            <div className='rounded-3xl min-w-full md:w-[498px] h-auto bg-[#3585FF] md:py-8 my-12 flex items-center justify-evenly flex-col md:flex-row'>
                <div className=''>
                    <img src={img} width={604} height={520} alt="" />
                </div>
                <div>
                    <div className='w-screen md:w-[498px] h-auto md:h-[420px] gap-9'>
                        <h1 className=' text-white font-extrabold text-3xl md:text-[56px] leading-9 md:leading-[67.77px] text-center md:text-left py-2'>Organize Your Life Better With Our TO DO App</h1>
                        <p className='font-semibold text-white text-lg text-center md:text-left my-6'>Innovative solutions designed to streamline your workflow and boot your productivity. Unlock the full potential of your business with cutting edge technology</p>
                        <div className='w-screen md:w-[350px] h-[63px] flex items-center gap-4 justify-center'>
                            <button className='rounded-md  py-2 md:py-5 px-4 md:px-9 text-[#3585FF] bg-white'>Download</button>
                            <button className='rounded-md py-2 md:py-5 px-4 md:px-9 text-white bg-[#004CBF]'>Open Web App</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex items-center justify-center gap-4 my-12 mx-16 flex-wrap'>
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