import { SignIn } from "@clerk/nextjs";
import '../../../app/style.css'
import { Divide } from "lucide-react";
export default function Page() {
    return (
        <div className="min-h-screen w-screen flex justify-center items-center bg-gradient-to-br from-sky-400 to-blue-700">
            <SignIn  /> 
        </div>

    );
}