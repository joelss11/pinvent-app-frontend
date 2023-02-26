import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { SET_LOGIN } from '../redux/features/auth/authSlice'
import { getLoginStatus } from '../services/authService'


export default function useRedirectLoggedOutUser(path) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

  useEffect(() => {
   const useRedirectLoggedOutUser = async()=>{
   const isLoggedIn = await getLoginStatus()
   dispatch(SET_LOGIN(isLoggedIn))
   if(!isLoggedIn){
    toast.info("Sesion expired, please login to continue")
    navigate(path)
    return
   }    
}
useRedirectLoggedOutUser()
   }, [navigate, path, dispatch]);
}
