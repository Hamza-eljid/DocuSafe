import React, { useRef, useState } from "react";
import styles from "./register.module.css";
import { register } from "./api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [erorr, seterorr] = useState({});
  const [loading, setloding] = useState(false);

  const navigate = useNavigate()

  const name = useRef();
  const email = useRef();
  const password = useRef();
  const password_con = useRef();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const register_form = async() => {
    setloding(true);
    seterorr(false);
    if (name.current.value.trim().length < 4) {
      setloding(false);
      return seterorr({ name: "invalid name" });
    }

    if (
      email.current.value.trim().length <= 10 ||
      !emailRegex.test(email.current.value)
    ) {
      setloding(false);
      return seterorr({ email: "email not valid" });
    }

    if (password.current.value.trim().length < 8) {
      setloding(false);
      return seterorr({ password: "password not valid" });
    }

    if (password_con.current.value != password.current.value) {
      setloding(false);
      return seterorr({ password_con: "passwords not matching " });
    }
try{
  const response = await register({
       name:name.current.value,
      email:email.current.value,
      password:password.current.value
  })
  if(response.data.message){
      setloding(false)
        return  navigate("/login")
    }

}catch(err){
  setloding(false)
  return  seterorr({email: "email already user"})

}

     
    
    
  };

  return (
    <div className={styles.register}>
      <div className={styles.container}>
        <input
          type="text"
          placeholder="name"
          className={styles.input_name}
          ref={name}
        />
        {erorr.name ? <p className={styles.erorr}>{erorr.name}</p> : ""}
        <input
          type="Email"
          placeholder="email"
          className={styles.input_email}
          ref={email}
        />
        {erorr.email ? <p className={styles.erorr}>{erorr.email}</p> : ""}
        <input
          type="text"
          placeholder="password"
          className={styles.input_password}
          ref={password}
        />
        {erorr.password ? <p className={styles.erorr}>{erorr.password}</p> : ""}
        <input
          type="text"
          placeholder="password"
          className={styles.input_password_vonfirm}
          ref={password_con}
        />
        {erorr.password_con? <p className={styles.erorr}>{erorr.password_con}</p> : ""}

        <button
          onClick={register_form}
          className={loading ? styles.button_submit_off : styles.button_submit}
        >
          register {loading ? <span className={styles.spin}></span> : ""}
        </button>
      </div>
    </div>
  );
}
