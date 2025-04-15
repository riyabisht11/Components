import React from 'react'
import { useNavigate } from 'react-router-dom';

function RecentActivity() {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/viewall");
  };
  
  return (
    <div className=" w-[30%]   border-4 rounded-2xl ">
      <div className="p-5 flex justify-between">
        <h1 className="text-2xl font-bold ">Recent Activity</h1>
        <h1
          className="text-xl font-bold cursor-pointer"
          onClick={handleViewAll}
        >
          View all
        </h1>
      </div>

      <div className="p-5 flex-col h-[60vh] overflow-y-scroll hide-scrollbar">
        <div className="border-b-2 space-y-2 mx-auto">
          <h1>Connection request was accepted</h1>
          <h1>by Ariana Jackson</h1>
          <h1 className="mb-2">3h ago . Lead Gen .USA</h1>
        </div>

        <div className="border-b-2 space-y-2 mx-auto">
          <h1>Connection request was accepted</h1>
          <h1>by Ariana Jackson</h1>
          <h1 className="mb-2">3h ago . Lead Gen .USA</h1>
        </div>
        <div className="border-b-2 space-y-2 mx-auto">
          <h1>Connection request was accepted</h1>
          <h1>by Ariana Jackson</h1>
          <h1 className="mb-2">3h ago . Lead Gen .USA</h1>
        </div>
        <div className="border-b-2 space-y-2 mx-auto">
          <h1>Connection request was accepted</h1>
          <h1>by Ariana Jackson</h1>
          <h1 className="mb-2">3h ago . Lead Gen .USA</h1>
        </div>
        <div className="border-b-2 space-y-2 mx-auto">
          <h1>Connection request was accepted</h1>
          <h1>by Ariana Jackson</h1>
          <h1 className="mb-2">3h ago . Lead Gen .USA</h1>
        </div>
      </div>
    </div>
  );
}

export default RecentActivity

