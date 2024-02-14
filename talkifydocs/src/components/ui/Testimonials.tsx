'use client';
import React from 'react';
import Marquee from "react-fast-marquee";
import Logo from '@/components/ui/Logo';
import { Parallax, useParallax } from 'react-scroll-parallax';

const Testimonials = () => {
 const mage = useParallax<HTMLDivElement>({
    // scale: [0.8, 1, 'easeInQuad'],
    // translateX: [10, 0],
    opacity: [0, 1.5,'easeInQuad'],
    speed: -5,
  });
const mage1 = useParallax<HTMLDivElement>({
    // scale: [0.8, 1, 'easeInQuad'],
    // translateX: [20, 0],
    opacity: [0, 0.5,'easeOutQuint'],
    speed: -5,
  });
  return (
    <div className="" style={{ width: '100%', overflow: 'hidden' }}>
<div className='flex justify-center'> <h4 ref={mage1.ref} className='mark1 text-md text-[#ffffffa2] self-end'>Don't just believe us, </h4>
<h1 ref={mage.ref} className='mark1 text-2xl bg-gradient-to-t from-5% from-slate-950 via-cyan-700 to-sky-400 inline-block text-transparent bg-clip-text ml-1'>Listen to what the community says!</h1></div>
  
 <Parallax scaleZ={[0, 10, 'easeInOut']}  rotateX= {[60, 0]} opacity={[0.1,1]}>
      <Marquee
        speed={35}
        gradient={false}
        gradientColor="#020617"
        gradientWidth={100}
        className='w-screen mt-10'
        direction="right"
        pauseOnHover={true}
      >
        <Logo link='https://res.cloudinary.com/djcmgdn0x/image/upload/v1706805921/Group_3616_k6ave3.png' name='TalkifyDocs'/>
        <Logo link='https://res.cloudinary.com/djcmgdn0x/image/upload/v1706805921/Group_3609_3_ucw1mv.png' name='TalkifyDocs'/>
        <Logo link='https://res.cloudinary.com/djcmgdn0x/image/upload/v1706805921/Group_3609_2_omcnhh.png' name='TalkifyDocs'/>
        <Logo link='https://res.cloudinary.com/djcmgdn0x/image/upload/v1706805922/Group_3609_5_nu682v.png' name='TalkifyDocs'/>
        <Logo link='https://res.cloudinary.com/djcmgdn0x/image/upload/v1706805921/Group_3609_4_y4xbdd.png' name='TalkifyDocs'/>
      </Marquee>
</Parallax>
    </div>
  );
};

export default Testimonials;
// bg-gradient-to-r from-[#020817] via-transparent to-[#111827]