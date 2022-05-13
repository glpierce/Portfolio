import React from "react";
import GSLogo from '../images/GSLogo.png';
import SIRVA from '../images/SIRVA.png';
import Pride from '../images/Pride.png';
import Longitude from '../images/Longitude.png';

function Experience() {
    return(
        <div className="ResumeContainer">

        <div className="Center subHeader">
            <h1 className="MyName">Experience</h1>
        </div>
            
            <div className="Center">
                <div className="ExperienceCard">
                    <div className="ExperienceCardHeader">
                        <div className="LogoContainer">
                            <img src={GSLogo} alt="Goldman Sachs" width="60" height="60"></img>
                        </div>
                        <div className="HeaderTextContainer">
                            <h3 className="Position">Product Manager - Apple Card</h3>
                            <h5 className="Company">Goldman Sachs</h5>
                            <h5 className="Tenure">July 2019 - August 2020 | New York, NY</h5>
                        </div>
                    </div>
                    <div className="ExperienceCardBody">
                        <ul>
                            <li>
                                <p>
                                    Principal product manager and subject matter expert for the underlying logic for all Apple Card user transactions, financial calculations, and monthly billing.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Worked with and directed developers to build new back-end and front-end product functionality.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Analyzed product and customer data using SQL via the Snowflake platform.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Conducted customer remediation projects and product fixes with a focus on customer experience and regulatory compliance.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="Center">
                <div className="ExperienceCard">
                    <div className="ExperienceCardHeader">
                        <div className="LogoContainer">
                            <img src={GSLogo} alt="Goldman Sachs" width="60" height="60"></img>
                        </div>
                        <div className="HeaderTextContainer">
                            <h3 className="Position">Summer Analyst</h3>
                            <h5 className="Company">Goldman Sachs</h5>
                            <h5 className="Tenure">May 2018 - August 2018 | New York, NY</h5>
                        </div>
                    </div>
                    <div className="ExperienceCardBody">
                        <ul>
                            <li>
                                <p>
                                    Developed new market segmentation for personal loans and created go-to-market strategies.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Created loan originations models for potential partnerships and participated in partnership negotiations.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Prepared materials for internal and external pitches and managed ongoing partnerships.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="Center">
                <div className="ExperienceCard">
                    <div className="ExperienceCardHeader">
                        <div className="LogoContainer">
                            <img src={SIRVA} alt="SIRVA" width="60" height="60"></img>
                        </div>
                        <div className="HeaderTextContainer">
                            <h3 className="Position">Business Development Associate</h3>
                            <h5 className="Company">SIRVA</h5>
                            <h5 className="Tenure">August 2017 - September 2017 | Munich, Germany</h5>
                        </div>
                    </div>
                    <div className="ExperienceCardBody">
                        <ul>
                            <li>
                                <p>
                                    Conducted a market analysis of German office move market including assessment of the competitive landscape and identification of potential clients.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Streamlined plans for Visa & Immigration Team operations.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Developed training materials and procedures for onboarding new hires.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="Center">
                <div className="ExperienceCard">
                    <div className="ExperienceCardHeader">
                        <div className="LogoContainer">
                            <img src={Pride} alt="Pride Global" width="60" height="60"></img>
                        </div>
                        <div className="HeaderTextContainer">
                            <h3 className="Position">Summer Analyst</h3>
                            <h5 className="Company">Pride Global</h5>
                            <h5 className="Tenure">June 2017 - August 2017 | New York, NY</h5>
                        </div>
                    </div>
                    <div className="ExperienceCardBody">
                        <ul>
                            <li>
                                <p>
                                    Conducted a market analysis of German office move market including assessment of the competitive landscape and identification of potential clients.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Streamlined plans for Visa & Immigration Team operations.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Developed training materials and procedures for onboarding new hires.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="Center">
                <div className="ExperienceCard">
                    <div className="ExperienceCardHeader">
                        <div className="LogoContainer">
                            <img src={Longitude} alt="Longitude Capital" width="60" height="60"></img>
                        </div>
                        <div className="HeaderTextContainer">
                            <h3 className="Position">Summer Analyst</h3>
                            <h5 className="Company">Longitude Capital</h5>
                            <h5 className="Tenure">August 2016 - September 2016 | Menlo Park, CA</h5>
                        </div>
                    </div>
                    <div className="ExperienceCardBody">
                        <ul>
                            <li>
                                <p>
                                    Conducted reviews of small-cap healthcare IT companies to identify investment opportunities.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Participated in meetings with and presented research findings to investment principals.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Experience