'use client';
import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from 'flowbite-react';
import {BsGithub, BsLinkedin, BsTwitterX } from 'react-icons/bs';
import { Parallax, useParallax } from 'react-scroll-parallax';

export function MyFooter() {
const mage1 = useParallax<HTMLDivElement>({
    scale: [0.8, 1, 'easeInQuad'],
    // translateX: [20, 0],
    opacity: [0.5, 1,'easeOutQuint'],
    speed: 5,
  });

  return (  
    <Footer container className='bg-[#00000061] backdrop-blur-3xl absolute bottom-0 mark1' >
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Parallax scaleZ={[0, 10, 'easeInOut']}  opacity={[0.1,1]}>
                <img className='w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain' src="https://res.cloudinary.com/djcmgdn0x/image/upload/v1706939138/wave-glow_lc2dyd.svg" alt="TalkifyDocs Logo" />
            </Parallax>
          </div>
          <div ref={mage1.ref} className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 text-justify">
            <div>
              <FooterTitle title="about"/>
              <FooterLinkGroup col >
                <FooterLink href="#">Developers</FooterLink>
                <FooterLink href="#">Copyright</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Follow us" />
              <FooterLinkGroup col>
                <FooterLink href="#">Github</FooterLink>
                <FooterLink href="#">Discord</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" />
              <FooterLinkGroup col >
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="TalkifyDocs™ by Amil Ali" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" icon={BsLinkedin} className='hover:text-white'/>
            <FooterIcon href="#" icon={BsTwitterX} className='hover:text-white' />
            <FooterIcon href="#" icon={BsGithub} className='hover:text-white' />
          </div>
        </div>
      </div>
    </Footer>
  );
}
