import React, { useEffect, useRef, useState } from "react";
import styles from "./add.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "../../UseContext/UserContext";

export default function Update() {

    const {id} = useParams()
    

    const [document,setdocument] = useState({})


    

const {get_docu} = useUserContext()
useEffect(()=>{
    const getDoc =async()=>{
           const res = await get_docu(id)
           setdocument(res)
    }
    getDoc()
})

const {set_document,upd_docu} = useUserContext()




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



    const payload = {
        id : id,
        document_name : name.current.value,
        file :file.current.files[0],
        remind_me_befor:remindme.current.value,
        expiring_date :expiring.current.value,
        description: description.current.value
        


    }

        // const d = await set_document(formData)
        const d = await upd_docu(payload)
        return navigate("/dashbored")
  };

  return (
    <form className={styles.container} >
      <input type="text" ref={name} placeholder="document name" defaultValue={document.document_name} />
      {erorr.name ? <p className={styles.erorr}>{erorr.name}</p> : ""}
      <input type="text" ref={description} placeholder="document description" defaultValue={document.description}/>
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
