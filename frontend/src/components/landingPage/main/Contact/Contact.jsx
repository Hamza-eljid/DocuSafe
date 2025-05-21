import React, { useRef, useState } from "react";
import "./contact.css";

import { test } from "../../Api/contact.js";

export default function Contact() {
  const [error, seterror] = useState({});
  const [sending,setsending] = useState(false)

  const nom = useRef();
  const email = useRef();
  const description = useRef();

  const submit_form = async(e) => {
    e.preventDefault();
    setsending(true)

    seterror({});

    if (nom.current.value.trim() == "") {
          setsending(false)

      return seterror({ nom: "name connot be empty" });
    } else if (nom.current.value.length < 5) {
          setsending(false)

      return seterror({ nom: "name connot be less than 5 caracters" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.current.value.trim() == "") {
          setsending(false)

      return seterror({ email: "email connot be empty" });
    } else if (email.current.value.length < 10) {
      return seterror({ email: "email connot be less than 10 caracters" });
    } else if (!emailRegex.test(email.current.value)) {
          setsending(false)

      return seterror({ email: "please submit a valid email" });
    }

    if (description.current.value.trim() == "") {
          setsending(false)

      return seterror({ description: "description connot be empty" });

    } else if (description.current.value.length < 10) {
          setsending(false)

      return seterror({ description: "description connot be less than 10 caracters" });
    }

    
    


    const res = await test({
      nom: nom.current.value,
      email: email.current.value ,
      description : nom.current.value,
    });

    

    description.current.value=''
    setsending(false)

    return alert(res.data.message)

    
  };

  return (
    <div className="contact_container">
      <div className="contact_main">
        <div className="contact_form">
          <form className="inside_form">
            <p className="contact_title">Get in Touch</p>
            <p className="contact_title2">
              We are here for you! How can we help?
            </p>
            <input
              type="text"
              ref={nom}
              className="input_1"
              placeholder="Enter your name"
            />
            {error.nom ? <p className="not_valid">{error.nom}</p> : ""}
            <input
              type="email"
              ref={email}
              className="input_1"
              placeholder="Enter your email address"
            />
            {error.email ? <p className="not_valid">{error.email}</p> : ""}

            <textarea
              ref={description}
              className="input_2"
              placeholder="Go ahead, We are listening..."
            ></textarea>
            {error.description ? (
              <p className="not_valid">{error.description}</p>
            ) : (
              ""
            )}

            <button id="form"  onClick={submit_form}  className={sending?'disabled':"contact_submit"}>
              submit {sending?<span className="span"></span>:''}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
