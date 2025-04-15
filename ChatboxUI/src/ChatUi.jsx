import React from "react";
import Chat from "./Chat";
import Message from "./Message";
import { useState } from "react";

function ChatUi() {
     const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="min-h-screen bg-red-100">
      {" "}
      <div className="max-w-screen-2xl mx-auto px-4 pt-10">
        <div className="flex gap-4 bg-white rounded-xl shadow-md overflow-hidden min-h-[80vh] p-5">
          <Chat onSelectChat={setSelectedChat} />
          <Message chat={selectedChat} />
        </div>
      </div>
    </div>
  );
}

export default ChatUi;
