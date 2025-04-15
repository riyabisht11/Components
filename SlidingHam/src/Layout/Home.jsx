import React, { useState } from "react";

function Home() {
  const [activeTab, setActiveTab] = useState("Add");

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="px-20 py-5 flex justify-center items-center">
        <div className="bg-black w-full h-[45vw] py-10 relative">
          
          <div className="absolute top-5 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-10">
              <button
                className={`text-2xl font-semibold hover:underline cursor-pointer ${
                  activeTab === "Add" ? "text-yellow-400" : "text-white"
                }`}
                onClick={() => setActiveTab("Add")}
              >
                Add
              </button>
              <button
                className={`text-2xl font-semibold hover:underline cursor-pointer ${
                  activeTab === "Setting" ? "text-yellow-400" : "text-white"
                }`}
                onClick={() => setActiveTab("Setting")}
              >
                Setting
              </button>
              <button
                className={`text-2xl font-semibold hover:underline cursor-pointer ${
                  activeTab === "Hours" ? "text-yellow-400" : "text-white"
                }`}
                onClick={() => setActiveTab("Hours")}
              >
                Hours
              </button>
            </div>
          </div>

      
          <div className="flex justify-center items-center h-full">
            <h1 className="text-white text-4xl font-bold">{activeTab} Page</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
