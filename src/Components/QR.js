import React from 'react'
import img from './img/image-qr-code.png'

const QR = () => {
  return (
    <div className='w-screen h-screen flex lg:h-full'>
      <div className='w-[320px] h-[497px] flex flex-col bg-white rounded-2xl mx-auto my-auto overflow-hidden lg:mt-[100px] lg:mb-[100px]'>
        <img className='w-[288px] h-[288px] rounded-2xl mx-auto mt-[16px]' src={img} alt=''></img>
        <h1 className='text-[22px] font-body font-bold text-center mx-[24px] mt-[16px] text-[#1F314F]'>Improve your front-end skills by building projects</h1>
        <p className='text-[15px] mx-[24px] mt-[16px] text-[#7D889E] text-center'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  )
}

export default QR