import React from "react"
import GitHubMark from "../images/GitHubMark.png"
import GitHubLogo from "../images/GitHubLogo.png"
import Linkedin from "../images/Linkedin.png"
import HomeIcon from '@mui/icons-material/Home';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';

function Contact() {

    return(

        <div className="band">
            <div className="footer">

                <div className="contactDiv">
                    <HomeIcon style={{color: "white"}}/>
                    <p className="Position" style={{marginLeft: "5px"}}>San Francisco, CA</p>
                </div>

                <div className="contactDiv">
                    <PhoneIphoneIcon style={{color: "white"}}/>
                    <p className="Position">(203) 918-0568</p>
                </div>

                <div className="contactDiv">
                    <EmailIcon style={{color: "white"}}/>
                    <p className="Position" style={{marginLeft: "5px"}}>glpierce174@gmail.com</p>
                </div>

                <div className="contactDiv">
                    <DownloadIcon style={{color: "white"}}/>
                    <p className="Position" style={{marginLeft: "2px"}}>Resume</p>
                </div>

                <div style={{display: "flex", alignItems: "center", cursor: "pointer"}} onClick={e => window.open("https://github.com/glpierce", '_blank')}>
                    <img src={GitHubMark} alt="GitHub"/>
                    <img src={GitHubLogo} alt="GitHub" style={{height: "38px"}}/>
                </div>
                
                <img src={Linkedin} alt="Linkedin" style={{height: "32px", cursor: "pointer"}} onClick={e => window.open("https://www.linkedin.com/in/grant-pierce-9b6826143/", '_blank')}/>
                    
            </div>
        </div>
        
    )
}

export default Contact