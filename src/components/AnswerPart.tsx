import React, { FC } from 'react'
import Norris from '../assets/img/chuckNorris.png'
import Loader from './Loader'

type AnswerType = {
    joke:string
    loading:boolean
}

const AnswerPart:FC<AnswerType> = ({joke,loading}) => {
  return (
    <div className='relative'>
        <img className='absolute right-0 -z-10 bottom-[60px]' src={Norris} alt="Chuck Norris" />
        <div className='h-[162px] p-[24px] mt-[150px] rounded-[25px] bg-[#422ED4] shadow-[0_px_ 100_px_80_px_rgba(80,76,103,0.07),_0_px_0_px_10.0172_px_rgba(80,76,103,0.035)]'>
            {
                loading ? <h2 className='text-white text-[20px] font-semibold'>Typing...</h2> : <h2 className='text-white text-[20px] font-semibold'>{joke}</h2>
            }
        </div>
    </div>
  )
}

export default AnswerPart