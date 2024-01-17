import React from 'react';
import Marquee from "react-fast-marquee";
import Logo from '@/components/ui/Logo';

const Testimonials = () => {
  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <Marquee
        speed={25}
        gradient={false}
        gradientColor="#62B1FF"
        className='w-screen mt-10'
        direction="right"
        pauseOnHover={true}
        // style={{ transform: 'rotate(-5deg)', overflow: 'hidden' }}
      >
        <Logo link='https://res.cloudinary.com/djcmgdn0x/image/upload/v1703926537/Group_3606_gxlvha.png' name='TalkifyDocs'/>
        <Logo link='https://res.cloudinary.com/djcmgdn0x/image/upload/v1703926537/Group_3607_cgieow.png' name='TalkifyDocs'/>
        <Logo link='https://res.cloudinary.com/djcmgdn0x/image/upload/v1703926537/Group_3609_csunzs.png' name='TalkifyDocs'/>
        <Logo link='https://res.cloudinary.com/djcmgdn0x/image/upload/v1703926535/Group_3608_fujcdo.png' name='TalkifyDocs'/>
        <Logo link='https://res.cloudinary.com/djcmgdn0x/image/upload/v1703926531/test-1_yzqglv.png' name='TalkifyDocs'/>
      </Marquee>
    </div>
  );
};

export default Testimonials;
