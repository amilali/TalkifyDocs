import { SignIn } from "@clerk/nextjs";
import '../../../app/style.css'; // You may need to adjust the path based on your project structure
import { Divide } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-400 to-slate-950 overflow-x-auto">
      <div className="w-1/2 h-1/2 flex justify-center items-center">
        <SignIn />
      </div>
      <div className="hidden md:block w-1/2 h-1/2 overflow-hidden">
        <img
          src="https://res.cloudinary.com/djcmgdn0x/image/upload/v1704714998/avatar_y9fvrc.png"
          alt=""
          className="max-w-full object-cover h-full"
        />
      </div>
    </div>
  );
}
