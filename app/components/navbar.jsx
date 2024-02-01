"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineSort } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { HiHome, HiUser } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import { logoutUser } from "../service/auth";
import { useProfile } from "../zustand/posts/profilePost";
import { GoHeart } from "react-icons/go";
import { getPostuser, getProfielPost, getUsr } from "../service/users";
import { usePosts } from "../zustand/posts/posts";
import toast from "react-hot-toast";
import { useTheme } from "next-themes";
import useAuthStore from "../zustand/users/authStore";


function NavBar() {
  const { setPost, serUser } = usePosts();
  const { theme, setTheme } = useTheme();     
  const [lik, setLik] = useState(null)
  const [prof, setProf] = useState(null)
  const [serch, setSerch] = useState(null)
  const [land, setLand] = useState(null)
  const [user, setUser] = useState(null)
  const { setProfil, profile, setOutProfile, setSearch, setLikes, likes, setOutLikes, setHome, selected } = useProfile();
 
  const router = useRouter();
  // const user = localStorage.getItem("user")

  const getUser = async () => {
    try {
      const user = await getUsr()
     setUser(user)  
    } catch (error) {}
  }
  useEffect(() => {getUser()} ,[])

  const handleProfile = async () => {

    if(user){
      setProfil();
    }else{
      toast.error("Unautherized")
    }
  
    setProf("profile")
    setLik(null)
   setSerch(null)
   setLand(null)


    
    // setOutLikes()
  };

  // logout

  const handleLogout = async () => {
    console.log("clk")
    try {
      const response = await logoutUser();
        if(response){

          localStorage.removeItem("jwt");
          toast.success("Logged out successfully");
          
          router.push("/page/login");
        }
      
    } catch (error) {
      console.log("Erro in Logout ui", error);
    }
  };

  const handleSearch = () => {
    setSearch()
    setSerch("serch")
   setLik(null)
   setProf(null)
   setLand(null)


  }
  const handleActivity = () => {
    setLikes()
   setLik("Like")
   setSerch(null)
   setProf(null)
   setLand(null)
   
  }
  const handleHome = () => {
    setHome()
    setLand("Home")
    setSerch(null)
    setProf(null)
    setLand(null)
    setLik(null)
  }

  // theam chnaging

  // const currentTheam = theam === 'system' ?  systemTeam: theam
  const handleToggleTheme = () => {
    console.log("Current theme:", theme);
    setTheme(theme === "dark" ? "light" : "dark");
  };


  const hanleCreate = () => {
    if(user){

       router.push("/page/create")
    }else{

      toast.error("Unautherized")
      router.replace("/");
       
    }
  }
  return (
    <div
      className={`w-full h-auto mt-0 p-5 flex  justify-between items-center sticky top-0 bg-opacity-90 bg-black text-white`}
      style={{
        zIndex: 1000,
      }}
    >
      <div className="text-xs  font-thin w-full md:w-auto flex justify-center">
        {" "}
        <div
          className={`md:h-14 md:w-14 h-8 w-8 bg-black`}
          style={{
            backgroundImage: `url("https://seeklogo.com/images/T/threads-logo-1ABBA246BE-seeklogo.com.png")`,
            backgroundSize: "contain",
          }}
        ></div>
        <div className="dropdown dropdown-end text-3xl absolute right-0 md:hidden">
          <div tabIndex={0} role="button">
            <MdOutlineSort />
          </div>
          <ul
            tabIndex={0}
            className="p-2 shadow menu dropdown-content z-[1] bg-stone-900 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a onClick={() => router.push("page/login")}>Log out</a>
            </li>
          </ul>
        </div>{" "}
      </div>
      <div className=" text-white font-thin h-auto md:flex hidden  ">
        <button
          className={`btn h-auto px-7 py-5 bg-transparent hover:bg-stone-800 border-none  rounded-lg flex flex-col justify-center items-center ${!selected || land &&'bg-zinc-700'} `}
          onClick={handleHome}
        >
          <HiHome
            className={`text-3xl text-white text-opacity-50 hover:text-opacity-90`}
          />
        </button>
        <button
          className={` btn h-auto px-7 py-5 bg-transparent hover:bg-stone-800 border-none  rounded-lg flex flex-col justify-center items-center ${serch && "bg-zinc-700" }`}
          onClick={handleSearch}
        >
          <FiSearch className="text-3xl text-white text-opacity-50  hover:text-opacity-90" />
        </button>

        {/* <CreatePostModal
          username={username}
          setText={setText} 
          handleFileChange={handleFileChange}
          handlePostSubmit={handlePostSubmit}
        /> */}

        <button
          className="btn h-auto  py-n px-7 bg-transparent hover:bg-stone-800 border-none rounded-lg  flex flex-col justify-center items-center"
          onClick={() => hanleCreate()}
        >
          <IoCreateOutline className="text-3xl text-white text-opacity-50 hover:text-opacity-90" />
        </button>
        <button
          className={`btn h-auto px-7 py-5 bg-transparent hover:bg-stone-800  rounded-lg  border-none flex flex-col justify-center items-center ${lik && "bg-zinc-700" }`}
          onClick={handleActivity}
        >
          <GoHeart className="text-3xl text-white text-opacity-50 hover:text-opacity-90" />
        </button>
        <button
          className={`btn h-auto px-7  py-5 bg-transparent hover:bg-stone-800  rounded-lg flex border-none flex-col justify-center items-center ${prof && "bg-zinc-700" }  `}
          onClick={handleProfile}
        >
          <HiUser className={`text-3xl text-white text-opacity-50 hover:text-opacity-90 ` } />
        </button>
      </div>
      <div className="text-3xl text-white text-opacity-50 font-thin md:flex hidden ">
        {" "}
        <div className="dropdown dropdown-end md:flex justify-end ">
          <div tabIndex={0} role="button">
            {" "}
            <MdOutlineSort />{" "}
          </div>
          <ul
            tabIndex={0}
            className="p-2 shadow menu dropdown-content z-[1] bg-stone-900 rounded-box w-52"
          >
           
            <li>
              <a onClick={handleToggleTheme}>Swich Appearnse</a>
            </li>

           {user   ? (
                <li>
                  <a onClick={handleLogout}>Log out</a>
                </li>

           ): (

                <li>
                  <a onClick={() => router.push("/page/login")}>Sign up</a>
                </li>
           )}
              
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
