import React from 'react'
import img from "../assets/img/he.jpg";
const About = () => {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5'>
        
      <div className=' w-full lg:w-3/4 space-y-4'>
        <h1 className='text-4xl font-semibold text-center lg:text-start text-teal-700'>About Us</h1>
        <p className='text-justify lg:text-start'>SomaliHealthCare Specialist Hospital is a hospital, about which a Somalian mother can, with no trouble and in inner peace, take her baby to the health unit for treatment. This is a service expected and deserved by our Somalian brothers and sisters from the people of the world.
          </p>
          <p className='text-justify lg:text-start'>
          As SomaliHealthCare Association, we set to work with the slogan and principle of “No More Death Rows for Children, No More Death Watch for Mothers”, and built up a Maternity and Children’s Hospital by relying on the power and support received from our philanthropist donators.
          </p>
          <p className='text-justify lg:text-start'>
          By virtue of a bridge of hearts established by the principle of solidarity between refugees and aiders, and with the sense of religious community; SomaliHealthCare Association accepts donations from the philanthropists only to construct a hospital to contribute minimizing maternal and child mortality.
          </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  )
}

export default About
