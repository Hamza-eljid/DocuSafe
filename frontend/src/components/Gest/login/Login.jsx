import React, { useRef, useState } from 'react'
import styles from './loging.module.css'
import { useUserContext } from '../../UseContext/UserContext'
import { useNavigate } from 'react-router-dom'


export default function Login() { 

  const [erorr,seterorr] = useState({})

  const [loading,setloding]  = useState(false)

  const email = useRef()
  const password = useRef()

  const navigate = useNavigate()

  const {login} = useUserContext()

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const submit = async()=>{
    setloding(true)

    seterorr({})

    if(email.current.value.trim().length <= 10 || !emailRegex.test(email.current.value) ){
      setloding(false)
      return seterorr({email:"email not valid"});
    }

    if(password.current.value.trim().length < 8){
      setloding(false)
       return seterorr({password:"password not valid"});
    }
    
   const result = await login({
    email:email.current.value,
    password:password.current.value
    
  })
  if(result.email){
    setloding(false)
    return  seterorr(result)
  }else{
    setloding(false)
     return  navigate("/dashbored")
  }

  
  
   
   
    
  }
  return (
    <div className={styles.login}>
      <div className={styles.container}>
          <input  type="Email" placeholder='Email' className={styles.input_email} ref={email}/>
          {erorr.email?<p className={styles.erorr}>{erorr.email}</p>:''}
          <input type="password" placeholder='Password' className={styles.input_password} ref={password} />
          {erorr.password?<p className={styles.erorr}>{erorr.password}</p>:''}
          <button onClick={submit} className={loading?styles.button_submit_off:styles.button_submit}>Login {loading?<span className={styles.spin}></span>:''}</button>

      </div>
      
      </div>
  )
}
