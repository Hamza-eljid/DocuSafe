import React from "react";
import styles from  "./Pricing.module.css";

export default function Pricing() {
  return (
    <>
      <div id="pricing"  className={styles.Container}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.shape}>
              <div className={styles.shape1}>
              <div className={styles.info}>
                <div className={styles.first_text}>
                  
                  <p className={styles.zero}>$0</p>
                </div>
                <div className={styles.seconde_text}>
                  <p>/Month</p>
                </div>
              </div>
            </div>
            <div className={styles.shape2}></div>
            </div>
             <p className={styles.pricing_plan}>Free plan</p>
            <p className={styles.plan}>Basic</p>


            <div className={styles.card_body}>
              <div className={styles.fist_vecteur}>
                <svg
                  width="45"
                  height="22"
                  viewBox="0 0 26 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10.2675L9.33333 17.5015L24 2"
                    stroke="#4BA3FA"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className={styles.card_description}>
                    Up to 5 documents
                </p>
              </div>
               <div className={styles.fist_vecteur}>
                <svg
                  width="45"
                  height="22"
                  viewBox="0 0 26 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10.2675L9.33333 17.5015L24 2"
                    stroke="#4BA3FA"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className={styles.card_description}>
                    Ads shown
                </p>
              </div>
               <div className={styles.fist_vecteur}>
                <svg
                  width="45"
                  height="22"
                  viewBox="0 0 26 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10.2675L9.33333 17.5015L24 2"
                    stroke="#4BA3FA"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className={styles.card_description}>
                    Max file size: 2MB
                </p>
              </div>
               <div className={styles.fist_vecteur}>
                <svg
                  width="45"
                  height="22"
                  viewBox="0 0 26 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10.2675L9.33333 17.5015L24 2"
                    stroke="#4BA3FA"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className={styles.card_description}>
                    File types: PDF only
                </p>
              </div>
              </div>
                <div className={styles.footer}>
                <button className={styles.button}> Choose this plan</button>
               
            </div> 
          </div>
          <div className={styles.card}>
             <div className={styles.shape}>
            <div className={styles.shape1}>
              <div className={styles.info}>
                <div className={styles.first_text}>
                  <p className={styles.zero}>$2</p>
                </div>
                <div className={styles.seconde_text}>
                  <p>/Month</p>
                </div>
              </div>
            </div>
            <div className={styles.shape2}></div>
            </div>
            <p className={styles.pricing_plan}>Paid Plan</p>
            <p className={styles.plan}>Standard</p>

            <div className={styles.card_body}>
              <div className={styles.fist_vecteur}>
                <svg
                  width="45"
                  height="22"
                  viewBox="0 0 26 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10.2675L9.33333 17.5015L24 2"
                    stroke="#4BA3FA"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className={styles.card_description}>
                    Up to 50 documents
                </p>
              </div>
               <div className={styles.fist_vecteur}>
                <svg
                  width="45"
                  height="22"
                  viewBox="0 0 26 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10.2675L9.33333 17.5015L24 2"
                    stroke="#4BA3FA"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className={styles.card_description}>
                    No ads
                </p>
              </div>
               <div className={styles.fist_vecteur}>
                <svg
                  width="45"
                  height="22"
                  viewBox="0 0 26 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10.2675L9.33333 17.5015L24 2"
                    stroke="#4BA3FA"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className={styles.card_description}>
                    Max file size: 10MB
                </p>
              </div>
               <div className={styles.fist_vecteur}>
                <svg
                  width="45"
                  height="22"
                  viewBox="0 0 26 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10.2675L9.33333 17.5015L24 2"
                    stroke="#4BA3FA"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className={styles.card_description}>
                    File types: PDF, JPG, PNG
                </p>
              </div>
            </div>
              <div className={styles.footer}>
                <button className={styles.button}> Choose this plan</button>
               
            </div> 
          </div>
         <div className={styles.card}>
           <div className={styles.shape}>
            <div className={styles.shape1}>
              <div className={styles.info}>
                <div className={styles.first_text}>
                  <p className={styles.zero}>$3</p>
                </div>
                <div className={styles.seconde_text}>
                  <p>/Month</p>
                </div>
              </div>
            </div>
            <div className={styles.shape2}></div>
            </div>
            <p className={styles.pricing_plan}>Paid Plan</p>
            <p className={styles.plan}>Premuim</p>

            <div className={styles.card_body}>
              <div className={styles.fist_vecteur}>
                <svg
                  width="45"
                  height="22"
                  viewBox="0 0 26 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10.2675L9.33333 17.5015L24 2"
                    stroke="#4BA3FA"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className={styles.card_description}>
                    Unlimited documents
                </p>
              </div>
               <div className={styles.fist_vecteur}>
                <svg
                  width="45"
                  height="22"
                  viewBox="0 0 26 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10.2675L9.33333 17.5015L24 2"
                    stroke="#4BA3FA"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className={styles.card_description}>
                    No ads
                </p>
              </div>
               <div className={styles.fist_vecteur}>
                <svg
                  width="45"
                  height="22"
                  viewBox="0 0 26 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10.2675L9.33333 17.5015L24 2"
                    stroke="#4BA3FA"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className={styles.card_description}>
                    Max file size: 50MB
                </p>
              </div>
               <div className={styles.fist_vecteur}>
                <svg
                  width="45"
                  height="22"
                  viewBox="0 0 26 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10.2675L9.33333 17.5015L24 2"
                    stroke="#4BA3FA"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className={styles.card_description}>
                    File types: PDF, JPG, PNG, DOCX
                </p>
                </div>
            </div>  
            <div className={styles.footer}>
                <button className={styles.button}> Choose this plan</button>
               
            </div>            
            
          </div>
        </div>
      </div>
    </>
  );
}
