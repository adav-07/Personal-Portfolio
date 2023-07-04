import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Apartment, Slideshow } from '@material-ui/icons';
import '../styles/experience.css'



function Experience(props) {

  var user=props.userdetails;
  var experience=[];
  user.map((val,key)=>{
    if(val.user_id===window.user_id){
        experience=val.experience;
    }
  })
  // console.log(experience);

  return (

    <div>
    {/* <Slideshow> */}
      <Navbar/>
      <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
      {
        experience.map((object,idx)=>{
          if(object.place==="school"){
            return <VerticalTimelineElement className='vertical-timeline-element--eduaction' date={object.date} iconStyle={{background:"#3e497a",color:"rgb(227, 250, 97)"}} icon={<SchoolIcon></SchoolIcon>}>
          <h3 className='vertical-timeline-element-title' style={{'color':"black"}}>{object.place_name+" "+object.date}</h3>
          <p style={{"color":"black"}}>{object.description}</p>
          </VerticalTimelineElement>
          }
          else{
            return <VerticalTimelineElement className='vertical-timeline-element--eduaction' date={object.date} iconStyle={{background:"#3e497a",color:"rgb(227, 250, 97)"}} icon={<Apartment></Apartment>} style={{"color":"black"}} >
          <h3 className='vertical-timeline-element-title' style={{'color':"black"}}>{object.place_name+" "+object.date}</h3>
          <p style={{"color":"black"}}>{object.description}</p>
          </VerticalTimelineElement>
          }
          
        })
      }
        {/* <VerticalTimelineElement 
        className='vertical-timeline-element--eduaction'
        date='2010-2014'
        iconStyle={{background:"#3e497a",color:"#fff"}}
        icon={<SchoolIcon></SchoolIcon>}
        >
          <h3 className='vertical-timeline-element-title'>My high school</h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement> */}
      </VerticalTimeline>
    </div>
    <Footer/>
    {/* </Slideshow> */}
    </div>
  )
}

export default Experience;