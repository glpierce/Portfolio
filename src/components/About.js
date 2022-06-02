import React from "react"
import JavaScript from "../images/JavaScript.png"
import ReactLogo from "../images/React.png"
import Ruby from "../images/Ruby.png"
import Rails from "../images/Rails.png"
import PostgreSQL from "../images/PostgreSQL.png"
import HTML from "../images/HTML.png"
import CSS from "../images/CSS.png"
import Postman from "../images/Postman.png"
import JIRA from "../images/JIRA.png"
import Snowflake from "../images/Snowflake.png"
import GitHubMarkLarge from "../images/GitHubMarkLarge.png"


function About() {
    return(
        <>
            <div className="Center subHeader">
                <h1 className="MyName">Hi, I'm Grant</h1>
            </div>
            <div className="Center">
                <div className="introCard">
                    <p className="Blurb">I'm a full stack developer with experience using technologies including JavaScript, React, Ruby, Rails, and PostgreSQL.</p>
                    <p className="Blurb">As a former FinTech Product Manager, I've developed strong communication and problem-solving skills and learned to synthesize critical thinking and creativity to accomplish robust and impactful projects.</p>
                    <p className="Blurb">I'm passionate about expanding my knowledge and skillset in order to build the future.</p>
                </div>
            </div>
            <br/>
            <div className="Center">
                <div className="logoContainer">
                    <div className="techContainer">
                        <img className="technicalLogo" src={JavaScript} alt="JavaScript"/>
                        <p>JavaScript</p>
                    </div>
                    <div className="techContainer">
                        <img className="technicalLogo" src={ReactLogo} alt="React.js"/>
                        <p>React.js</p>
                    </div>
                    <div className="techContainer">
                        <img className="technicalLogo" src={Ruby} alt="Ruby"/>
                        <p>Ruby</p>
                    </div>
                    <div className="techContainer">
                        <img className="technicalLogo" src={Rails} alt="Rails"/>
                        <p>Rails</p>
                    </div>
                    <div className="techContainer">
                        <img className="technicalLogo" src={PostgreSQL} alt="PostgreSQL"/>
                        <p>PostgreSQL</p>
                    </div>
                    <div className="techContainer">
                        <img className="technicalLogo" src={HTML} alt="HTML"/>
                        <p>HTML 5</p>
                    </div>
                    <div className="techContainer">   
                        <img className="technicalLogo" src={CSS} alt="CSS"/>
                        <p>CSS 3</p>
                    </div>
                    <div className="techContainer">
                        <img className="technicalLogo" src={Postman} alt="Postman"/>
                        <p>Postman</p>
                    </div>
                    <div className="techContainer">
                        <img className="technicalLogo" src={JIRA} alt="JIRA"/>
                        <p>JIRA</p>
                    </div>
                    <div className="techContainer">
                        <img className="technicalLogo" src={Snowflake} alt="Snowflake"/>
                        <p>Snowflake</p>
                    </div>
                    <div className="techContainer">
                        <img className="technicalLogo" src={GitHubMarkLarge} alt="GitHub"/>
                        <p>GitHub</p>
                    </div>
               </div>
            </div>
        </>
    )
}

export default About