"use client";
import React, { useEffect, useState } from "react";
import ForYou from "./Foryou";
import FolloWing from "./Following";
import { useRouter } from "next/navigation";
import { getProfile, getUsr } from "../service/users";

const PostHead = () => {
  const [activeComponent, setActiveComponent] = useState(false);
  const [profile, setProfile] = useState("");
  const router = useRouter();

  const fechUserData = async () => {
    try { 
      const user = await getUsr();
      return user;
    } catch (error) {
      console.error(error);
    }
  };

  const getUserProfile = async () => {
    try {
      const user = await fechUserData();
      const response = await getProfile(user.username);
      setProfile(response.user.profilePic)
    } catch (error) {}
  };
  useEffect(() => {getUserProfile()}, [])
  return (
    <>
      <div className="w-auto  md:w-[580px] h-auto md:flex hidden justify-between items-center ">
        <div className="w-auto md:flex hidden px-2 py-4 justify-center items-center">
          <div
            className="h-10 w-10 rounded-full bg-white box-border "
            style={{
              backgroundImage: `url(${profile})`,
              backgroundSize: "contain",
              backgroundSize: "cover",
            }}
          >
            {" "}
          </div>

          <button
            className="w-3/2 mx-4 text-white text-opacity-40 text-md   h-full flex justify-center items-center "
            onClick={() => router.push("/page/create")}
          >
            Start thread ...
          </button>
        </div>
        <button className=" px-5 py-2 md:flex hidden  rounded-full bg-white text-black font-medium   bg-opacity-40">
          Post{" "}
        </button>
      </div>
      <div className="w-full h-10 flex md:hidden bg-black">
        <ForYou
          isActive={activeComponent === "ForYou"}
          setActiveComponent={setActiveComponent}
        />

        <FolloWing
          isActive={activeComponent === "Following"}
          setActiveComponent={setActiveComponent}
        />
      </div>
    </>
  );
};

export default PostHead;
