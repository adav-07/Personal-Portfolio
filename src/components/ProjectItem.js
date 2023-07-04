import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectItem({image,name,index}) {
  const navigate=useNavigate();
  return (
    <div className='projectItem' onClick={()=>{
      navigate("/project/"+index);
    }}>
        <div style={{backgroundImage:`url(${image.toString()})`}} className="bgImage"/>
        {/* <div className='bgImage'><img src={image}></img></div> */}
        <h1 style={{"color":"white"}}>{name}</h1>
    </div>
  )
}

export default ProjectItem;