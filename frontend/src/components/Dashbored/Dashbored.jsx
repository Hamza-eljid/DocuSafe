import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./header/Header";
import { useUserContext } from "../UseContext/UserContext";

export default function Dashbored() {
  const navigate = useNavigate();
  const { user, getuserinfo, logout } = useUserContext();

  console.log(localStorage.getItem("authentificated"));
  useEffect(() => {
    if (
      !localStorage.getItem("authentificated") == "true"
    ) {
      navigate("/login");
    }
    if(!user.name){
        getuserinfo()
    }
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
