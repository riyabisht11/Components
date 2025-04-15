import React, { useState } from "react";
import ham from "../assets/Svg/hamburger.svg";
import logout from "../assets/Svg/logout.svg";
import signout from "../assets/Svg/profile.svg";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-65 bg-gray-300 text-white p-6 transition-transform duration-300 z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-1/2"
        }`}
      >

        <ul className="space-y-4 text-lg py-20">
          <li className="hover:underline cursor-pointer text-black">Dashboard</li>
          <li className="hover:underline cursor-pointer text-black">Campaign</li>
          <li className="hover:underline cursor-pointer text-black">Inbox</li>
          <li className="hover:underline cursor-pointer text-black">Lead</li>
        </ul>

        {/* Spacer to push logout section to the bottom */}
        <div className="">
          {/* Logout Section */}
          <div className="flex gap-10 space-y-4 mt-6 pt-72">
            {/* Logout Image */}
            <div className="cursor-pointer">
              <img src={logout} alt="Logout" className="w-8 h-8" />
            </div>

            {/* Sign-out Image */}
            <div className="cursor-pointer">
              <img src={signout} alt="Sign Out" className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto">
        <nav className="px-6 py-5 flex justify-between items-center">
          <div className="cursor-pointer z-99" onClick={toggleSidebar}>
            <img src={ham} alt="menu" className="w-8 h-8 " />
          </div>

          <div className="flex space-x-8">
            <h1 className="font-bold text-xl cursor-pointer hover:underline">
              HOME
            </h1>
            <h1 className="font-bold text-xl cursor-pointer hover:underline">
              ABOUT
            </h1>
            <h1 className="font-bold text-xl cursor-pointer hover:underline">
              CONTACT
            </h1>
          </div>
          <div></div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
