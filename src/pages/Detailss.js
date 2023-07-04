import React, { useState } from 'react';
import "../styles/Detailss.css";
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
   const [project,setProject]=useState({
    name:"",
    image_url:"",
    skills:[],
    description:""
  });
  const [exps,setExps]=useState([]);
  const [exp,setExp]=useState({
    date:"",
    place:"",
    place_name:"",
    description:""
  });

  let id=window.user_id;



  const Addskill =() =>
  {
    updateSkills(arr =>[...arr,skill]); //update the oldarray with an new array

    setSkill('');
  
  
  }

  const AddProject = (event) => 
  {
    const { name, value } = event.target;
    setProject((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // console.log(project)
  };

  const AddProSkill =() =>{
    setProject((prevState) => ({
      ...prevState,
      skills: [...prevState.skills, proskill],
    }));
  }

  const handleProjectSubmit = () => 
  {
    setProjects((projects) => [...projects,project]);

      console.log(projects);
      // setProskill(null);
      // updateSkills([]);
      setProject({
        name:"",
        image_url:"",
        skills:[],
        description:""
      });
    
  };

  const AddExp= (event) => 
  {
    const { name, value } = event.target;
    setExp((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    
    
  };

  const handleExpSubmit = () => 
  {
    setExps([...exps,exp]);
      console.log(exps);
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // var date=from+to;
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
    axios.post("http://localhost:3001/insert",userDetails);
    navigate('/');
    //console.log(projects);
    // navigate("/home")
    // Axios.post("http://localhost:3001/insert",{
    //   name,
    //   email,
    //   phone,
    //   designation,
    //   git_url,
    //   linkedin_url,
    //   skills,
    //   projects,
    //   exps,
    //   id

    // });


  };

  return (
    
    
    <div className='Main'>
      {/* <form onSubmit={handleSubmit}> */}
      {/* <form> */}
      <h2>ENTER DETAILS</h2>
        <div className='MainContainer'>
            <div>
              <fieldset>
                <legend>User Details</legend>
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
              </fieldset>
            </div>
            <div>
                <fieldset>
                          <legend>Information</legend>
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
                      
                      
                  </div>
                  <div className='skills_display'>
                      {skills.map( e =>
                        <div>{ e }</div>
                      )}
                  </div>
                  <button onClick={Addskill} className="addbtn" >Add</button>
                  
                </fieldset>
            </div>
          
        
            <div>
                <fieldset>
                  <legend>Project Details</legend>
                    <div>
                      
                      <label htmlFor="name">Project Name:</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={project.name}
                        onChange={AddProject}
                        
                      />

                      

                      <label htmlFor="imageUrl">ImageUrl:</label>
                      <input
                        type="text"
                        id="image_url"
                        name="image_url"
                        value={project.image_url}
                        onChange={AddProject}
                        
                      />

                        <div className="">
                          <label htmlFor="skills">Skills:</label>
                          <input
                            type="text"
                            id="skills"
                            name="skills"
                            
                            onChange={(e)=> setProskill(e.target.value)}
                          />
                          <button onClick={AddProSkill} type="submit" >Add</button>
                          
                        </div>
                      
                  


                      <label htmlFor="description">Description:</label>
                      <textarea
                        id="description"
                        name="description"
                        value={project.description}
                        onChange={AddProject}
                        
                      ></textarea>
                      <center><button type="submit" className='addbtn' onClick={handleProjectSubmit}>Add Project</button></center>

                      
                    
                    
                  </div>
                </fieldset>
              </div>
          
          <div>
            <fieldset>
              <legend>Experience Details</legend>
            <div>
          
                <label htmlFor="date">Date:</label>
                <input
                  type="text"
                  id="date"
                  name="date"
                  value={exp.date}
                  onChange={AddExp}
                  
                />
              {/* <label htmlFor="to">To:</label>
                <input
                  type="text"
                  id="to"
                  name="to"
                  value={exp.to}
                  onChange={AddExp}
                  
                /> */}

                

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
                <center>
                <button type="submit" className='addbtn'  onClick={handleExpSubmit}>Add Experience</button>
                </center>
               
              
            </div>

              
            </fieldset>
          </div>
          

          {/* <div>{Object.values(project)}</div> */}
          {/* <div>{projects}</div> */}
          <center><button type="submit" className="registerbtn" onClick={handleSubmit}>Submit</button></center>
          
        </div>
        
    {/* </form> */}
    </div>
  
  );
};

export default Details;
