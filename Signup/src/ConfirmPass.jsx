import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import pic2 from "./assets/Images/pic2.png";
import { useNavigate } from "react-router-dom";

function ConfirmPass() {
  return (
    <div className="max-w-screen-2xl mx-auto relative overflow-hidden">
      <div className="absolute -top-20 -left-30">
        <div>
          <div className="orange border border-white rounded-full size-[400px] bg-orange-400 flex justify-center items-center">
            <div className="white border border-white rounded-full bg-white size-[300px]"></div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-50 -left-30">
        <div>
          <div className="orange border border-white rounded-full size-[400px] bg-black/10 flex justify-center items-center">
            <div className="white border border-white rounded-full bg-white size-[300px]"></div>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center w-full h-[100vh] pt-10">
        <div className="flex w-full px-20 py-10 justify-center z-10">
          <div className=" bg-white w-[60%]">
            <div className="p-10">
              <h1 className="font-bold text-black text-4xl">
                Welcome to Kramify
              </h1>
            </div>
            <div className="w-[65%] pt-16">
              <img src={pic2} alt="" className="overflow-hidden" />
            </div>
          </div>

          <div className="p-10 bg-orange-400 w-[30%] relative flex justify-center items-center"></div>

          <div className="bg-white absolute w-[400px] top-1/2 right-[200px] transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md p-8 w-[70%] h-[60vh] flex flex-col justify-center overflow-auto">
            <h2 className="text-2xl font-bold text-orange-400 mb-2">
              Change Your Paswword
            </h2>
            <p className="text-gray-500 text-sm mb-4">
              Enter a new password below to change your password
            </p>
            <form className="space-y-4 pt-3">
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter your New Password"
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md text-sm"
                />
                 <FaKey className="absolute right-3 top-1/2  -translate-y-1/2 text-gray-400" />
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Confirm your New Password"
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md text-sm"
                />
                <FaKey className="absolute right-3 top-1/2  -translate-y-1/2 text-gray-400" />
              </div>

              <div
                className="text-right text-xs text-gray-400 hover:underline cursor-pointer"
                onClick={() => navigate("/forgotpass")}
              ></div>
              <button
                type="submit"
                className="w-full bg-orange-400 text-white py-2 rounded-md hover:bg-orange-500 transition text-sm"
              >
                Change Password
              </button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmPass
