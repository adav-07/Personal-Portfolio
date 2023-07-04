import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { motion } from "framer-motion";


// function goto(url){
//     // var url=prompt.url;
//     window.open(url);
// }

// function mail(mailId){
//     window.open("mailto:"+mailId);
// }

function Home(props){
    var user=props.userdetails;
    // console.log(user);

    var name="";
    var designation="";
    var skills=[];
    var gitLink="";
    var LinkedInlink="";
    var userEmail="";
    user.map((val,key)=>{
        if(val.user_id===window.user_id){
            name=val.name;
            designation=val.designation;
            skills=val.skills;
            gitLink=val.github_url;
            LinkedInlink=val.linkedin_url;
            userEmail=val.email;
        }
    })
    return (<motion.div initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}>
        <Navbar/>
        <div className="home">
        <div className="about">
            <h2>I'm {name}</h2>
            <div className="prompt">
                <p>{designation}</p>
                {/* <div className="linksDiv">
                    <div onClick={goto("https://www.linkedin.com/in/krithik-adav-m-915a41244/")}><LinkedInIcon/></div>
                    <div onClick={mail("krithikadavm@gmail.com")}><EmailIcon onClick /></div>
                    <div onClick={goto("https://github.com/adav-07")}><GithubIcon/></div>
                </div> */}
                {/* <LinkedInIcon onClick={goto("https://www.linkedin.com/in/krithik-adav-m-915a41244/")} /> */}
                {/* <LinkedInIcon><a href="https://www.linkedin.com/in/krithik-adav-m-915a41244/"></a></LinkedInIcon> */}
                <div className="linksDiv">
                    <a href={LinkedInlink} target="_blank"><LinkedInIcon/></a>
                    <a href={"mailto:"+{userEmail}}><EmailIcon/></a>
                    <a href={gitLink} target="_blank"><GithubIcon/></a>
                </div>
            </div>
        </div>
        <div className="skills">
            <h1 style={{"color":"black"}}>Skills</h1>
            <ol className="list">
            {
                skills.map((listItem)=>{
                return <li className="item">
                    <center><p style={{"color":"#3e497a","fontStyle":"normal"}}>{listItem}</p></center>
                    <span></span>
                </li>
                })
            }
            
                {/* <li className="item">
                    <h2>Front-end</h2>
                    <span></span>
                </li>
                <li className="item">
                    <h2>Back-end</h2>
                    <span></span>
                </li> */}
            </ol>
        </div>
    </div>
    <Footer/>
    </motion.div>);
}

export default Home;