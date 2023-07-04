import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from './pages/Experience';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';
import Axios from 'axios';
import React,{useState,useEffect} from "react";
import LogIn from './pages/LogIn';
import Details from './pages/Detailss';
import { AnimatePresence } from "framer-motion";
import Signup from "./pages/Signup";

// import { ExperienceSignUp } from './pages/ExperienceSignUp';


function App() {
  
  const [user,setUser]=useState([]);

  useEffect(()=>{
    Axios.get('http://localhost:3001/read').then((response)=>{
      // console.log(response.data[0]);
      setUser(response.data);
    })
  },[])

  return <div className='App'>
  <Router>
  {/* <Navbar/> */}
  {/* <h2>user</h2> */}
  {/* <div>{user.name}</div> */}
  {/* {
    user.map((val,key)=>{
      return <div>{val.email}</div>
    })
  } */}
    <AnimatePresence >
    <Routes>
      <Route path='/' element={<LogIn/>} />
      <Route path='/details' element={<Details/>} />
      <Route path='/signup' element={<Signup/>} />
      {/* <Route path='/signupprojects' element={<ProjectsSignUp/>} /> */}
      {/* <Route path='/signupexperience' element={<ExperienceSignUp/>} /> */}
      <Route path='/home' element={<Home userdetails={user}/>}/>
      <Route path='/projects' element={<Projects userdetails={user} />}/>
      <Route path='/project/:id' element={<ProjectDisplay userdetails={user} />}/>
      <Route path='/experience' element={<Experience userdetails={user}/>}/>
    </Routes>
    </AnimatePresence>
  {/* <Footer/> */}
  </Router>
  </div>;
}

export default App;
