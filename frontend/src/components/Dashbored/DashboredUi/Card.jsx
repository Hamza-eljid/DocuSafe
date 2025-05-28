import React from 'react'
import styles from './card.module.css'
import upd from "../../../assets/edit.png";
import del from "../../../assets/delete.png";
import down from "../../../assets/download.png"
import { useUserContext } from '../../UseContext/UserContext';
import { useNavigate } from 'react-router-dom';

export default function Card({title,description,expiring,id}) {

  const navigate = useNavigate()

  const {del_document,upload_docu} = useUserContext()

    const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


const monthNumber = expiring[5]+expiring[6];
const monthName = monthNames[parseInt(monthNumber)];
const monthday =parseInt( expiring[8]+expiring[9]);
const year = "20"+parseInt( expiring[2]+expiring[3])


const delete_doc = ()=>{
    return del_document(id)
}

const upload = async()=>{
  
    const response = await upload_docu(id);

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;

    // Optionally, get file name from headers or set manually
    link.setAttribute('download', 'document.pdf');

    document.body.appendChild(link);
    link.click();

    link.remove();
    window.URL.revokeObjectURL(url);
}


  return (
    <div className={styles.data}>
        <div className={styles.data_time}>
          <p>12:00 pm</p>
          <p>{monthName+" "+monthday}</p>
          <p>{year}</p>
        </div>
        <hr />
        <div className={styles.data_body}>
          <h3>{title}</h3>
          <div className={styles.descRow}>
            <p>{description}</p>
            <button >
              <img onClick={()=>{
               navigate(`/update/${id}`)
              }} src={upd} alt="icon" />
            </button>
            <button onClick={delete_doc}>
              <img src={del} alt="" />
            </button>
             <button>
              <img onClick={upload} src={down} alt="" />
            </button>
          </div>
        </div>
    </div>
  )
}
