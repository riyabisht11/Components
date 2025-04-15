import React from "react";

const Signup = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-orange-400 mb-2">Sign Up</h2>
      <p className="text-gray-500 text-sm mb-4">
        Create an account to get started
      </p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm "
        />
        <input
          type="email"
          placeholder="Enter your Email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm "
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm "
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
        />
        <button
          type="submit"
          className="w-full bg-orange-400 text-white py-2 rounded-md hover:bg-orange-500 transition text-sm"
        >
          Sign Up
        </button>
      </form>
    </>
  );
};

export default Signup;
