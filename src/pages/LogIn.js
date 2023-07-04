import React from 'react'
import '../styles/Login.css'
import {useState,useEffect} from "react";

import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom';


import { auth } from '../services/firebase';
import { collection, getDocs } from "firebase/firestore";
import {db} from "../services/firebase";

function Login()
{
  
  const [email,setEmail]=useState(null);
  const [password,setPassword]=useState('');
   const navigate = useNavigate();


  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const uid = user.uid;
        //console.log(uid);
      //   const fs = require('fs');
      //   fs.writeFile('../services/user_id.txt', uid, (err) => {
          
      //     // In case of a error throw err.
      //     if (err) throw err;
      // })
      window.user_id=uid;
         navigate("/home");
        //console.log(user);
    })
    .catch((error) => {
      
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode,errorMessage);
        console.log(errorMessage)
    });
   
}


    return (
        <div className="full-screen-container">
          <div  className='login-container'>
              <h3 className='login-title'>Welcome Back !!</h3>
              <form>
                <div className='input-group'>
                  <label htmlFor="email">Email</label>
                  <input
                                        type="email"
                                        label="Email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}  
                                        required                                    
                                        placeholder="Email address"                                
                                    />
                </div>
    
                <div className='input-group'>
                  <label htmlFor="password">password</label>
                  
                  <input
                                        
                                        type="text"
                                        label="Create password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} 
                                        required                                 
                                        placeholder="Password"              
                                    />
                </div>
                <div>
                  <button type='submit' onClick={onLogin}  className='login-button'  >Sign In</button>
                </div>
                <p>
               Don't have an account?{' '}
                                <NavLink to="/signup" className="navsign">
                                    Sign up
                                </NavLink>
                                </p>       
              </form>
    
          </div>
        </div>
      );
}

export default Login;