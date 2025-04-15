import { useState } from "react";

const tabs = ["All", "Unread", "Important", "Archived"];

const initialChats = [
  // <- renamed from dummyChats to make state clearer
  {
    id: 1,
    name: "Andrew Heideman",
    message: "Hey Andrew, sent you a link earlier.",
    time: "Today",
    unread: false,
    important: false,
  },
  {
    id: 2,
    name: "Charlotte Davis",
    message: "Hi, I hope you are doing well,...",
    time: "Today",
    unread: true,
    unreadCount: 2,
    important: true,
  },
  {
    id: 3,
    name: "Jenny Wilson",
    message: "Just checking in about our last meeting.",
    time: "Yesterday",
    unread: false,
    important: true,
  },
  {
    id: 4,
    name: "Rob Kolaber",
    message: "Following up on my previous email.",
    time: "08.12.2025",
    unread: true,
    unreadCount: 1,
    important: false,
  },
  {
    id: 5,
    name: "Darin Sliefert",
    message: "Please review the attached document.",
    time: "08.12.2025",
    unread: false,
    important: false,
  },
  {
    id: 6,
    name: "Sophie Turner",
    message: "Let’s set up a quick call to discuss.",
    time: "07.12.2025",
    unread: true,
    unreadCount: 3,
    important: true,
  },
  {
    id: 7,
    name: "Martin Jones",
    message: "Great work on the recent update!",
    time: "05.12.2025",
    unread: false,
    important: false,
  },
  {
    id: 8,
    name: "Tina Sharma",
    message: "Can you send the invoice again?",
    time: "04.12.2025",
    unread: true,
    unreadCount: 1,
    important: false,
  },
  {
    id: 9,
    name: "Lucas Gray",
    message: "Thanks for the feedback!",
    time: "02.12.2025",
    unread: false,
    important: true,
  },
  {
    id: 10,
    name: "Amelia Clarke",
    message: "Looking forward to our meeting next week.",
    time: "01.12.2025",
    unread: false,
    important: false,
  },
  {
    id: 11,
    name: "John Carter",
    message: "Can we finalize the proposal today?",
    time: "30.11.2025",
    unread: true,
    unreadCount: 1,
    important: true,
  },
  {
    id: 12,
    name: "Elena Gilbert",
    message: "Let me know your availability for tomorrow.",
    time: "29.11.2025",
    unread: false,
    important: false,
  },
  {
    id: 13,
    name: "Ben Holloway",
    message: "Check the new design files when you're free.",
    time: "28.11.2025",
    unread: true,
    unreadCount: 2,
    important: true,
  },
  {
    id: 14,
    name: "Nina Patel",
    message: "Appreciate your quick response!",
    time: "27.11.2025",
    unread: false,
    important: false,
  },
  {
    id: 15,
    name: "George Stone",
    message: "The contract is ready for review.",
    time: "26.11.2025",
    unread: false,
    important: true,
  },
];

function Chat({ onSelectChat }) {
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [chats, setChats] = useState(initialChats); // ✅ use state

  const handleChatClick = (chat) => {
    onSelectChat(chat);
    const updated = chats.map((c) =>
      c.id === chat.id ? { ...c, unread: false, unreadCount: 0 } : c
    );
    setChats(updated); // ✅ mark read
  };

  const filterChats = () => {
    let filtered = [...chats];

    switch (activeTab) {
      case "Unread":
        filtered = filtered.filter((chat) => chat.unread);
        break;
      case "Important":
        filtered = filtered.filter((chat) => chat.important);
        break;
      case "Archived":
        filtered = [];
        break;
      default:
        break;
    }

    if (searchTerm.trim() !== "") {
      filtered = filtered.filter(
        (chat) =>
          chat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          chat.message.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  };

  return (
    <div className="w-[30%] h-full border-2 px-4 py-2">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded mb-2 mt-4"
      />
      <div className="flex justify-between mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 ${
              activeTab === tab
                ? "border-b-2 border-purple-500 text-purple-600"
                : "text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-3 h-[70vh] overflow-y-scroll hide-scrollbar">
        {filterChats().map((chat) => (
          <div
            key={chat.id}
            onClick={() => handleChatClick(chat)}
            className="flex items-center justify-between cursor-pointer hover:bg-gray-100 p-2 rounded"
          >
            <div>
              <p className="font-medium">{chat.name}</p>
              <p className="text-sm text-gray-500 truncate w-48">
                {chat.message}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">{chat.time}</p>
              {chat.unread &&
                chat.unreadCount > 0 && ( // ✅ only show if > 0
                  <span className="text-xs bg-red-500 text-white rounded-full px-2">
                    {chat.unreadCount}
                  </span>
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chat;
