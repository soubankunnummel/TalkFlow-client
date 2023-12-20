// import BottomBar from "@/app/components/BottomBar";
import Post from "@/app/components/Post";
import PostHead from "@/app/components/PostHead";
// import Navbar from "@/app/components/navbar";
import React from "react";


function Home() {
  return (
    <div className=" w-full h-auto flex justify-center flex-col items-center">
     
      <PostHead/>
      <Post/>
      
    
    </div>
  );
}

export default Home;
