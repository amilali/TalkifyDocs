'use client';
import React from 'react';
import { Parallax, useParallax } from 'react-scroll-parallax';
import '.././ui/ui.css'

const Hoding = () => {
const mage1 = useParallax<HTMLDivElement>({
    scale: [0, 1, 'easeOutQuint'],
    rotateX: [300, 0, 'easeOutQuint'],
    opacity: [0.2, 1, 'easeInOutBack'],
    speed: -40,
  });

const mage = useParallax<HTMLDivElement>({
    rotateX: [300, 0, 'easeOutQuint'],
    opacity: [0.2, 1, 'easeInOutBack'],
    speed: -20,
  });
  return (
<>
 <div ref={mage1.ref} className="min-w-dvw min-h-dvh rounded-md bg-transparent m-12  mix-blend-lighten">
<img src="https://res.cloudinary.com/djcmgdn0x/image/upload/v1707295590/Base_3_avy0qw.png" alt="" className='rounded-xl px-16'/> 
</div>


 <div ref={mage.ref} className="min-w-dvw min-h-dvh rounded-md bg-transparent m-12 pt-60 mix-blend-lighten flex flex-col items-center justify-between">
<Parallax className='flex-[2]' scaleZ={[0, 10, 'easeInOut']}  opacity={[0.2,1, 'easeInOutExpo']} speed={0}>  
<h1 className='flex-[1] mt-32 text-4xl mark1 text-[#ffffff95]'>How It Works</h1></Parallax>
<Parallax className='flex-[8]' scaleZ={[0, 10, 'easeInOut']}  opacity={[0.8,1]} rotateX={[120,0, 'easeOutQuint']} speed={10}>  
<img src="https://res.cloudinary.com/djcmgdn0x/image/upload/v1707414766/talkify_map_pnmgbs.svg" alt="" className='rounded-xl px-16  backdrop-blur-3xl shadow-xl'/> 
</Parallax>
</div>
</>
  )
}

export default Hoding