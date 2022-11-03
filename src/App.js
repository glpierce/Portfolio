import './App.css'
import React, {useRef} from "react"
import Header from "./components/Header.js"
import About from "./components/About.js"
import Projects from "./components/Projects.js"
import Experience from "./components/Experience.js"
import Education from "./components/Education.js"
import Contact from "./components/Contact.js"

function App() {
  const aboutRef = useRef(null)
  const projRef = useRef(null)
  const expRef = useRef(null)
  const eduRef = useRef(null)

  function scrollToSection(destinationSection) {
    switch (destinationSection) {
      case "about":
        aboutRef.current.scrollIntoView({behavior: "smooth", block: "start"})
        break;
      case "projects":
        projRef.current.scrollIntoView({behavior: "smooth", block: "start"})
        break;
      case "experience":
        expRef.current.scrollIntoView({behavior: "smooth", block: "start"})
        break;
      case "education":
        eduRef.current.scrollIntoView({behavior: "smooth", block: "start"})
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <Header scrollToSection={scrollToSection}/>

      <div className='bodyBackground'>
        <div className='body'>
          <div className="section" ref={aboutRef}>
            <About/>
          </div>
          <div className="section" ref={projRef}>
            <Projects/>
          </div>
          <div className="section" ref={expRef}>
            <Experience/>
          </div>
          <div className="lastSection" ref={eduRef}>
            <Education/>
          </div>
        </div>

        <div className='backgroundContainer'>
          <div className='foothills'>
            <div className='arrowUpFoot'/>
            <div className='arrowUpFoot'/>
          </div>
          <div className='peaks'>
            <div className='arrowUpPeak'/>
            <div className='arrowUpPeak'/>
            <div className='arrowUpPeak'/>
            <div className='arrowUpPeak'/>
          </div>
          <div className='highPeaks'>
            <div className='arrowUpHighPeakLeft'/>
            <div className='arrowUpHighPeak'/>
            <div className='arrowUpHighPeakRight'/>
          </div>
          <div className='highPeaks'>
            <div className='arrowUpHighPeak'/>
            <div className='arrowUpHighPeak'/>
          </div>
        </div>
      </div>

      <Contact/>
    </div>
  );
}

export default App;
