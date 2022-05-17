import React from "react"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function Header({ scrollToSection }) {
    return(
       
        <div className="band">
            <div className="header">
                <div style={{marginLeft: "25px"}}>
                    <h2 className="MyName">Grant Pierce</h2>
                </div>
                <div style={{marginRight: "25px"}}>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'white' }}>
                            <Tabs value={null} textColor="white" indicatorColor="#34425A" >
                                <Tab style={{color: "white", fontFamily: "Montserrat-Regular"}} onClick={e => scrollToSection("about")} label="About" />
                                <Tab style={{color: "white", fontFamily: "Montserrat-Regular"}} onClick={e => scrollToSection("projects")} label="Projects" />
                                <Tab style={{color: "white", fontFamily: "Montserrat-Regular"}} onClick={e => scrollToSection("experience")} label="Experience" />
                                <Tab style={{color: "white", fontFamily: "Montserrat-Regular"}} onClick={e => scrollToSection("education")} label="Education" />
                            </Tabs>
                        </Box>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default Header