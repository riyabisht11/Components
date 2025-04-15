import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdCampaign } from "react-icons/md";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { PiShootingStarFill } from "react-icons/pi";
import { RiTeamFill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import pic1 from "./assets/Images/pic1.jpg";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { IoNotifications } from "react-icons/io5";


function SideBar() {
    const elements = [
      { icon: <LuLayoutDashboard />, name: "Dashboard" },
      { icon: <MdCampaign />, name: "Campaigns" },
      { icon: <MdOutlineForwardToInbox />, name: "Inbox" },
      { icon: <PiShootingStarFill />, name: "Leads" },
      { icon: <RiTeamFill />, name: "Team" },
      { icon: <IoSettingsSharp />, name: "Dashboard" },
    ];
    const value = 4;
  return (
    <div className=" w-[20%] h-[100vh] px-5">
      <div className="py-10">
        <div>
          <div className="">
            <div className="logo flex justify-between">
              <h1 className="text-4xl font-bold text-orange-500">Kramify</h1>
              <div className="py-2">
                <RxHamburgerMenu className="text-3xl text-orange-500" />
              </div>
            </div>

            <div className="profile flex gap-5 py-5 border-b-2 border-gray-400">
              <div className="profilepic">
                <img
                  src={pic1}
                  alt=""
                  className="size-[50px] object-cover rounded-full"
                />
              </div>
              <div>
                <h1 className="text-2xl">Judy William</h1>
                <p className="text-sm">Warming up</p>
              </div>
            </div>
            <div className="py-8 px-5">
              {elements.map((item, idx) => (
                <div className="flex items-center gap-5 mb-5 ">
                  <div className="text-3xl">{item.icon}</div>
                  <div className="text-xl">{item.name}</div>
                </div>
              ))}
            </div>

            <div className="border-2 border-gray-400 w-[80%] mx-5 p-2">
              <div className="flex gap-8 items-center ">
                <div>
                  {" "}
                  <h1 className="text-xl font-bold">Free Trial</h1>
                  <p className="text-sm text-orange-500 font-semibold">
                    Expires in 4 day
                  </p>
                </div>
                <div className='flex items-center'>
                  <CircularProgressbar
                    value={value}
                    maxValue={10}
                    text={`${value}d`}
                    className="size-15 color"
                  />
                  ;
                </div>
              </div>
              <div className='flex justify-center'><button className='bg-orange-500 rounded-sm p-1 text-white text-md font-semibold'>Subscribe</button></div>
            </div>

            <div className='flex  gap-2 px-5 pt-7'>
              <IoNotifications className='text-3xl' />
              <h1 className='text-xl font-semibold'>What's New</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar
