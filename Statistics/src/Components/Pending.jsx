import React from "react";
import CountUp from "react-countup";

const Pending = () => {
  const stats = [
    {
      label: "Pending Invitations",
      value: 178,
      hasButton: true,
      buttonText: "Withdraw",
    },
    {
      label: "Unread Messages",
      value: 12,
      hasButton: true,
      buttonText: "View",
    },
    {
      label: "Profile views since last week",
      value: 23,
      hasButton: false,
      isPercentage: true,
    },
  ];

  return (
    <div className="flex justify-between px-10">
      {stats.map((item, index) => (
        <div
          key={index}
          className="border-2 rounded-xl p-4 w-60 text-center  bg-white"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-2">{item.label}</h2>
          <div className="flex justify-center  gap-10">
            <h3 className="text-3xl font-bold text-gray-800">
              <CountUp
                end={item.value}
                duration={1.5}
                prefix={item.isPercentage ? "+" : ""}
                suffix={item.isPercentage ? "%" : ""}
              />
            </h3>
            {item.hasButton && (
              <button className="mt-2 border px-4 py-1 rounded-md text-sm font-medium cursor-pointer">
                {item.buttonText}
              </button>
            )}
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Pending;
