import React from 'react';
import {  signOut } from "firebase/auth";
import {auth} from '../services/firebase';
import { useNavigate } from 'react-router-dom';

import { doc, getDoc,getFirestore } from "firebase/firestore";
//import {db} from './services/firebase'
const db = getFirestore();
const Signout = () => {
    const navigate = useNavigate();
  

 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }

    // const docRef = doc(db, "UserDetails", "hyNRsPViIGc8aF7wYo1yWTi6tiw2");
    // console.log(docRef);
    // const docSnap =  getDoc(docRef);
   
    return(
        
            
                <div>
        			<button onClick={handleLogout}>
                        Logout
                    </button>
        		</div>
             
                
           
        
    )
}
 
export default Signout;
