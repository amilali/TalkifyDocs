import 'dotenv/config';
import { Button } from "@/components/ui/button";
import '../app/style.css';
import { UserButton, auth } from "@clerk/nextjs";
import Link from 'next/link';
import { LogIn } from "lucide-react";
import { Theme } from '@radix-ui/themes';
import FileUpload from "@/components/ui/FileUpload";
import dynamic from 'next/dynamic'
import Skeleton from './Skeleton';
import { CircularAvatar } from '../components/CircularAvatar';
import { Ratingg } from '../components/Rating';
import Nav from '@/components/ui/Nav';
import { MyFooter } from '@/components/ui/Footer';
import Hoding from '@/components/ui/Hoding';
import Accodian from '@/components/ui/Accodian';

const Testimonials = dynamic(() => import('../components/ui/Testimonials'), {
  loading: () => <div className='flex w-screen overflow-hidden m-2'> <Skeleton className='flex-initial mx-4 w-full overflow-hidden' /> <Skeleton className='flex-initial mx-4 w-full' /> <Skeleton className='flex-initial mx-4 w-full' /></div>, ssr: false,
})

export default async function Home() {
  const authData = await auth();
  const userId = authData.userId;
  const isAuth = !!userId;

  return (
    <>
      <Theme appearance="light" accentColor="mint" suppressHydrationWarning>
        <div className="min-w-dvw min-h-screen bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-sky-600 via-sky-900 via-10% to-slate-950 to-25% flex items-center justify-center">
          <div className="text-center w-screen ">
            <div className="animate-slideIn [--slideIn-d:300ms] opacity-0 flex items-center mb-4">
              <img
                src="https://res.cloudinary.com/djcmgdn0x/image/upload/v1703599406/Group_3602_1_zkvanv.png"
                alt=""
                className="w-screen h-44 mt-16 object-contain"
              />
            </div>

            <div className="min-w-screen mt-4 flex flex-col justify-center items-center ">
              {isAuth ? (
                <>
                  <FileUpload />
                  <div className="animate-slideIn-500 opacity-0 flex mt-4 justify-center">
                    {isAuth && (
                      <span className='flex items-center'>
                        <span className="relative ring-sky-500 ring-inset">
                          <span className="absolute inset-0 animate-ping rounded-full bg-sky-400 opacity-90 ring-2 ring-sky-50 ring-inset"></span>
                          <UserButton afterSignOutUrl='/' />
                        </span>

                        <Button className="btn p-4 mx-2 relative">
                          <h5 className="m-2">Go to Chats</h5>
                          <LogIn className="w-4 h-4 ml-2" />
                        </Button>
                      </span>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <a href="#" className="animate-slideIn-500 inline-flex justify-between items-center py-1 px-1 pe-4 mb-2 text-sm text-white bg-gradient-to-l from-5% from-[#1ed2ff0f] to-[#1ed2ff2b] to-50% rounded-full border">
                    <span className="text-sm font-medium pl-2">Now powered by the magic of GPT-4✨</span>
                    <svg className="w-2.5 h-2.5 ms-2 rtl:rotate-180 animate-reflection" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                    </svg>
                  </a>

                  <p className="animate-slideIn-500 opacity-0  text-xl md:text-xl  lg:text-5xl max-w-5xl font-extrabold mx-auto my-2 bg-gradient-to-t from-5% from-[#ffffff0c] via-transparent via-5% to-[#d1d1d1] to-40% inline-block text-transparent bg-clip-text">
                    PDF Made Effortlessly Cool with AI Magic! </p>
                  <em className='animate-slideIn-500 opacity-0  text-sm md:text-sm lg:text-xs max-w-4xl text-[#ffffff9c]'>Experience the future of document management where AI meets innovation. Our platform effortlessly transforms your files into digital marvels, simplifying your workflow and enhancing productivity</em>
                  <Link href="/sign-in">
                    <Button className="animate-slideIn-500 opacity-0 relative z-50 btn">
                      Start Chatting - <i className='underline underline-offset-4 decoration-3 decoration-solid decoration-blue-200'>it's free</i>
                      <LogIn className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <div className='animate-slideIn-700 opacity-0 Rating'>
                <CircularAvatar /><Ratingg />
                  </div><Hoding /> 
                {/* <div className='w-screen mx-12'><Accodian /></div> */}
                  <Nav />
                </>
              )}
            </div>
            {(!isAuth) ? <div className='min-h-dvh relative mt-20  bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-sky-600 via-sky-700 via-10% to-slate-950 to-60%'>

              <Testimonials />
              <MyFooter />
            </div> : null}
          </div>
        </div>

      </Theme>
    </>
  );
}

