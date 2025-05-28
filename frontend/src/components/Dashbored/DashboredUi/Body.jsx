import React, { useEffect } from "react";
import styles from "./body.module.css";
import { useUserContext } from "../../UseContext/UserContext";
import { useState } from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";


export default function  Body  () {
 const {getDocuments,logout} = useUserContext()
 const [data,setdata] = useState([])
 const navigate = useNavigate()

 const [expired,setexpired] = useState(false)
 const [all,setall] = useState(true)
const [valid,setvalid] = useState(false)

 useEffect(()=>{
  const get_data = async ()=>{
    const res = await getDocuments()
     return setdata(res)
  }
  get_data()
 },[])
 
  return (
    <div className={styles.container}>
      <div className={styles.ulWrapper}>
        <ul className={styles.ul}>
          <li onClick={()=>{
            setexpired(false)
            setvalid(false)
            return setall(true)
          }}>All</li>
          <li onClick={()=>{
            setexpired(true)
            setvalid(false)
            return setall(false)
          }}>Expired</li>
          <li onClick={()=>{
            setexpired(false)
            setvalid(true)
            return setall(false)
          }}>valid</li>
          <li onClick={()=>{
            return navigate("/add")
          }} >+</li>
        </ul>
      </div>

     {all&&data.map((doc,key)=>{
      return <Card key={key} id={doc.id}  title={doc.document_name} description={doc.description} expiring={doc.remind_me_befor}/>
     })}

     {expired&&data.map((doc,key)=>{
      if(doc.valid == 0){
        return <Card id={doc.id} key={key}  title={doc.document_name} description={doc.description} expiring={doc.remind_me_befor}/>
      }
     })}

      {valid&&data.map((doc,key)=>{
      if(doc.valid == 1){
        return <Card key={key} id={doc.id} title={doc.document_name} description={doc.description} expiring={doc.remind_me_befor}/>
      }
     })}
    
    </div>
  );
}
