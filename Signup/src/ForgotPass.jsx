import React, { useState } from "react";
import Signup from "./Signup"; 
import { MdOutlineMail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import pic2 from "./assets/Images/pic2.png";
import { useNavigate } from "react-router-dom";

function ForgotPass() {
    const navigate = useNavigate();
  return (
    <div className="max-w-screen-2xl mx-auto relative overflow-hidden">
      <div className="absolute -top-20 -left-30">
        <div>
          <div className="orange border border-white rounded-full size-[400px] bg-orange-400 flex justify-center items-center">
            <div className="white border border-white rounded-full bg-white size-[300px]"></div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-50 -left-30 hidden lg:block">
        <div>
          <div className="orange border border-white rounded-full size-[400px] bg-black/10 flex justify-center items-center">
            <div className="white border border-white rounded-full bg-white size-[300px]"></div>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center w-full h-[100vh] pt-10">
        <div className="flex flex-col lg:flex-row w-full px-5 lg:px-20 py-5 lg:py-10 justify-start lg:justify-center z-10">
          <div className=" bg-white w-full lg:w-[60%]">
            <div className="p-5 lg:p-10">
              <h1 className="font-bold text-black text-2xl md:text-5xl lg:text-4xl text-center lg:text-start">
                Welcome to Kramify
              </h1>
              <p className="font-bold text-black text-sm md:text-lg lg:text-xl pt-5 text-center lg:text-start">
                Sign up to get started
              </p>
            </div>
            <div className=" lg:w-[65%] pt-5 ">
              <img src={pic2} alt="" className="overflow-hidden" />
            </div>
          </div>

          <div className="p-10 hidden lg:block bg-orange-400 w-[30%] relative flex justify-center items-center"></div>

          <div className="bg-white relative lg:absolute w-full md:w-[500px] lg:w-[400px] -top-66 md:-top-110 lg:top-1/2 right-0 md:-right-[100px] lg:right-[200px] lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 rounded-lg shadow-md p-8 w-[70%] h-[60vh] flex flex-col justify-center lg:overflow-auto ">
            <h2 className="text-2xl font-bold text-orange-400 mb-2">
              Forgotten Password?
            </h2>
            <p className="text-gray-500 text-sm mb-4">
              Enter your email address to reset your password
            </p>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md text-sm"
                />
                <MdOutlineMail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>

              <div
                className="text-right text-xs text-gray-400 hover:underline cursor-pointer"
                onClick={() => navigate("/forgotpass")}
              ></div>
              <button
                type="submit"
                className="w-full bg-orange-400 text-white py-2 rounded-md hover:bg-orange-500 transition text-sm"
              >
                Request Reset Link
              </button>
              <p
                className="font-sm text-orange-400 font-semibold text-center cursor-pointer"
                onClick={() => navigate("/")}
              >
                Back to login
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPass
