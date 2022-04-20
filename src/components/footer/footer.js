import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer(){
    return(
        <div style={{ backgroundColor:"#2D2D2D",color:"white",textAlign:"center",padding:"10px"}}>
            <h3>Zeeshan Ahmed</h3>
            <span style={{padding:"30px"}}>
                <a href="http://facebook.com/" style={{ color:"white"}} >
            <FacebookIcon style={{width:"50px",height:"50px"}}/>

                </a>
                <a href="http://github.com/" style={{ color:"white"}} >

            <GitHubIcon style={{width:"50px",height:"50px"}}/>
            </a>

            <a href="http://linkedin.com/" style={{ color:"white"}} >

            <LinkedInIcon style={{width:"50px",height:"50px"}}/>
            </a>


            </span>

        </div>
    )
}

export default Footer