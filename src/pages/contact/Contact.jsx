import React, { useState } from 'react'
import Card from '../../components/card/Card';
import "./Contact.scss"
import { FaPhoneAlt, FaEnvelope, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { toast } from 'react-toastify';
import { BACKEND_URL } from "../../services/authService";
import axios from 'axios';


export default function Contact() {

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const data = {
    subject,
    message
  }

  const sendEmial = async(e)=>{
    e.preventDefault()
    try {
        const response = await axios.post(`${BACKEND_URL}/api/contactus`,data)
        setSubject("")
        setMessage("")
        toast.success(response.data.message)
    } catch (error) {
        toast.error(error.message)
    }
  }

  return (
    <div className='contact'>
        <h3 className='--mt'>Contact Us</h3>
        <div className='section'>
          <form onSubmit={sendEmial}>
           <Card cardClass="card"> 
            <label>Subject</label>
            <input type="text" name='subject' placeholder='Subject' required value={subject} onChange={(e)=>setSubject(e.target.value)} />
            
            <label>Message</label>
            <textarea
             cols="30"
             rows="10" 
             name='message'
             required value={message}
             onChange={(e)=>setMessage(e.target.value)} >
             </textarea>
             <button className='--btn --btn-primary'>Send Message</button>
           </Card>
          </form>
          <div style={{padding: "2rem",background: "#009dcf", color: "#fff"}}>
          <Card cardClass={"card2"}>
            <h3 style={{color: "#fff"}}>Our Contact Information</h3>
            <p style={{color: "#fff"}}>Fill the form or contact us via other channels listed below</p>

            <div className="icons">
              <span>
                <FaPhoneAlt />
                <p style={{color: "#fff"}}>3116503734</p>
              </span>
              <span>
                <FaEnvelope />
                <p style={{color: "#fff"}}>erjoel@hotmail.com</p>
              </span>
              <span>
                <GoLocation />
                <p style={{color: "#fff"}}>Lorica, Colombia</p>
              </span>
              <span>
                <FaTwitter />
                <p style={{color: "#fff"}}>@Joelss11</p>
              </span>
            </div>
          </Card>
        </div>
        </div>
        </div>
  )
}
