import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (<div className="animate-slideIn-500 opacity-0 min-h-screen w-screen flex justify-center items-center bg-gradient-to-br from-sky-400 to-blue-700">
    <SignUp />
  </div>);
} 