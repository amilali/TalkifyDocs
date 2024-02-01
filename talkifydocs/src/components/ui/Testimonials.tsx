import React from 'react';
import Marquee from "react-fast-marquee";
import Logo from '@/components/ui/Logo';

const Testimonials = () => {
  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <Marquee
        speed={25}
        gradient={false}
        gradientColor="#020617"
        gradientWidth={100}
        className='w-screen mt-10'
        direction="right"
        pauseOnHover={true}
        // style={{ transform: 'rotate(-5deg)', overflow: 'hidden' }}
      >
        <Logo link='https://res.cloudinary.com/djcmgdn0x/image/upload/v1706805921/Group_3616_k6ave3.png' name='TalkifyDocs'/>
        <Logo link='https://res.cloudinary.com/djcmgdn0x/image/upload/v1706805921/Group_3609_3_ucw1mv.png' name='TalkifyDocs'/>
        <Logo link='https://res.cloudinary.com/djcmgdn0x/image/upload/v1706805921/Group_3609_2_omcnhh.png' name='TalkifyDocs'/>
        <Logo link='https://res.cloudinary.com/djcmgdn0x/image/upload/v1706805922/Group_3609_5_nu682v.png' name='TalkifyDocs'/>
        <Logo link='https://res.cloudinary.com/djcmgdn0x/image/upload/v1706805921/Group_3609_4_y4xbdd.png' name='TalkifyDocs'/>
      </Marquee>
    </div>
  );
};

export default Testimonials;
