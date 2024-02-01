"use client";
import React, { useEffect, useState } from "react";
import { IoIosMore } from "react-icons/io";
import { MdAddCircle } from "react-icons/md";
import Like from "./Like";
import Coment from "./Coment";
import Repost from "./Repost"; 
import Share from "./Share";
import Loading from "./Loading";
import {usePosts} from "../zustand/posts/posts";
import { postDelet } from "../service/post";
import toast from "react-hot-toast";
import { getPostuser, getProfielPost, getUsr } from "../service/users";
import useProfileStore from "../zustand/users/profileStore";



function ProfilePost() {
  const [loading, setLoading] = useState(false);
  const { post, user,serUser, setPost } = usePosts();
  const [data , setData] = useState([])
  const [username, setUserName] = useState("")
  const { profile,  } = useProfileStore();

  useEffect(() => {
    setLoading(!data);
  }, [data]);

  const fechUserData = async() => {
    try {
      const user = await getUsr()
      return user
   
    } catch (error) {
      console.error(error)
    }
  }

  const fechProfilePost = async () => {
    try {
      const user = await fechUserData()
      const username = await getPostuser(user.username)
      if(user && username){

        const posts = await getProfielPost(user.username)
        setData(posts)
        serUser(username)
      }
    } catch (error) {
      
    }
  }

  useEffect(() => { fechProfilePost()},[])

  const handeDelete = async (id) => {
    try {
      const user = await fechUserData()
      const response = await postDelet(id);
      const post = await getProfielPost(user.username);
      if (response && post) {
        setData(post);
        toast.success("Post deleted");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {data.length === 0 ? (
            <div className="flex w-full justify-center items-center  text-white text-opacity-30 h-screen ">
              <h1 className="flex justify-center items-center ">
                No Posts yet
              </h1>
            </div>
          ) : (
            <>
              {data.map((item, index) => (
                <div
                  className=" w-full md:w-[580px] h-auto  md:p-2 p-3 flex flex-col relative top-[-27px]  justify-between items-center mb-10 "
                  key={item._id}
                >
                  <div className="h-auto w-full bg-black border-t-[1px] border-white flex border-opacity-30 p-2">
                    <div className="h-ful w-fit">
                      <div className="w-fit h-full  flex flex-col items-center gap-3">
                        <div
                          className="h-10 w-10 rounded-full bg-white box-border "
                          style={{
                            backgroundImage: `url(${profile.user ? profile.user.profilePic : " https://cdn-icons-png.flaticon.com/512/6596/6596121.png "})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                          }}
                        >
                          <button className=" relative top-5 left-5  ">
                            <MdAddCircle className="text-2xl hover:inset-5 " />
                          </button>
                        </div>
                        <div className="  h-fit md:h-[450px] w-[1px] bg-white bg-opacity-30 rounded-lg"></div>

                        <div className="w-10 h-10 relative flex justify-center">
                          {item.replies.slice(0, 3).map((reply, index) => (
                            <div
                              key={index}
                              className={`w-${5 - index} h-${
                                5 - index
                              } bg-black absolute ${
                                index === 0
                                  ? "top-0 right-0"
                                  : index === 1
                                  ? "top-2 left-1"
                                  : "bottom-1 left-4"
                              } rounded-full`}
                              style={{
                                backgroundImage: `url(${
                                  reply.userProfilePic
                                    ? reply.userProfilePic
                                    : "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                                })`,
                                backgroundSize: "cover",
                              }}
                            ></div>
                          ))}
                        </div> 
                      </div>
                    </div>
                    <div className=" w-full h-full bg-black flex flex-col">
                      <div className="w-full flex m-3 justify-between gap-3 items-center">
                        <span className="font-medium text-white hover:underline">
                          {user.username}{" "}
                        </span>
                        <div className="flex justify-between gap-3 items-center ">
                          <span className="text-xs text-opacity-40 text-white">
                            14 h
                          </span>

                          <div className="dropdown dropdown-end">
                            <button className=" w-7 h-7 rounded-full hover:bg-stone-900 active:scale-[90%] flex justify-center items-center">
                              <IoIosMore className="text-white" />
                            </button>

                            <ul
                              tabIndex={0}
                              className="dropdown-content z-[1] menu p-2 shadow bg-stone-900 rounded-box w-52"
                            >
                              <li className="">
                                <a>Item 1</a>
                              </li>
                              <hr className="w-full bg-black bg-opacity-50" />
                              <li>
                                <a>Item 2</a>
                              </li>
                              <hr />
                              <li
                                className="text-red-800"
                                onClick={() => handeDelete(item._id)}
                              >
                                <a>Delete</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="h-fit w-auto  md:h-[400px] m-2">
                        <p className="my-2 mx-2">{item.text}</p>
                        <div className=" w-fit h-fit md:h-full md:w-full rounded-xl ">
                          <img
                            className="rounded-xl  w-fit h-full "
                            src={item.img}
                            alt="Post images"
                          />
                        </div>
                      </div>

                      <div className="flex gap-1 mx-2 mt-10 items-center">
                        <Like postId={item._id} index={index} /> <Coment />{" "}
                        <Repost /> <Share />
                      </div>
                      <div className="w-auto h-3 text-white text-opacity-20 gap-2 flex ms-3">
                        <span>{item.replies.length} replies</span>
                        <span>{item.likes.length} likes</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </>
      )}
    </>
  );
}

export default ProfilePost;
