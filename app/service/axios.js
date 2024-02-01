// // axiosInstance.js
import axios from "axios";

// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// const Axios = axios.create({
//   baseURL: baseUrl, 
//   withCredentials:true,
//   headers: {
//     'Content-Type': 'application/json',
//     ...(typeof window !== 'undefined' && {
//       Authorization: localStorage.getItem('jwt'),
//     }),
//   },
// });


// export default Axios;

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL.replace(/\/$/, ''); 

const Axios = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

export default Axios;
