import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Details= () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [designation, setDesignation] = useState('');
  const [git_url,setGit_url]=useState('');
  const [linkedin_url,setLinkedin_url]=useState('');
  const [skills,updateSkills]=useState([]);
  const [skill,setSkill]=useState('');
  const [projects,setProjects]=useState([]);
  const [proskill,setProskill]=useState('');
//   console.log(proskill);
  
  const [project,setProject]=useState({
    project_name:"",
    image_url:"",
    skills:[],
    description:""
  });

  let id=window.user_id;

  const [exps,setExps]=useState([]);
  const [exp,setExp]=useState({
    from:"",
    to:"",
    place:"",
    place_name:"",
    description:""
  });

  

  const Addskill =(event) =>
  {
    event.preventDefault();
    updateSkills(arr =>[...arr,skill]); //update the oldarray with an new array

    setSkill('');
  
  
  }

  const AddProject = (event) => 
  {
    event.preventDefault();
    const { project_name, value } = event.target;
    setProject((prevState) => ({
      ...prevState,
      [project_name]: value,
    }));
    // console.log(project)
  };

  const AddProSkill =(event) =>{
    event.preventDefault();
    setProject((prevState) => ({
      ...prevState,
      skills: [...prevState.skills, proskill],
    }));
  }

  const handleProjectSubmit = (event) => 
  {
    event.preventDefault();
    setProjects((projects) => [...projects,project]);

    //   console.log(projects);
      // setProskill(null);
      // updateSkills([]);
      setProject({
        project_name:"",
        image_url:"",
        skills:[],
        description:""
      });

    
  };

  const AddExp= (event) => 
  {
    event.preventDefault();
    const { name, value } = event.target;
    setExp((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    
    
  };

  const handleExpSubmit = (event) => 
  {
    event.preventDefault();
    setExps([...exps,exp]);
    //   console.log(exps);
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userDetails = {
      name,
      email,
      phone,
      designation,
      git_url,
      linkedin_url,
      skills,
      projects,
      exps,
      id
      
    };
    console.log(userDetails);
    // console.log(projects);
    console.log("hugfxd");
    axios.post("http://localhost:3001/insert",userDetails);
   navigate('/');
    // navigate("/home")


  };

  return (
    
    
    <div>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="name"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="email"
        />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          placeholder="mobile"
          onChange={(event) => setPhone(event.target.value)}
          
        />
      </div>
      <div>
        <label htmlFor="designation">designation</label>
        <input 
          type="text" 
          id="designation"
          value={designation}
          placeholder="designation"
          onChange={(event) => setDesignation(event.target.value)}
        />
        
      </div>
      <div>
        <label htmlFor="git_url">Github_Url</label>
        <input 
          type="text" 
          id="git_url"
          value={git_url}
          placeholder="github_url"
          onChange={(event) => setGit_url(event.target.value)}
        />
        
      </div>
      <div>
        <label htmlFor="linkedin_url">Linkedin_url</label>
        <input 
          type="text" 
          id="linkedin_url"
          value={linkedin_url}
          placeholder="linkedin_url"
          onChange={(event) => setLinkedin_url(event.target.value)}
        />
        
      </div>
      
      <div>
           <label htmlFor="skills">Skills</label>
           <input 
              type="text"  
              id="skills" 
              onChange={(e)=>setSkill(e.target.value)}
           />
           <button onClick={Addskill} type="submit" >Add</button>
           
      </div>
      <div className='skills_display'>
          {skills.map( e =>
            <div>{ e }</div>
          )}
      </div>

      <div>
          
            
          <label htmlFor="name">Project Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={project.name}
            onChange={AddProject}
            
          />

          

          <label htmlFor="image_url">image URL</label>
          <input
            type="text"
            id="image_url"
            name="image_url"
            value={project.image_url}
            // onChange={AddProject}
            
          />

            <div className="">
              <label htmlFor="skills">Skills:</label>
              <input
                type="text"
                id="skills"
                name="skills"
                
                onChange={(e)=> setProskill(e.target.value)}
              />
               {/* <button onClick={AddProSkill} type="submit" >Add</button> */}
               <button onClick={AddProSkill}  >Add</button>
               
            </div>
          
      


          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={project.description}
            onChange={AddProject}
            
          ></textarea>

          {/* <button type="submit" onClick={handleProjectSubmit}>Add Project</button> */}
          <button onClick={handleProjectSubmit}>Add Project</button>
        
        
      </div>

      <div>
      
          <label htmlFor="from">From:</label>
          <input
            type="text"
            id="from"
            name="from"
            value={exp.from}
            onChange={AddExp}
            
          />
         <label htmlFor="to">To:</label>
          <input
            type="text"
            id="to"
            name="to"
            value={exp.to}
            onChange={AddExp}
            
          />

          

          <label htmlFor="Place">Place:</label>
          <input
            type="text"
            id="place"
            name="place"
            value={exp.place}
            onChange={AddExp}
            
          />

          <label htmlFor="Place_name">Place Name:</label>
          <input
            type="text"
            id="place_name"
            name="place_name"
            value={exp.place_name}
            onChange={AddExp}
            
          />

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={exp.description}
            onChange={AddExp}
            
          ></textarea>

          <button onClick={handleExpSubmit}>Add Experience</button>
          {/* <button type="submit" onClick={handleExpSubmit}>Add Experience</button> */}
        
        

      </div>


      {/* <div>{Object.values(project)}</div> */}
      {/* <div>{projects}</div> */}
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
    </div>
  );
};

export default Details;