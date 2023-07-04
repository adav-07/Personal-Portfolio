import React from 'react';
import { useParams } from 'react-router-dom';
// import { projectList } from '../helpers/ProjectList';
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ProjectDisplay(props) {
  var user=props.userdetails;
  var projects=[];
  user.map((val,key)=>{
    if(val.user_id===window.user_id){
        projects=val.Projects;
    }
  })
  // console.log(projects);
    const {id}=useParams();
    var project=projects[id];
  console.log(project);
    // const project=projectList[id];
  return (
    
      <div className='project'>
        <div>
          <center><h1>{project.project_name}</h1></center>
          <br></br>
          <img src={project.image_url}/>
        </div>
        <p><b style={{"opacity":0.5,"fontSize":40}}>Skills: </b>{project.skills_used.join()}</p>
        {/* <p><b>Skills: </b>{
          
        }</p> */}
        <br></br>
        <center><p className='para'><b style={{"opacity":0.5,"fontSize":40}}>Description: </b>{project.description}</p></center>
        {/* <GitHubIcon/> */}
    </div>
  )
}

export default ProjectDisplay;