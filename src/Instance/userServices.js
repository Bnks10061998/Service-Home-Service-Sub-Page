
import { instance,protectedInstance } from "./instance";


export const userServices = {

  
    signup: async (values) => {
        
        return await instance.post("/signup", values
        )
    },

    signin: async (values) => {
        
        return await instance.post("/signin",
            values,{
            withCredentials:true
        }
    )
    },
    googleOauth_signin: async () => {
        
        return await instance.get("/google",
          
    )
    },
    googleOauth_signup: async () => {
        
        return await instance.get("/google/callback",
        )
    },

    
    forgot_password: async (values) => {
        
        return await instance.post("/forget", values
        )
    },
    reset_password: async (values) => {
        
        return await instance.post("/reset/:token", values
        )
    },
    send_otp: async (values) => {
        
        return await instance.post("/send-otp", values
        )
    },
};



// logout : async() => {
    //     return await protectedInstance.get('/users/logout')
    // },