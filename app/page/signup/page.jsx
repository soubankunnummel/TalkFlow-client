import React from "react"; 
import { FcGoogle } from "react-icons/fc";

function Signup() {
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <div className="flex flex-col  justify-between gap-3 ">
   
        <div className="w-80 gap-2 h-auto flex ">
     <input
          type="text"
          placeholder="name "
          name=""
          id=""
          className="w-1/2 placeholder:ps-4 h-12 rounded-2xl p-3 bg-stone-800"
         />
     <input
          type="text"
          placeholder="Username "
          name=""
          id=""
          className="w-1/2 placeholder:ps-4 h-12 p-3 rounded-2xl bg-stone-800"
         />
        </div>
        <input
          type="email"
          placeholder="email"
          name=""
          id=""
          className="w-full placeholder:ps-4 h-12 rounded-2xl bg-stone-800"
        />
        <input
          type="text"
          placeholder="Password"
          name=""
          id=""
          className="w-full placeholder:ps-4 h-12 rounded-2xl bg-stone-800"
        />

        <button className="bg-white text-black w-80 h-12 rounded-2xl">
          Log in
        </button>
        <span className="text-center text-stone-700 text-sm hover:text-white">
          <a href="#" className="">
            Forgot Password?
          </a>
        </span>
        <div className="flex items-center gap-3">
          <hr className="w-full border-t-[1px] border-gray-500" />
          <span className="text-gray-500">or</span>
          <hr className="w-full border-t-[1px] border-gray-500" />
        </div>

        <span className="text-center my-3">
          <button className="bg-transparent border-y-pink-200  text-white w-80 h-12 rounded-2xl border border-white flex items-center justify-center">
            <FcGoogle className="mx-5" /> Continue with Google
          </button>
        </span>
      </div>
    </div>
  );
}

export default Signup;
