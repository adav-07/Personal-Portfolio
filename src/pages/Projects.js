import React from 'react'
import ProjectItem from '../components/ProjectItem';
import "../styles/Project.css";
// import { projectList } from '../helpers/ProjectList';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// import {motion} from "framer-motion";

function Projects(props) {
  var user=props.userdetails;
  var projects=[];
  user.map((val,key)=>{
    if(val.user_id===window.user_id){
        projects=val.Projects;
    }
})
// console.log(projects);
  return (
    <div>
    <Navbar/>
    <div className='projects'>
    {/* <h1 className='projectsh1' style={{"color":"#ddd"}}>My Projects</h1> */}
    <div className='projectList'>
      {
        projects.map((project,idx)=>{
          return <ProjectItem index={idx} name={project.project_name} image={project.image_url}/>
        })
      }
    </div>
    </div>
    <Footer/>
    </div>
    
  );
}

export default Projects;