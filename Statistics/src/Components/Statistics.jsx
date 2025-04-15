import React from 'react'
import Card from './Card';
import Pending from './Pending';

function Statistics() {
   const data = [
  {
    percentage: 68,
    current: 16,
    total: 24,
    label: "Invites sent",
    color: "blue",
  },
  {
    percentage: 78,
    current: 4,
    total: 6,
    label: "Messages sent",
    color: "red",
  },
  {
    percentage: 66,
    current: 27,
    total: 38,
    label: "Emails sent",
    color: "yellow",
  },
  {
    percentage: 32,
    current: 11,
    total: 32,
    label: "Profiles viewed",
    color: "green",
  },
];

  return (
    <div className="p-5  w-[80%]  border-4 rounded-2xl">
      <div className="px-10 py-3 flex justify-between">
        <h1 className="text-3xl font-bold text-black">Statistics</h1>
        <h1 className="text-3xl font-bold text-black">View more</h1>
      </div>

      <div className='space-y-20 '>
        <div className="flex justify-between gap-6 px-10 py-5 ">
          {data.map((item, index) => (
            <Card
              key={index}
              percentage={item.percentage}
              current={item.current}
              total={item.total}
              label={item.label}
              color={item.color}
            />
          ))}
        </div>
        <div>
          <Pending />
        </div>
      </div>
    </div>
  );
}

export default Statistics
