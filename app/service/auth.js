// auth.js
import axios from "axios";
import Axios from "./axios";
import useToken from "./Token";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
// const { setToken: setCookieToken } = useToken();
// export default function Auth() {


  const signupUser = async (signup) => {
    try {
      const response = await Axios.post(`${baseUrl}/api/users/signup`, signup);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  };
  
  const googleSing = async (data) => {
    try {
      const response = await Axios.post(
        `${baseUrl}api/users/login/google`,
        data
        );
        return response.data;
      } catch (error) {
        console.log("Error in Google login", error);
      }
    };
    
    const loginuser = async (data) => {
      try {
        const response = await Axios.post(`${baseUrl}api/users/login`, data);
        if (response.status === 200) {
          const token = response.data.token;
          localStorage.setItem("jwt",token)
          // setCookieToken(token);
          console.log(token)
          return response.data;
        }
      } catch (error) {
        console.log("Error in login", error);
      }
    };
    
    const logoutUser = async () => {
      try {
        const token = localStorage.getItem("jwt")
        const response = await axios.post(`/api/users/logout`, null, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
    })
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.log("Error in Logout", error);
    }
  };
  //   return null
  // }
  export { signupUser, googleSing, loginuser, logoutUser };
  