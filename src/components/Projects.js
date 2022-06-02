import React, { useState } from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Slide from '@mui/material/Slide';
import iCharge from "../images/iCharge.png"
import ForeverPin from "../images/ForeverPin.png"
import GitHubMarkLarge from "../images/GitHubMarkLarge.png"
import GitHubLogo from "../images/GitHubLogo.png"


function Projects() {
    const [project, setProject] = useState(null)
    const [gitHub, setGitHub] = useState(null)

    function linkToGitHub(e, link) {
        window.open(link, '_blank')
        e.stopPropagation()
    }

    return(
        <div className="projectsContainer">
            
            <div className="Center subHeader">
                <h1 className="MyName">Projects</h1>
            </div>

            <div className="Center">
                <div className="projectsRow">
                    <Card variant="outlined" style={{backgroundColor: "#34425A", maxWidth: "500px", cursor:'pointer', borderColor: (project === "foreverpin" ? "white" : null)}} className="projectCard" onMouseEnter={e => setProject("foreverpin")} onMouseLeave={e => setProject(null)} onClick={e => window.open("https://forever-pin.herokuapp.com/", '_blank')}>
                        <div className="projectImageDiv" style={{backgroundColor: "white"}}>
                            <img src={ForeverPin} className="projectImage" alt="ForeverPin"/>
                        </div> 
                        <CardContent>
                            <div className="projectTitleDiv">
                                <h2 className="Position">ForeverPin</h2>
                                <div className="dynamicGitHub" onMouseEnter={e => setGitHub("foreverpin")} onMouseLeave={e => setGitHub(null)} onClick={e => linkToGitHub(e, "https://github.com/glpierce/ForeverPin")}>
                                    <img src={GitHubMarkLarge} style={{height: "34px"}} alt="GitHub Mark"/>
                                    <Slide direction="left" in={gitHub==="foreverpin" ? true : false} mountOnEnter unmountOnExit>
                                        <img src={GitHubLogo} alt="GitHub" style={{height: "34px"}}/>
                                    </Slide>
                                </div>
                            </div>
                            <p className="projectDescription">Map journal application with search and filtering tools that enables users to record their travels and connect with friends</p>
                        </CardContent>
                    </Card>

                    <Card variant="outlined" style={{backgroundColor: "#34425A", width: "500px", cursor: "pointer", borderColor: (project === "icharge" ? "white" : null)}} className="projectCard" onMouseEnter={e => setProject("icharge")} onMouseLeave={e => setProject(null)} onClick={e => window.open("https://i-charge.herokuapp.com/", '_blank')}>
                        <div className="projectImageDiv" style={{backgroundColor: "#083C5A"}}>
                            <img src={iCharge} className="projectImage" alt="iCharge"/>
                        </div>
                        <CardContent>
                            <div className="projectTitleDiv">
                                <h2 className="Position">iCharge</h2>
                                <div className="dynamicGitHub" onMouseEnter={e => setGitHub("icharge")} onMouseLeave={e => setGitHub(null)} onClick={e => linkToGitHub(e, "https://github.com/glpierce/icharge")}>
                                    <img src={GitHubMarkLarge} style={{height: "34px"}} alt="GitHub Mark"/>
                                    <Slide direction="left" in={gitHub==="icharge" ? true : false} mountOnEnter unmountOnExit>
                                        <img src={GitHubLogo} alt="GitHub" style={{height: "34px"}}/>
                                    </Slide>
                                </div>
                            </div>
                            <p className="projectDescription">Electric vehicle (EV) charging station finder with search and filtering tools that enable users to find and get directions to EV chargers</p>
                        </CardContent>
                    </Card>
                </div>
            </div>

        </div>
    )
}

export default Projects