import React from 'react'
import Statistics from './Components/Statistics';
import RecentActivity from './Components/RecentActivity';

function StatsMain() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="px-10 py-10">
        <div>
          <h1 className="text-3xl text-black font-bold">Good Evening, Judy</h1>
          <p className="text-xl font-medium text-black/50 py-5">
            Here's what's happening with your account today
          </p>
        </div>

        <div className='flex gap-5 h-[75vh]'>
          <Statistics />
          <RecentActivity/>
        </div>

      </div>
    </div>
  );
}

export default StatsMain

