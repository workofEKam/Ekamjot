import React from 'react'
import CountUp from 'react-countup'
import InfiniteLogoSlider from './InfiniteLogoSlider'

function Skill() {
  return (
    <div id="skills" className='bg-black h-screen '>
      <div className='bg-white h-full rounded-t-[3rem]'>
        <div className='h-[190px] pt-10 flex items-center justify-center'>
          <InfiniteLogoSlider />
        </div>
        <div className="flex md:flex-row flex-col justify-between lg:pl-[3.76rem] lg:pr-[3.7rem] md:pl-10 md:pr-[2.7rem] px-6 pt-[2.43rem]" bis_skin_checked="1">
          <h1 className="md:text-2xl tracking-[1.5px] text-3xl urbanist">
            About
          </h1>
          <div className="w-full mt-3 sm:mt-0 lg:w-[61.2%] urbanist" >
            <p className="md:text-3xl lg:text-[2.7rem] text-xl text-gray-400 tracking-[1px] md:leading-10 lg:leading-[3.2rem]">
              <span className="text-black">
                I'm a B.Tech student specializing in Data Science at NIT Jalandhar,</span>
              skilled in Python, C++, PHP, and MySQL for building
              <span className="text-black"> data-driven and efficient solutions.</span>
              Experienced in data visualization, NLP, and automation projects,
              with a strong passion for <span className="text-black">web development and cybersecurity.</span>
            </p>

          </div>
        </div>

        <div className="flex md:w-[61.8%] w-full px-6 ml-auto items-center gap-2 md:gap-10 lg:gap-20 mt-14" bis_skin_checked="1">
          <div >
            <h1 d className="md:text-3xl text-3xl lg:text-6xl   mb-1"> <CountUp end={93} enableScrollSpy scrollSpyDelay={200} /> +</h1>
            <p>Github Commites</p>

          </div>
          <div >
            <h1 className="md:text-3xl text-3xl lg:text-6xl   mb-1"><CountUp end={15} enableScrollSpy scrollSpyDelay={200} /> +</h1>
            <p>Projects</p>
          </div>
          <div >
            <h1 className="md:text-3xl text-3xl lg:text-6xl  mb-1"><CountUp end={29} enableScrollSpy scrollSpyDelay={200} /> +</h1>
            <p>Hackathons</p>
          </div>
        </div >

      </div>

    </div>
  )
}

export default Skill
