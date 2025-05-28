import React, { useRef, useState } from "react";
import styles from "./add.module.css";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../UseContext/UserContext";

export default function Add() {
const {set_document} = useUserContext()

  const [loading, setloding] = useState(false);
  const [erorr, seterorr] = useState({});

  const navigate = useNavigate();

  const name = useRef();
  const description = useRef();
  const file = useRef();
  const remindme = useRef();
  const expiring = useRef();

  const submit = async (e) => {
    e.preventDefault();
    setloding(true);
    seterorr(false);
    if (name.current.value.trim().length < 4) {
      setloding(false);
      return seterorr({ name: "invalid name" });
    }

    if (description.current.value.trim().length < 8) {
      setloding(false);
      return seterorr({
        description: "invalid description (plus de 8 caractere)",
      });
    }

    if (!/\.pdf$/i.test(file.current.value)) {
      setloding(false);
      return seterorr({ file: "please only a pdf is valid" });
    }

    const inputDate = new Date(remindme.current.value);
    const today = new Date();

    inputDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    

    if (inputDate < today || inputDate == 'Invalid Date') {
      return seterorr({ remindme: "invalid date (the past not allowed)" });;
    }

    const inputDate_ex = new Date(expiring.current.value);
    inputDate_ex.setHours(0, 0, 0, 0);

     if (inputDate_ex < today || inputDate_ex == 'Invalid Date') {
      return seterorr({ expiring: "invalid date (the past not allowed)" });;
    }


       const formData = new FormData();
    formData.append('document_name', name.current.value);
    formData.append('description', description.current.value);
    formData.append('file', file.current.files[0]); // ✅ this is your File object
    formData.append('remind_me_befor', remindme.current.value);
    formData.append('expiring_date', expiring.current.value);

        const d = await set_document(formData)
        return navigate("/dashbored")
  };

  return (
    <form className={styles.container} >
      <input type="text" ref={name} placeholder="document name" />
      {erorr.name ? <p className={styles.erorr}>{erorr.name}</p> : ""}
      <input type="text" ref={description} placeholder="document description" />
      {erorr.description ? (
        <p className={styles.erorr}>{erorr.description}</p>
      ) : (
        ""
      )}

      <label htmlFor="">date d'eperation :</label>
      <input type="date" ref={expiring} />
      {erorr.expiring ? <p className={styles.erorr}>{erorr.expiring}</p> : ""}

      <label htmlFor="">date de rimind :</label>
      <input type="date" ref={remindme} placeholder="" />
            {erorr.remindme? <p className={styles.erorr}>{erorr.remindme}</p> : ""}

      <label htmlFor="">pdf of the document :</label>
      <input type="file" ref={file} />
      {erorr.file ? <p className={styles.erorr}>{erorr.file}</p> : ""}
      <button
        className={loading ? styles.button_submit_off : styles.button_submit}
        onClick={submit}
      >
        submite {loading ? <span className={styles.spin}></span> : ""}
      </button>
    </form>
  );
}
