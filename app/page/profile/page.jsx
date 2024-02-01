"use client";
import { FaInstagram } from "react-icons/fa6";
import Threads from "@/app/components/Threads";
import Replies from "@/app/components/Replies";
import Reposts from "@/app/components/Reposts";
import ProfilePost from "@/app/components/ProfilePost";
import RepliPost from "@/app/components/ProfileRepliPost";
import {usePosts} from "@/app/zustand/posts/posts";
import ProfilRepos from "@/app/components/ProfilRepos";
import { followers, getProfile, getUsr } from "@/app/service/users";
import { useEffect } from "react";
import useProfileStore from "@/app/zustand/users/profileStore";
import Follower from "@/app/components/Modals/Follower";
import usersStore from "@/app/zustand/users/usersStore";
import EditProfile from "@/app/components/Modals/EditProfile";

// var username;
// var userId;
function Profile() {
  const { selected } = usePosts();
  const { profile, setProfile } = useProfileStore();
  const { setFollowerss} = usersStore()
  const getUser = async () => {
    try {
      const response = await getUsr();
     
      if (response) {
     
        return response
      }
    } catch (error) {
      console.log("", error);
    }
  };

  const viewFollowers = async () => {
    document.getElementById('my_modal_2').showModal()
    try {
      const response = await followers()
      if(response){
        setFollowerss(response)
      }
    } catch (error) {
      console.log(error)
    }
  }

 

  const fechData = async () => {
    try {
      const username = await getUser()
    
      const response = await getProfile(username.username);

      if (response) {
        await setProfile(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fechData()
  }, []);

  TODO:// add edit profile


  return (
    <>
      <div className="w-full md:w-[580px] h-full  md:p-2 p-3 flex flex-col  justify-between items-center   ">
        <div className="h-auto w-full flex justify-between   p-2">
          <div className=" w-1/2 h-auto flex flex-col justify-start">
            <span>{profile.user && profile.user.name} </span>

            {/* user name and btn */}

            <div className="flex gap-1">
              <span>{profile.user && profile.user.username} </span>
              <button className="bg-stone-900 w-[90px] text-xs rounded-xl text-white text-opacity-20 ">
                threads.net
              </button>
            </div>

            <div className="flex justify-stretch ">
              { profile.user && profile.user.followers.length !== 0 && (
                <div className="flex gap-1 mt-5 relative">
                  {profile.user.followers.slice(0, 2).map((follower,index) => (
                    <div
                      key={follower._id}
                      className={`w-4 h-4 bg-black absolute ${
                        index === 0
                          ? "top-0 right-0"
                          : index === 1
                          ? "top-0 left-1"
                          : "bottom-1 left-4" 
                      } rounded-full`}

                      style={{
                        backgroundImage: `url(${
                          follower.profilePic
                            ? follower.profilePic
                            : "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"
                        })`,
                        backgroundSize: "contain",
                      }}
                      ></div>
                      ))} 
                </div>
              )}
              <Follower />

              <span className="mt-4 text-white text-opacity-20 mx-8 hover:underline" 
              onClick={viewFollowers}
              >
                {" "}
                {profile.user && profile.user.followers.length} followers
              </span>
            </div>
          </div>
          <div className="flex justify-end flex-col ">
            <div
              className="h-16 w-16 rounded-full bg-white box-border md:h-20 md:w-20"
              style={{
                backgroundImage: `url(${
                  profile.user && profile.user.profilePic
                    ? profile.user.profilePic
                    : "https://i0.wp.com/www.spielanime.com/wp-content/uploads/2023/07/jujutsu-kaisen-season-1-recap-before-season-2.jpg?fit=1024%2C576&ssl=1"
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="text-2xl ml-12 mt-5">
              <FaInstagram />{" "}
            </div>
          </div>
        </div>
        <button className="w-full h-10 bg-transparent border border-opacity-20 border-white text-center rounded-md mt-3"
        onClick={() => document.getElementById('my_modal_3').showModal()}
        >
          Edit Profile
        </button>
        <div className="w-full h-full  flex justify-evenly items-center  text-white text-center mt-2 p-3">
          <Threads />
          <Replies />
          <Reposts />
        </div> 
      </div>
      <EditProfile/>
    

      {selected === "repliPost" && <RepliPost />}
      {selected === "repost" && <ProfilRepos />}
      {!selected && <ProfilePost />}
    </>
  );
}
export default Profile;
