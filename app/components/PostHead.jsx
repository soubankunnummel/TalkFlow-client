"use client"
import React, { useState } from "react";

const PostHead = () => {
  const [data ,setData] = useState()
  return (
    <>
      <div className="w-auto  md:w-[580px] h-auto md:flex hidden justify-between items-center ">
        <div className="w-auto md:flex hidden px-2 py-4 justify-center items-center">

        <div
          className="h-10 w-10 rounded-full bg-white box-border "
          style={{
            backgroundImage:
            "url('https://img.freepik.com/free-photo/people-holding-wechat-icon_53876-63371.jpg?size=626&ext=jpg&ga=GA1.1.1677573732.1702106196&semt=ais')",
            backgroundSize: "contain",
          }}
          >
          {" "}
        </div>

        <button className="w-3/2 mx-4 text-white text-opacity-40 text-md   h-full flex justify-center items-center " onClick={console.log("buttkjfnksn")}>
          Start thread ... 
        </button>
          </div>
        <button className=" px-5 py-2 md:flex hidden  rounded-full bg-white text-black font-medium   bg-opacity-40">Post </button>
        
        
      </div>
      <div className="w-full h-10 flex md:hidden bg-black">
        <div className="w-1/2  flex justify-center items-center border-stone-800   text-xs text-white text-opacity-40 hover:text-white hover:border-b-[1px] "><button>For you </button></div>
        <div className="w-1/2  flex justify-center items-center border-stone-800  text-xs text-white text-opacity-40 hover:text-white hover:border-b-[1px]"><button>Following</button></div>

      </div>
    </>
  );
};

export default PostHead;
