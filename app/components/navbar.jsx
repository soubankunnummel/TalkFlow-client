"use client";
import React from "react";
import { MdOutlineSort } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { HiHome, HiUser } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa6";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();

  const handleSearchButtonClick = () => {
    router.push("/page/search");
  };

  return (
    <div className="w-full h-auto mt-0 p-5 bg-black flex  justify-between items-center sticky top-0 bg-opacity-90  " style={{
      zIndex:1000
    }}>
      <div className="text-xs  font-thin w-full md:w-auto flex justify-center">
        {" "}
        <div
          className="md:h-14 md:w-14 h-8 w-8 bg-black"
          style={{
            backgroundImage: `url("https://seeklogo.com/images/T/threads-logo-1ABBA246BE-seeklogo.com.png")`,
            backgroundSize: "contain",
          }}
        ></div>{" "}
      </div>
      <div className=" text-white font-thin h-auto md:flex hidden  ">
        <button className=" h-auto px-7 py-5 bg-transparent hover:bg-stone-800 border-none  rounded-lg flex flex-col justify-center items-center ">
          <HiHome className="text-3xl text-white text-opacity-50 hover:text-opacity-90" />
        </button>
        <button
          className=" h-auto px-7 py-5 bg-transparent hover:bg-stone-800 border-none  rounded-lg flex flex-col justify-center items-center"
          onClick={handleSearchButtonClick}
        >
          <FiSearch className="text-3xl text-white text-opacity-50  hover:text-opacity-90" />
        </button>
        <button className=" h-auto  py-n px-7 bg-transparent hover:bg-stone-800 border-none rounded-lg  flex flex-col justify-center items-center">
          <IoCreateOutline className="text-3xl text-white text-opacity-50 hover:text-opacity-90" />
        </button>
        <button className=" h-auto px-7 py-5 bg-transparent hover:bg-stone-800  rounded-lg  border-none flex flex-col justify-center items-center ">
          <FaRegHeart className="text-3xl text-white text-opacity-50 hover:text-opacity-90" />
        </button>
        <button className=" h-auto px-7  py-5 bg-transparent hover:bg-stone-800  rounded-lg flex border-none flex-col justify-center items-center ">
          <HiUser className="text-3xl text-white text-opacity-50 hover:text-opacity-90" />
        </button>
      </div>
      <div className="text-3xl text-white font-thin md:flex hidden ">
        {" "}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button">
            {" "}
            <MdOutlineSort />{" "}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
