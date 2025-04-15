import { useState, useRef, useEffect } from "react";
import { IoSend } from "react-icons/io5";

const messagesByChatId = {
  1: [
    {
      from: "me",
      text: "Hey Andrew, sent you a link earlier.",
      time: "10:30 am",
    },
    { from: "them", text: "Yeah, I saw it. Looks good!", time: "10:35 am" },
  ],
  2: [
    { from: "me", text: "Hi Charlotte, hope you're well!", time: "09:00 am" },
    { from: "them", text: "Thanks! You too.", time: "09:10 am" },
  ],
  3: [
    {
      from: "me",
      text: "Just checking in about our last meeting.",
      time: "2:00 pm",
    },
    { from: "them", text: "I'll get back to you shortly.", time: "2:10 pm" },
  ],
  4: [
    { from: "me", text: "Following up on my previous email.", time: "8:15 am" },
    { from: "them", text: "Received. Will reply soon.", time: "8:30 am" },
  ],
  5: [
    {
      from: "me",
      text: "Please review the attached document.",
      time: "1:45 pm",
    },
    { from: "them", text: "Reviewed. Looks good to me.", time: "2:00 pm" },
  ],
  6: [
    {
      from: "me",
      text: "Let’s set up a quick call to discuss.",
      time: "3:20 pm",
    },
    { from: "them", text: "Sure, how’s tomorrow?", time: "3:30 pm" },
  ],
  7: [
    { from: "me", text: "Great work on the recent update!", time: "5:00 pm" },
    { from: "them", text: "Appreciate it!", time: "5:10 pm" },
  ],
  8: [
    { from: "me", text: "Can you send the invoice again?", time: "11:15 am" },
    { from: "them", text: "Sure, sending now.", time: "11:20 am" },
  ],
  9: [
    { from: "me", text: "Thanks for the feedback!", time: "6:00 pm" },
    { from: "them", text: "Always happy to help.", time: "6:10 pm" },
  ],
  10: [
    {
      from: "me",
      text: "Looking forward to our meeting next week.",
      time: "12:30 pm",
    },
    { from: "them", text: "Me too!", time: "12:40 pm" },
  ],
  11: [
    {
      from: "me",
      text: "Can we finalize the proposal today?",
      time: "9:00 am",
    },
    {
      from: "them",
      text: "Yes, sending the final version now.",
      time: "9:15 am",
    },
  ],
  12: [
    {
      from: "me",
      text: "Let me know your availability for tomorrow.",
      time: "4:00 pm",
    },
    { from: "them", text: "I’m free after 2 PM.", time: "4:10 pm" },
  ],
  13: [
    {
      from: "me",
      text: "Check the new design files when you're free.",
      time: "7:00 pm",
    },
    { from: "them", text: "Will do tonight.", time: "7:20 pm" },
  ],
  14: [
    { from: "me", text: "Appreciate your quick response!", time: "8:00 am" },
    { from: "them", text: "Anytime!", time: "8:05 am" },
  ],
  15: [
    { from: "me", text: "The contract is ready for review.", time: "2:30 pm" },
    { from: "them", text: "Thanks, I'll check it now.", time: "2:45 pm" },
  ],
};

export default function Message({ chat }) {
  const [message, setMessage] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);

  if (!chat) {
    return (
      <div className="w-[70%] flex items-center justify-center text-gray-400 text-xl">
        Click on a chat to view messages
      </div>
    );
  }

  const messageHistory = messagesByChatId[chat.id] || [];

  return (
    <div className="w-[70%] p-6 flex flex-col border-4">
    
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <div className="w-full space-y-3">
          <div className="flex items-center gap-2">
            <img
              src={`https://ui-avatars.com/api/?name=${chat.name}`}
              alt={chat.name}
              className="w-10 h-10 rounded-full"
            />
            <h2 className="text-lg font-semibold">{chat.name}</h2>
          </div>
          <div className="flex justify-between gap-4 text-lg text-purple-600 px-4">
            <button className="">LinkedIn</button>
            <button>Resume sequence</button>
          </div>
        </div>
      </div>

    
      <div className="space-y-6 overflow-y-auto flex-1">
        {messageHistory.map((msg, index) => (
          <div
            key={index}
            className={msg.from === "me" ? "text-right" : "text-left"}
          >
            <p
              className={`inline-block p-3 rounded-lg max-w-[60%] ${
                msg.from === "me"
                  ? "bg-purple-500 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {msg.text}
            </p>
            <p className="text-xs text-gray-400 mt-1">{msg.time}</p>
          </div>
        ))}
      </div>

    
      <div className="mt-4 border-t pt-4 flex items-center gap-3">
        <textarea
          ref={textareaRef}
          rows={1}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 resize-none overflow-hidden p-3 border-2 rounded-xl"
        />
        <button className="text-purple-600 text-xl  ">
          <IoSend />
        </button>
      </div>
    </div>
  );
}
