'use client'

import { MdAddCircle } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import PostHead from "./PostHead";
import { useEffect, useState } from "react";
import { getPost } from "../service/post";
const Post = () => {

  const [post, setPost] = useState([])
  console.log(post)
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response  = await getPost()
        if(response){
          setPost(response)
        }

      } catch (error) {
        console.log("Erro in post componet fech post",error)
      }
    }
    fetchPosts()
  },[])
  const arr = [3,5,]

  return (
    <>
    <PostHead/>
    {post.map((item) => (

      <div className="w-full md:w-[580px] h-full  md:p-2 p-3 flex flex-col  justify-between items-center mb-10 ">
       
          <div className="h-auto w-full bg-black border-t-[1px] border-white flex border-opacity-30 p-2">
            <div className="h-ful w-fit">
              <div className="w-fit h-full  flex flex-col items-center gap-3">
              <div
            className="h-10 w-10 rounded-full bg-white box-border "
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-photo/people-holding-wechat-icon_53876-63371.jpg?size=626&ext=jpg&ga=GA1.1.1677573732.1702106196&semt=ais')",
              backgroundSize: "contain",
            }}
            >
           
            <button className=" relative top-5 left-5  ">
              <MdAddCircle className="text-2xl hover:inset-5 " />
            </button>

          </div>
            <div className="h-[450px] w-[1px] bg-white bg-opacity-30 rounded-lg"></div>
              </div>
            </div>
              <div className="w-full h-full bg-black flex flex-col">
                <div className="w-full flex m-3 justify-between gap-3 items-center">
                  <span className="font-medium text-white">{item.postedBy.username} </span>
                  <div className="flex justify-between gap-3 items-center ">
                    
                  <span className="text-xs text-opacity-40 text-white">14 h</span>

                <button >

                <IoIosMore className="text-white"/>
                </button>
                </div>
                  </div>
                <div className="h-[400px] w-auto  m-2">
                  <p className="my-2 mx-2">{item.text}</p>
                  <div className=" w-full h-full rounded-xl ">
                      <img className="rounded-xl  w-full h-full " src={item.img} alt="Post images" />
                  </div>
                </div>
                 </div>
            

          </div>

          
        </div>
    ))}
    </>
  );
};

export default Post;
