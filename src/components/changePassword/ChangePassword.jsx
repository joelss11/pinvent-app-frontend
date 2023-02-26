import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { changePassword } from '../../services/authService';
import "./ChangePassword.scss"
import Card from "../card/Card"
import{useNavigate} from "react-router-dom"

const initialState = {
    oldPassword:"",
    password:"",
    password2:"",
}

export default function ChangePassword() {
    
    const navigate = useNavigate()
    const [formData, setformData] = useState(initialState);
    const {oldPassword, password, password2} = formData
    
    const handleInputChange = (e)=>{
        const {name, value} = e.target;
        setformData({...formData,[name]:value})
    }

    const changePass = async(e)=>{
        e.preventDefault()
        if(password !== password2){
            return toast.error("New Passwords do not match")
        }
        const formData ={
            oldPassword,
            password
        }
        const data = await changePassword(formData)
        toast.success(data)
        navigate("/profile")
    }
  return (
    <div className='changed-password'>
        <Card cardClass={"password-card"} >
         <h3>Change Password</h3>
         <form onSubmit={changePass} className="--form-control">
            <input type="password" name="oldPassword" placeholder="Old Password" required value={oldPassword} onChange={handleInputChange} />
            <input type="password" name="password" placeholder="New Password" required value={password} onChange={handleInputChange} />
            <input type="password" name="password2" placeholder="Confirm New Password" required value={password2} onChange={handleInputChange} />
            <button className="button --btn --btn-primary" type="submit">
                Change Password
            </button>
         </form>
        </Card>
        
        </div>
  )
}
