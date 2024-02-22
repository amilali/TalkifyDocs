"use client";
import React from "react";
import { useChat } from "ai/react";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import MessageList from "./MessageList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Message } from "ai";
import { Input } from "./ui/Input";
import { GrChatOption } from "react-icons/gr";
import { RiOpenaiFill } from "react-icons/ri";


type Props = { chatId: number };

const ChatComponent = ({ chatId }: Props) => {
  const { data, isLoading } = useQuery({
    queryKey: ["chat", chatId],
    queryFn: async () => {
      const response = await axios.post<Message[]>("/api/get-messages", {
        chatId,
      });
      return response.data;
    },
  });

  const { input, handleInputChange, handleSubmit, messages } = useChat({
    api: "/api/chat",``
    body: {
      chatId,
    },
    initialMessages: data || [],
  });
  React.useEffect(() => {
    const messageContainer = document.getElementById("message-container");
    if (messageContainer) {
      messageContainer.scrollTo({
        top: messageContainer.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);
  return (
    <div
      className="relative h-screen w-full"
      id="message-container"
    >
      {/* header */}
      <div className="sticky top-0 inset-x-0 p-2  h-fit">
        <h3 className="text-xl font-bold text-white flex items-center">Chat With <RiOpenaiFill className="text-2xl ml-1"/></h3>
      </div>

      {/* message list */}
      <div className="w-full h-full">
    { ( <MessageList messages={messages} isLoading={isLoading} />) ? <p className="text-[#ffffff4f] flex flex-col justify-center items-center h-full"><GrChatOption className="text-3xl" />Ask Anything</p> : null}
      </div>
      <form
        onSubmit={handleSubmit}
        className="sticky bottom-0 inset-x-0 px-2 py-4 "
      ><div className="sticky bottom-0 flex bg-[#0000009d] p-2 rounded-xl">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask any question..."
            className="flex-1 mr-2 bg-[#ffffff]"
          />
          <Button className="hover:bg-blue-800">
            <Send className="h-4 w-4 text-white" />
          </Button>
        </div>

      </form>
    </div>
  );
};

export default ChatComponent;