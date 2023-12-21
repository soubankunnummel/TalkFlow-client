import axios from "axios";



const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
// console.log(baseUrl)


// normal signup

    const signupUser = async (signup) => {
        // console.log(signup)
        try {
            const response = await axios.post(
                `${baseUrl}api/users/signup`,
                signup
              );
              return response.data

        } catch (error) {
            console.log(error)
        }
    }

// google signup 

    const googleSing = async (data) => {
        try {
            const response = await axios.post(`${baseUrl}api/users/login/google`,data)
            return response.data
        } catch (error) {
            console.log("Err in googl login",error)
        }
    }  

    export {signupUser}