import { Button } from "@/components/ui/button";
import '../app/style.css';
import { UserButton, auth } from "@clerk/nextjs";
import Link from 'next/link';
import { LogIn } from "lucide-react";
import { Theme } from '@radix-ui/themes';

export default async function Home() {
  const authData = await auth();
  const userId = authData.userId;
  const isAuth = !!userId;

  return (
    <Theme appearance="light" accentColor="mint">
      <div className="w-screen min-h-screen bg-gradient-to-br from-sky-400 to-blue-700 flex items-center justify-center">
        <div className="text-center">
          <div className="flex items-center mb-4">
            <img
              src="https://res.cloudinary.com/djcmgdn0x/image/upload/v1703599406/Group_3602_1_zkvanv.png"
              alt=""
              className="w-full h-40 object-contain"
            />

          </div>

          <div className="flex mt-4 justify-center">
            {isAuth && (
              <Button className="btn p-2"><UserButton afterSignOutUrl='/' />
                <h5 className="m-2">Go to Chats</h5><LogIn className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>

          <p className="text-xs md:text-sm lg:text-sm max-w-xl mx-auto mt-4">
            Join millions of students, researchers, and professionals to instantly answer questions and understand research with AI.
          </p>


          <div className="w-full mt-4">
            {isAuth ? (
              <h1>file upload</h1>
            ) : (
              <Link href="/sign-in">
                <Button className="btn">
                  Login to get started
                  <LogIn className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>
          <p className="text-xs md:text-sm lg:text-sm max-w-xl mx-auto mt-4">Made with &#10084; Amil Ali</p>
        </div>
      </div>
    </Theme>
  );
}
