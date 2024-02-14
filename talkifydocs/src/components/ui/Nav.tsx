
import Link from 'next/link';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';

export default function Component() {
  return ( 
    <Navbar className='fixed top-0 left-0 right-0 z-30 rounded-full mx-8 mt-2 border-r-[1px] border-l-[1px] border-cyan-500 bg-[#00000011] backdrop-blur-sm p-2 shadow-sm'>
      <NavbarBrand as={Link} href="">
        <img src="https://res.cloudinary.com/djcmgdn0x/image/upload/v1706883968/Wave_2_wunihu.svg" className="mr-3 h-6 sm:h-9" alt="TalkifyDocs" />
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold text-white">Flowbite React</span> */}
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="#" className='text-[#ffffffcf]'>
          About
        </NavbarLink>
        <NavbarLink href="#" className='text-[#ffffffcf]'>Services</NavbarLink>
        <NavbarLink href="#" className='text-[#ffffffcf]'>Pricing</NavbarLink>
        <NavbarLink href="#" className='text-[#ffffffcf]'>Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
