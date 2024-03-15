import React, { useState } from "react";
import { FiUserPlus } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import "../App.css";
import { Button, TextField, Typography, ErrorMessage } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LockIcon from '@mui/icons-material/Lock';
import { loginAction } from "../Redux/action";


const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errors, setErrors] = useState("")
    const ErrorMessage = useSelector((state) => state.error.response?.data.message)
    console.log(ErrorMessage)
    const login = useSelector((state) => state.loginData.status)
    console.log(login)
    const [formData,setFormData] = useState({
        mobile:"",
        password:""
    });
    const { mobile, password } = formData;
    const hangleChange = (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
          });
          if(login !== 200){
            setErrors(ErrorMessage)
        }
        else{
            setErrors("")
        }
        
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("submit", formData)  
          dispatch(loginAction(formData,navigate))
    }
   
    const canSignIn =
    [mobile, password].every(Boolean); 
    return (
        <>
            <div className="login-wrapper">
                <form >
                    <Typography variant="h3">Login</Typography>
                    <div className="form-group">
                        <label className="form-label" htmlFor="mobile" ><PersonAddAltIcon/>User Name:</label> 
                        <TextField variant="outlined" label="user"  type="text" className="form-control   border-primary" id="mobile" name="mobile" value={mobile} onChange={hangleChange} autoFocus  required />
                    </div>
                    <div className="form-group">
                        <label className="form-label " htmlFor="pwd" ><LockIcon/> Password:</label> 
                        <TextField  variant="outlined" label="password" type="password" className="form-control  border-primary" id="password" name="password" value={password} onChange={hangleChange} autoFocus   required />
                    </div>   
                    <p style={{color:"red", marginLeft:80, marginTop:20}}>{ErrorMessage}</p>                
                    <Button variant="contained" type="submit" onClick={handleSubmit}  style={{ marginTop: 10, marginLeft:100, padding:"10px 20px" }} disabled={!canSignIn}>login</Button>
                </form>
            </div>
        </>
    )
}
export default Login;