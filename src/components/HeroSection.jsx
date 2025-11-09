import React from 'react'
import { LayoutTextFlip } from './LayoutTextFlip'

function HeroSection() {
  return (
    <div id="home" className='flex items-center justify-center text-center px-4 sm:px-6 md:px-8 h-screen w-full'>
      <div className='flex flex-col items-center gap-4 sm:gap-6 md:gap-8 max-w-7xl w-full'>
        <h1 className='text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[120px] text-transparent bg-clip-text bg-linear-to-r from-[#4d4b4b] via-[#fcfcfc] to-[#6b696c] leading-tight mb-4 sm:mb-6 md:mb-8 mt-4 sm:mt-6 md:mt-8'>
          Learning, Building, And<br className='hidden sm:block' /> Growing
        </h1>
        <LayoutTextFlip />
      </div>
    </div>
  )
}

export default HeroSection
