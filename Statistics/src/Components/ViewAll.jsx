import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ViewAll = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/"); 
  };

  const activities = [
    {
      id: 1,
      message: "Connection request was accepted",
      user: "Ariana Jackson",
      time: "3h ago",
      tag: "Lead Gen . USA",
    },
    {
      id: 2,
      message: "Message received",
      user: "Michael Smith",
      time: "5h ago",
      tag: "Outreach . UK",
    },
    {
      id: 3,
      message: "Profile viewed",
      user: "Sophia Green",
      time: "1d ago",
      tag: "Marketing . Canada",
    },
    {
      id: 4,
      message: "Email campaign sent",
      user: "David Kim",
      time: "2d ago",
      tag: "Sales . India",
    },
    {
      id: 5,
      message: "Connection request was accepted",
      user: "Ariana Jackson",
      time: "3h ago",
      tag: "Lead Gen . USA",
    },
    {
      id: 6,
      message: "Connection request was accepted",
      user: "Ariana Jackson",
      time: "3h ago",
      tag: "Lead Gen . USA",
    },
    {
      id: 7,
      message: "Message received",
      user: "Michael Smith",
      time: "5h ago",
      tag: "Outreach . UK",
    },
    {
      id: 8,
      message: "Profile viewed",
      user: "Sophia Green",
      time: "1d ago",
      tag: "Marketing . Canada",
    },
    {
      id: 9,
      message: "Email campaign sent",
      user: "David Kim",
      time: "2d ago",
      tag: "Sales . India",
    },
    {
      id: 10,
      message: "Connection request was accepted",
      user: "Ariana Jackson",
      time: "3h ago",
      tag: "Lead Gen . USA",
    },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
     
      <div className="flex items-center gap-4 mb-6">
        <IoIosArrowBack
          size={28}
          className="cursor-pointer text-gray-700 hover:text-black"
          onClick={handleBack}
        />
        <h1 className="text-3xl font-bold">All Recent Activities</h1>
      </div>

      
      <div className="space-y-6">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="border-b pb-4 space-y-1 transition hover:bg-gray-50 p-4 rounded-xl"
          >
            <h2 className="text-lg font-semibold">{activity.message}</h2>
            <p className="text-gray-600">by {activity.user}</p>
            <p className="text-sm text-gray-500">
              {activity.time} • {activity.tag}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAll;
