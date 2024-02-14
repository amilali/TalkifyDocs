
import React from 'react'

const GradientShapes = () => {
  return (
    <div className='relative w-full max-w-lg'>
    <div className='absolute w-72 h-72 -left-4 top-0 bg-sky-400 rounded-full mix-blend-multiply filter blur-xl opacity-70'></div>
    <div className='absolute w-72 h-72 -right-4 top-0 bg-slate-400 rounded-full filter blur-xl opacity-70'></div>
    </div>
  )
}

export default GradientShapes