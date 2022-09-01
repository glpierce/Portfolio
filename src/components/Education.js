import React from "react"
import Flatiron from "../images/Flatiron.png"
import Stanford from "../images/Stanford.png"
import LSE from "../images/LSE.png"
import Brunswick from "../images/Brunswick.png"

function Education() {
    return(
        <>

            <div className="Center subHeader">
                <h1 className="MyName">Education</h1>
            </div>

            <div className="Center">
                <div className="EducationCard">
                    <div className="ExperienceCardHeader">
                        <div className="LogoContainer">
                            <img src={Stanford} alt="Stanford University" width="60" height="60"></img>
                        </div>
                        <div className="HeaderTextContainer">
                            <h3 className="Position">Stanford Center for Professional Development</h3>
                            <h5 className="Company">Stanford University</h5>
                            <h5 className="Tenure">June 2022 - August 2022</h5>
                        </div>
                    </div>
                    <div className="ExperienceCardBody">
                        <ul>
                            <li>
                                <p>
                                    GPA: 4.3/4.0
                                </p>
                            </li>
                            <li>
                                <p>
                                    CS103 - Mathematical Foundations of Computing
                                </p>
                                <ul>
                                    <li>
                                        <p>
                                            Grade: A+
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Coursework included: mathematical proofwriting, propositional & first-order logic, set theory, binary relations, graph theory, mathematical induction, finite automata, regex, context-free grammars, decidable & recognizable languages, self-reference, P vs. NP
                                        </p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p>
                                    CS106B - Programming Abstractions
                                </p>
                                <ul>
                                    <li>
                                        <p>
                                            Grade: A+
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Coursework included: object-oriented programming, fundamental data structures, data-directed design, recursion and recursive data structures, dynamic memory
                                        </p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="Center">
                <div className="EducationCard">
                    <div className="ExperienceCardHeader">
                        <div className="LogoContainer">
                            <img src={Flatiron} alt="Flatiron School" width="60" height="60"></img>
                        </div>
                        <div className="HeaderTextContainer">
                            <h3 className="Position">Software Engineering Certification</h3>
                            <h5 className="Company">Flatiron School</h5>
                            <h5 className="Tenure">November 2021 - March 2022</h5>
                        </div>
                    </div>
                    <div className="ExperienceCardBody">
                        <ul>
                            <li>
                                <p>
                                    Intensive full-stack software engineering program featuring individual and group project work
                                </p>
                            </li>
                            <li>
                                <p>
                                    In depth development of JavaScript, React, Ruby on Rails, and SQL fluency
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="Center">
                <div className="EducationCard">
                    <div className="ExperienceCardHeader">
                        <div className="LogoContainer">
                            <img src={Stanford} alt="Stanford University" width="60" height="60"></img>
                        </div>
                        <div className="HeaderTextContainer">
                            <h3 className="Position">Bachelor of Arts - BA, Philosophy</h3>
                            <h5 className="Company">Stanford University</h5>
                            <h5 className="Tenure">September 2015 - June 2019</h5>
                        </div>
                    </div>
                    <div className="ExperienceCardBody">
                        <ul>
                            <li>
                                <p>
                                    GPA: 3.8/4.0
                                </p>
                            </li>
                            <li>
                                <p>
                                    GRE: 335/340 - 166 (V), 169 (Q), 5 (W)
                                </p>
                            </li>
                            <li>
                                <p>
                                    Minor in German Studies
                                </p>
                            </li>
                            <li>
                                <p>
                                    National German Honor Society - Delta Phi Alpha
                                </p>
                            </li>
                            <li>
                                <p>
                                    Stanford Intercollegiate Water Polo - Collegiate Water Polo Association Scholar-Athlete Team
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="Center">
                <div className="EducationCard">
                    <div className="ExperienceCardHeader">
                        <div className="LogoContainer">
                            <img src={LSE} alt="LSE" width="60" height="60"></img>
                        </div>
                        <div className="HeaderTextContainer">
                            <h3 className="Position">Summer Study Program - International Economic Systems</h3>
                            <h5 className="Company">London School of Economics and Political Science</h5>
                            <h5 className="Tenure">Summer 2016</h5>
                        </div>
                    </div>
                    <div className="ExperienceCardBody">
                        <ul>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="Center">
                <div className="EducationCard">
                    <div className="ExperienceCardHeader">
                        <div className="LogoContainer">
                            <img src={Brunswick} alt="Brunswick School" width="60" height="60"></img>
                        </div>
                        <div className="HeaderTextContainer">
                            <h3 className="Position">Highschool Diploma</h3>
                            <h5 className="Company">Brunswick School</h5>
                            <h5 className="Tenure">September 2002 - May 2015</h5>
                        </div>
                    </div>
                    <div className="ExperienceCardBody">
                        <ul>
                            <li>
                                <p>
                                    SAT 2260: 770 (M), 780 (V), 710 (W)
                                </p>
                            </li>
                            <li>
                                <p>
                                    National AP Scholar Award
                                </p>
                            </li>
                            <li>
                                <p>
                                    National Merit Scholar semi-finalist
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Education