"use client"
import { loginuser } from "@/app/service/auth";
import React, { useState } from "react"; 
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
function Login() {
  const router = useRouter()
  const [login, setLogin] = useState({
    username: "",
    password: ""
  })
  const [loginError, setLoginError] = useState(null);

  const hadleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }
  const handleLogin = async () => {
    if(login.username === "" || login.password === "" )return alert("pleas fill all inputs")
    try {
      // const response = await loginuser(login);

      if (response) {
        alert("Login successful");
        router.push("/");
      } else {
        alert("Invalid username or password"); 
      }
    } catch (error) {
      console.error("Error in handleLogin", error);
      setLoginError("An error occurred during login"); 
    }
  }
  const handleGoogleLogin = () => {
    console.log("clicekd")
  }
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <div className="flex flex-col justify-between gap-3 ">
        <input
          type="text"
          placeholder="Username or Email"
          name="username"
          value={login.username}
          onChange={hadleChange}
          required
          className="w-80 placeholder:ps-3 h-12 rounded-2xl bg-stone-800 p-3"
          />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={login.password}
          onChange={hadleChange}
          required
          className="w-80 placeholder:ps-3 h-12 rounded-2xl bg-stone-800 p-3"
        />

        <button className="bg-white text-black w-80 h-12 rounded-2xl"
        onClick={handleLogin}
        >
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
          <button className="bg-transparent border-y-pink-200  text-white w-80 h-12 rounded-2xl border border-white flex items-center justify-center"
          onClick={handleGoogleLogin}
          >
            <FcGoogle className="mx-5" /> Continue with Google
          </button>
        </span>
      </div>
    </div>
  );
}

export default Login;
