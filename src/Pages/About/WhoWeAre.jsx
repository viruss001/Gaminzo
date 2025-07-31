import React from 'react'

const WhoWeAre = ({theme}) => {
    const isDark = theme =="dark"
  return (
    <>
    <div className="max-w-4xl text-justify relative z-10">
        <h2 className='text-2xl md:text-3xl font-bold text-yellow-600 mb-6 px-[5rem]'>
            WHO WE ARE
        </h2>
    </div>
    <p className={`${isDark?"text-white":"text-gray-700"} leading-loose text-lg leading-relaxed mb-6 text-bold px-[5rem]`}>
    Gaminzo is the flagship brand of NextGen Edutainment Private Limited, created to bridge the gap between gaming, learning, and fantasy challenges. We believe gaming should be more than just entertainment—it should be a platform for knowledge, strategy, and growth. Our mission is to deliver intelligent, interactive, and rewarding experiences for players who love a challenge
    </p>
    </>
  )
}

export default WhoWeAre