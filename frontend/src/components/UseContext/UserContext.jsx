import { createContext, useState, useContext, useEffect } from "react";

import { loginApi } from "../Gest/login/api";
import { getuser } from "../Dashbored/Apis/api";

export const StateContext = createContext({
    user: {},
    authenticated: false,
    getuserinfo: () => {},
    login: () => {},
    logout: () => {},
    setauthenticated: () => {},
    token:'',
    getuser: () => {},
});

export default function Usercontext(props) {
    const children = props?.children;

    
    const [user,setuser] = useState({})
    const [authenticated,setauthenticated] =useState(localStorage.getItem("authentificated"))
    const [token,settoken] = useState('')
    
   

    const _setAuthentification = (bol)=>{
        localStorage.setItem("authentificated",bol)
        return setauthenticated(bol)
    }



    const login = async(info)=>{
        const res = await loginApi(info)
        if(res.data.message){
            return {email:"email and password mismatch"}
        }else{
            setuser(res.data.user)
            localStorage.setItem("token",res.data.access_token)
            settoken(res.data.access_token)
           _setAuthentification(true)
           return {accsess : true}

            
        }
        
    }

    const getuserinfo = async() =>{
            const res = await getuser( localStorage.getItem("token"),1)
            setuser(res.data)
    }


    const  logout = ()=>{
            _setAuthentification(false)
    }
  

   

    return (
        
        
        <StateContext.Provider
            value={{
                user,
                setuser,
                getuserinfo,
                login,
                logout,
                authenticated
                // setauthenticated,
                // getuser,
            }}
        >
          
            {children}
        </StateContext.Provider>
    );
}
export const useUserContext = () => useContext(StateContext);
