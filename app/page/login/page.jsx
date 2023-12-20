import React from "react"; 
import { FcGoogle } from "react-icons/fc";

function Login() {
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <div className="flex flex-col justify-between gap-3 ">
        <input
          type="text"
          placeholder="Username or Email"
          name=""
          id=""
          className="w-80 placeholder:ps-4 h-12 rounded-2xl bg-stone-800"
        />
        <input
          type="text"
          placeholder="Password"
          name=""
          id=""
          className="w-80 placeholder:ps-4 h-12 rounded-2xl bg-stone-800"
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
          <hr className="w-full border-t-2 border-gray-500" />
          <span className="text-gray-500">or</span>
          <hr className="w-full border-t-2 border-gray-500" />
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

export default Login;
