// import ChatComponent from "@/components/ChatComponent";
// import ChatSideBar from "@/components/ChatSideBar";
// import PDFViewer from "@/components/PDFViewer";
// import SideBar from "@/components/ui/SideBar";

import { db } from "@/lib/db";
import { chats } from "@/lib/db/schema";
// import { checkSubscription } from "@/lib/subscription";
import { auth } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";
import React from "react";
import { SideBarLoader } from "@/app/Skeleton";

const SideBar = dynamic(() => import("@/components/ui/SideBar"), {
  loading: () => <SideBarLoader />, ssr: false,
})

type Props = {
params: {
chatId: string
}
}

const ChatPage = async({params: {chatId}}: Props) => {
    const {userId} = await auth();
    if(!userId)
    {
        return redirect('/sig-in');
    }
    const _chats = await db.select().from(chats).where(eq(chats.userId, userId));
    if (!_chats) {
        return redirect("/");
    }
    if (!_chats.find((chat) => chat.id === parseInt(chatId))) {
        return redirect("/");
    }
  return (
      <div className="min-w-dvw min-h-screen flex overflow-hidden bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-sky-600 via-sky-900 via-20% to-slate-950 to-75%">
      <div className='flex w-full max-h-screen '>
        {/* chat sidebar */}
        <div className="flex-[1] max-w-xs rounded-xl mx-1">
            <SideBar chats={_chats} chatId={parseInt(chatId)} />
        </div>
        {/* pdf viewer */}
        <div className="max-h-screen p-4 oveflow-scroll flex-[5] bg-[#00000034] rounded-xl backdrop-blur-3xl mx-1 flex items-center justify-center">
          {/* // <PDFViewer pdf_url={currentChat?.pdfUrl || ""} /> */} <center className="text-white">PDF SECTION</center>
        </div>
        {/* chat component */}
        <div className="flex-[3] bg-[#00000034] backdrop-blur-3xl rounded-xl mx-1 flex items-center justify-center">
          {/* <ChatComponent chatId={parseInt(chatId)} /> */} <center className="text-white">CHAT SECTION</center>
        </div>
      </div>
    </div>
  )
}

export default ChatPage