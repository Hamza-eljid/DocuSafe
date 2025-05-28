import React, { useRef, useState } from "react";
import styles from "./profile.module.css";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../UseContext/UserContext";

export default function Profile() {
  const { user,update_user } = useUserContext();
  const [erorr, seterorr] = useState({});
  const [loading, setloding] = useState(false);

  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const name = useRef();
  const email = useRef();
  const password = useRef();
  const number = useRef();
  const whatsapp = useRef();
  const file = useRef();

  const submit = async(e) => {
    e.preventDefault()
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

    if (whatsapp.current.value.length != 10) {
      setloding(false);
      return seterorr({ whatsapp: "invalid number" });
    }

    if (number.current.value.length != 10) {
      setloding(false);
      return seterorr({ number: "invalid number" });
    }

    if (!/\.(jpg|jpeg|png|gif|webp|bmp|svg)$/i.test(file.current.value)) {
        setloding(false);
      return seterorr({ file: "please only a img is valid" })
    }
   const formData = new FormData();
formData.append('name', name.current.value);
formData.append('email', email.current.value);
formData.append('password', password.current.value);
formData.append('file', file.current.files[0]); // ✅ this is your File object
formData.append('whatsapp_number', whatsapp.current.value);
formData.append('phone_number', number.current.value);

    const d = await update_user(formData)
    return navigate("/dashbored")

  };

  

  return (
    <form encType="multipart/form-data" className={styles.container}>
      <input
        type="text"
        className={styles.input_name}
        defaultValue={user.name}
        ref={name}
      />
      {erorr.name ? <p className={styles.erorr}>{erorr.name}</p> : ""}
      <input
        type="email"
        className={styles.input_email}
        defaultValue={user.email}
        ref={email}
      />
      {erorr.email ? <p className={styles.erorr}>{erorr.email}</p> : ""}
      <input
        type="password"
        className={styles.input_password}
        placeholder="Password"
        ref={password}
      />
      {erorr.password ? <p className={styles.erorr}>{erorr.password}</p> : ""}
      <input
        type="number"
        className={styles.input_whatsapp}
        defaultValue={user.whatsapp_number?user.whatsapp_number:''}
        placeholder="whatsapp number"
        ref={whatsapp}
      />
      {erorr.whatsapp ? <p className={styles.erorr}>{erorr.whatsapp}</p> : ""}
      <input
        type="number"
        className={styles.input_number}
        defaultValue={user.phone_number?user.phone_number:''}
        placeholder="phone number"
        ref={number}
      />
      {erorr.number ? <p className={styles.erorr}>{erorr.number}</p> : ""}

      <input type="file" className={styles.input_img} ref={file} />
      {erorr.file ? <p className={styles.erorr}>{erorr.file}</p> : ""}

      <button
        className={loading ? styles.button_submit_off : styles.button_submit}
        onClick={submit}
      >
        Register {loading ? <span className={styles.spin}></span> : ""}
      </button>
    </form>
  );
}
