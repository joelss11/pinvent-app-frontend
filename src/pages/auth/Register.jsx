import React from "react"
import styles from "./auth.module.scss"
import {AiOutlineUserAdd} from "react-icons/ai"
import Card from "../../components/card/Card"
import{Link, useNavigate} from "react-router-dom"
import {useState} from "react"
import { useDispatch } from 'react-redux' 
import{toast} from "react-toastify"
import { registerUser, validateEmail } from "../../services/authService"
import { SET_LOGIN, SET_NAME } from "../../redux/features/auth/authSlice"
import Loader from "../../components/loader/Loader"


const initialState = {
  name:"",
  email:"",
  password:"",
  password2:"",
}

 function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setformData] = useState(initialState);
  const {name, email, password,password2}= formData;

  const handleInputChanged = (e)=>{
    const {name,value} = e.target;
    setformData({...formData,[name]:value})
  };
  const register = async(e) =>{
    e.preventDefault();
    if(!name || !email || !password){
      return toast.error("All fields are required")
    }
    if(password.length < 6){
      toast.error("Password must be up to 6 characters")
    }
    if(!validateEmail(email)){
      toast.error("Password  do not match")
    }
    if(password !== password2){
      return toast.error("Passwords do not match")
    }

    const userData = {name, email, password};
    setIsLoading(true)
    try {
      const data = await registerUser(userData);
       await dispatch(SET_LOGIN(true));
       await dispatch(SET_NAME(data.name));
       navigate("/dashboard")
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }

  return (
 <div className={`container ${styles.auth}`}> 
    {isLoading && <Loader />}
    <Card>
      <div className={styles.form}>
        <div className="--flex-center">
          <AiOutlineUserAdd size={35} color="#999"/>
        </div>
        <h2>Register</h2>
        <form onSubmit={register}>
          <input type="text" placeholder="Name" required name="name" value={name} onChange={handleInputChanged} />
          <input type="text" placeholder="Email" required name="email" value={email} onChange={handleInputChanged}/>
          <input type="password" placeholder="password" required name="password" value={password} onChange={handleInputChanged}/>
          <input type="password" placeholder="Confirm Password" required name="password2" value={password2} onChange={handleInputChanged}/>

          <button type="submit" className="--btn --btn-primary -btn-block">Register</button>
        </form>
        
        <span className={styles.register}>
          <Link to="/">Home</Link>
          <p>&nbsp; Already an account? &nbsp;</p>
          <Link to="/login">Login</Link>
        </span>
      </div>
    </Card>
 </div>
  )
}


export default Register