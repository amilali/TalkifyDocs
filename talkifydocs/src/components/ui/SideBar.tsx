
'use client';
import { DrizzleChat } from "@/lib/db/schema";
import { Suspense } from 'react'
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Sidebar, Badge } from 'flowbite-react';
import { HiArrowSmRight, HiOutlineChatAlt2 } from 'react-icons/hi';
import './ui.css';
import Link from "next/link";
import { SideBarLoader } from '@/app/Skeleton';
import { FaWandMagicSparkles } from "react-icons/fa6";


const customTheme: CustomFlowbiteTheme['sidebar'] = {
  root: {
    inner: 'bg-[#00000012] backdrop-blur-xl h-full'
  }
}

type Props = {
  chats: DrizzleChat[];
  chatId: number;
  isPro: boolean;
};
export default async function SideBar({ chats, chatId }: Props) {
  return (
    <Sidebar theme={customTheme} aria-label="Sidebar with logo branding example" >
      <Sidebar.Logo href="#" img="https://res.cloudinary.com/djcmgdn0x/image/upload/v1706939138/wave-glow_lc2dyd.svg" className="object-cover h-16 w-20 text-sm" imgAlt="TalkifyDocs">
        <h6 className="text-lg text-white">TalkifyDocs</h6>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup className="">

          <Sidebar.Item href="#" icon={HiArrowSmRight} className='Chatbtn mx-1'>
            New Chat
          </Sidebar.Item>
          {/* <Suspense fallback={}> */}
            <div className="overflow-y-auto h-auto">
            {chats.map((chat) => (
              <Sidebar.Item className='bg-[#09577341] text-[#ffffffa9] hover:bg-[#5587a681] hover:text-white mx-1 mb-1' href="#" icon={HiOutlineChatAlt2}>
                 <div className='flex w-full mx-1 rounded'>
                <Link key={chat.id} href={`/chat/${chat.id}`}>
                  <p className="overflow-hidden text-sm truncate whitespace-nowrap text-ellipsis">
                    {chat.pdfName}
                  </p>
                </Link>
                </div>
              </Sidebar.Item>
            ))}
          </div>
          {/* </Suspense> */}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
      <Sidebar.CTA className="bg-[#030813ee] backdrop-blur-sm absolute bottom-0 left-0 mx-1 my-2">
        <div className="mb-3 flex items-center ">
          <div className="flex p-1 items-center bg-gradient-to-l from-5% from-[#1ed2ff0f] to-[#1ed2ff2b] to-50% rounded-full">
          <FaWandMagicSparkles className="w-[36px] text-white"/>
          <Badge className="bg-transparent text-sm text-white">Upgrade Plan</Badge></div>
          <button
            aria-label="Close"
            className="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-transparent p-1 text-white hover:bg-transparent hover:text-red"
            type="button"
          >
            <svg
              aria-hidden
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="mb-3 text-sm text-[#e0e0e06f] dark:text-gray-400 text-justify">
          Discover enhanced features with TalkifyDocs' upgraded navigation. Preview now and upgrade your plan for seamless navigation. Limited time offer—don't miss out!
        </div>
      </Sidebar.CTA>
    </Sidebar>
  );
}
