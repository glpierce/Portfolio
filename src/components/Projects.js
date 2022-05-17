import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import iCharge from "../images/iCharge.png"
import ForeverPin from "../images/ForeverPin.png"
import GitHubMark from "../images/GitHubMark.png"

function Projects() {
    return(
        <div className="projectsContainer">
            
            <div className="Center subHeader">
                <h1 className="MyName">Projects</h1>
            </div>

            <div className="Center">
                <div className="projectsRow">
                    <Card variant="outlined" style={{backgroundColor: "#285467", maxWidth: "500px"}} className="projectCard">
                        <div className="projectImageDiv" style={{backgroundColor: "white"}}>
                            <img src={ForeverPin} className="projectImage" alt="ForeverPin"/>
                        </div> 
                        <CardContent>
                            <div className="projectTitleDiv">
                                <h2 className="Position" style={{cursor: "pointer"}} onClick={e => window.open("https://forever-pin.herokuapp.com/", '_blank')}>ForeverPin</h2>
                                <img src={GitHubMark} style={{cursor:'pointer'}} onClick={e => window.open("https://github.com/glpierce/ForeverPin", '_blank')} alt="GitHub Mark"/>
                            </div>
                            <p className="projectDescription">Map journal application with search and filtering tools that enables users to record their travels and connect with friends</p>
                        </CardContent>
                    </Card>

                    <Card variant="outlined" style={{backgroundColor: "#285467", width: "500px"}} className="projectCard">
                        <div className="projectImageDiv" style={{backgroundColor: "#083C5A"}}>
                            <img src={iCharge} className="projectImage" alt="iCharge"/>
                        </div>
                        <CardContent>
                            <div className="projectTitleDiv">
                                <h2 className="Position" style={{cursor: "pointer"}} onClick={e => window.open("https://i-charge.herokuapp.com/", '_blank')}>iCharge</h2>
                                <img src={GitHubMark} style={{cursor:'pointer'}} onClick={e => window.open("https://github.com/glpierce/icharge", '_blank')} alt="GitHub Mark"/>
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