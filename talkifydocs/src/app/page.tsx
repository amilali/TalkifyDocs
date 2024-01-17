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
import { TopBanner } from '@/components/TopBanner';
import { Ratingg } from '../components/Rating';

const Testimonials = dynamic(() => import('../components/ui/Testimonials'), {
  loading: () => <div className='flex w-screen overflow-hidden m-2'> <Skeleton className='flex-initial mx-4 w-full overflow-hidden' /> <Skeleton className='flex-initial mx-4 w-full' /> <Skeleton className='flex-initial mx-4 w-full' /></div>, ssr: false,
})

export default async function Home() {
  const authData = await auth();  // get the auth data
  const userId = authData.userId;
  const isAuth = !!userId;

  return (
    <>
      <Theme appearance="light" accentColor="mint">

        <div className="min-w-dvw min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 via-sky-600 via-10% to-slate-950 to-60% flex items-center justify-center">
          <div className="text-center w-screen">
            <div className="flex items-center mb-4">
              <img
                src="https://res.cloudinary.com/djcmgdn0x/image/upload/v1703599406/Group_3602_1_zkvanv.png"
                alt=""
                className="w-screen h-44 mt-10 object-contain"
              />
            </div>

            <div className="min-w-screen mt-4 flex flex-col justify-center items-center">
              {isAuth ? (
                <>
                  <FileUpload />
                  <div className="flex mt-4 justify-center">
                    {isAuth && (
                      <span className='flex items-center'>
                        <span className="relative ring-sky-500 ring-inset">
                          <span className="absolute inset-0 animate-ping rounded-full bg-sky-400 opacity-90 ring-2 ring-sky-50 ring-inset"></span>
                          <UserButton afterSignOutUrl='/' />
                        </span>

                        <Button className="btn p-2 relative mx-2">
                          <h5 className="m-2">Go to Chats</h5>
                          <LogIn className="w-4 h-4 ml-2" />
                        </Button>
                      </span>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <p className="text-xs  md:text-sm lg:text-sm max-w-xl mx-auto mt-4 ">
                    Join millions of students, researchers, and professionals to instantly answer questions and understand research with AI.
                  </p>
                  <Link href="/sign-in">
                    <Button className="btn border-emerald-500 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
                      Start Chatting - <i className='underline underline-offset-4 decoration-3 decoration-solid decoration-blue-200'>it's free</i>
                      <LogIn className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <div className='Rating'><CircularAvatar /><Ratingg /></div>
                  <Testimonials />
                  <p className="text-xs md:text-sm lg:text-sm max-w-xl mx-auto mt-4 bottom-0">
                    Made with &#10084; by <Link href="https://www.linkedin.com/in/amilali/" target="_blank" className="underline font-medium">Amil Ali</Link> 🚀
                  </p><TopBanner />
                </>
              )}
            </div>
          </div>
        </div>

      </Theme>
    </>
  );
}

