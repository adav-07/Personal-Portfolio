import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../services/firebase';
// import './Login.css'
 
const Signup = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            
            const user = userCredential.user;
            window.user_id = user.uid;
            navigate("/details")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }
    const onLogin = () =>{
        alert("log")
    }
 
  return (
    <div className="full-screen-container">
        <div  className='login-container'>
            <h3 className='login-title'>Welcome</h3>
            <form >
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
                <button type='submit' onClick={onSubmit}  className='login-button'  >Sign Up</button>
            </div>
            <p>
               Already have an account?{' '}
                                <NavLink to="/" className="navsign">
                                    Sign in
                                </NavLink>
                                </p>        

            </form>

        </div>
</div>
    
    
  )
}
 
export default Signup;
