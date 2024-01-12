
import { folloUnfollowUser } from "@/app/service/users";
import usersStore from "@/app/zustand/users/usersStore";
import React, { useState } from "react";

function Follower() {
  const { followerss } = usersStore();
  const [followStates, setFollowStates] = useState([]);

  const handleFollow = async (id, index) => {
    try {
      const response = await folloUnfollowUser(id);
      if (response) {
        setFollowStates((prevState) => {
          const newState = [...prevState];
          newState[index] = !prevState[index];
          return newState;
        });
      }
    } catch (error) {
      console.log("Error : ", error);
      alert(error.message)
    }
  };
  return (
    <>
      <div>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box bg-stone-900">
            {folloUnfollowUser.length === 0 ? (
              <div className='flex justify-center items-center h-screen text-white text-opacity-25'>
              <p>No followers </p>
     
            </div>
            ): (
                <>
              {followerss.map((user, index) => (
                <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center border-b-[1px] border-white border-opacity-20 text-white mt-3 p-3">
                <div className="w-full md:w-1/2 h-auto flex justify-start gap-2 items-center mb-3 md:mb-0">
                  <div className="w-12 h-12 bg-black rounded-full overflow-hidden">
                    <img
                      src={
                        user.profilePic ||
                        "https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small_2x/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
                      }
                      alt={user.username}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-auto h-auto flex flex-col ms-2">
                    <span
                      className="hover:underline mb-3 md:mb-0"
                      // onClick={() => handleUser(user.username)}
                    >
                      <span className="hover:underline mb-3 md:mb-0">
                        {user.username}
                      </span>
                    </span>
                    <span>{user.followers.length} followers</span>
                  </div>
                </div>

                <div
                className=" active:scale-95 w-full md:w-28 h-9 border border-white border-opacity-20 rounded-lg flex justify-center items-center"
                onClick={() => handleFollow(user._id, index)}
                >
                <button> {followStates[index] ? "Unfollow" : "Follow"}</button>
                
                </div>
                </div>
                ))}
              </>
              )}


          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </>
  );
}

export default Follower;
