import { createContext, useState, useContext } from "react";

import { loginApi } from "../Gest/login/api";
import { getuser, getdocuments, logout, setdocument, updateuser, deldocument, upload_doc, get_doc, upd_doc } from "../Dashbored/Apis/api";

export const StateContext = createContext({
  user: {},
  authenticated: false,
  getuserinfo: () => {},
  login: () => {},
  getlogout: () => {},
  setauthenticated: () => {},
  token: "",
  getuser: () => {},
  getdocuments: () => {},
  set_document:()=>{},
  update_user:()=>{},
  del_document:()=>{},
  upload_docu:()=>{},
  get_docu:()=>{},
  upd_docu:()=>{}

  
});

export default function Usercontext(props) {
  const children = props?.children;

  const [user, setuser] = useState({});
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem("authentificated")
  );
  const [token, settoken] = useState("");

  const _setAuthentification = (bol) => {
    localStorage.setItem("authentificated", bol);
    return setauthenticated(bol);
  };

  const login = async (info) => {
    const res = await loginApi(info);
    if (res.data.message) {
      return { email: "email and password mismatch" };
    } else {
      setuser(res.data.user);
      localStorage.setItem("user_id", res.data.user.id);
      localStorage.setItem("token", res.data.access_token);
      settoken(res.data.access_token);
      _setAuthentification(true);
      return { accsess: true };
    }
  };

  const getuserinfo = async () => {
    const res = await getuser(
      localStorage.getItem("token"),
      localStorage.getItem("user_id")
    );
    return setuser(res.data);
  };

  const getlogout = async () => {
    _setAuthentification(false);
    const res = await logout(localStorage.getItem("token"));
  };

  const getDocuments = async () => {
    const data = await getdocuments(
      localStorage.getItem("token"),
      localStorage.getItem("user_id")
    );
    return data.data;
  };

  const set_document = async (payload) => {
    
    const data = await setdocument(localStorage.getItem("token"),payload);
  return console.log(data);
      
  };

  const update_user =async (payload)=>{
            const data = await updateuser(localStorage.getItem("token"),payload)
            return data
  }

  const del_document = async(id)=>{
        const data = await deldocument(localStorage.getItem("token"),id)
  }

  const upload_docu =  async(id)=>{
        const data = await upload_doc(localStorage.getItem("token"),id)
        return data
  }

  const get_docu = async(id)=>{
     const data = await get_doc(localStorage.getItem("token"),id)
      return data.data;
       
  }

  const upd_docu = async(payload)=>{
      const data = await upd_doc(localStorage.getItem("token"),payload)
  }

  return (
    <StateContext.Provider
      value={{
        user,
        setuser,
        getuserinfo,
        login,
        getlogout,
        authenticated,
        getDocuments,
        set_document,
        update_user,
        del_document,
        upload_docu,
        get_docu,
        upd_docu
        // setauthenticated,
        // getuser,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
export const useUserContext = () => useContext(StateContext);
