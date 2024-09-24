import "./App.css";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook , faGithub } from '@fortawesome/free-brands-svg-icons'
export default function App() {
  return (
    <div className = "App">
      <div className = "Resume">
        <div className = "Header">
          <Header />
        </div>
        
        <div className = "Content">
          <div className = "PInfo">
            <div className = "Contact">
              <div className = "Contact_h1">
              <Contact_h1 />
              </div>

              <div className = "Contact_p">
                <Contact_p />

              </div>
            </div>

            <div className = "Education">
              <div className = "Education_h1">
                <Education_h1 />
              </div>

              <div className = "Education_p">
                <Education_p />
              </div>

            </div>

            <div className = "Skills">
              <div className = "Skills_h1">
                <Skills_h1 />
              </div>

              <div className = "Skills_p">
                <Skills_p />
              </div>

            </div>

          </div>

          <div className = "Experience">
            <div className = "LExp">
              <LExp0_h1 />

              <div className = "LExp1">
                <div className = "LExp1_h2">
                  <LExp1_h2 />
                </div>

                <div className = "LExp1_p">
                  <LExp1_p />
                </div>
              </div>

              <div className = "LExp2">
                <div className = "LExp2_h2">
                  <LExp2_h2/>
                </div>

                <div className = "LExp2_p">
                  <LExp2_p />
                </div>
              </div>

              <div className = "LExp3">
                <div className = "LExp3_h2">
                  <LExp3_h2/>
                </div>

                <div className = "LExp3_p">
                  <LExp3_p />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1>ERNZ DANIELLE MANALO</h1>
      <h2>FULL-STACK DEVELOPER</h2>
    </div>
  );
}

function Contact_h1() {
  return (
    <h1>CONTACT</h1>
  );
}

function Contact_p() {
  return (
    <p>
      ernzmanalo2003@gmail.com  <FontAwesomeIcon icon={faEnvelope} /> <br/>
      09158158735  <FontAwesomeIcon icon={faPhone} /> <br/>
      Mexico, Pampanga, Philippines  <FontAwesomeIcon icon={faLocationDot} /> <br/>
      <a href="https://www.facebook.com/ernz.manalo/" target="_blank" rel="noopener noreferrer">Facebook</a> <FontAwesomeIcon icon={faFacebook} /> <br />
      <a href="https://github.com/Piklar/" target="_blank" rel="noopener noreferrer">GitHub</a>  <FontAwesomeIcon icon={faGithub} />  
    </p>
  );
}

function Education_h1() {
  return (
    <h1>EDUCATION</h1>
  );
  
}

function Education_p() {
  return (
    <p>
      Bachelor of Science <br />
      Information Technology <br />
      University of <br />
      the Assumption <br />
      2022 - Present 2024 <br />
      San Fernando, Pampanga <br />
    </p>
  );
  
}

function Skills_h1() {
  return (
    <h1>SKILLS</h1>
  );
}

function Skills_p() {
  return (
    <p>
      Python <br />
      Java <br />
      JavaScript <br />
      CSS <br />
      HTML <br />
      MySQL <br />
    </p>
  );
}

function LExp0_h1() {
  return(
    <h1>WORK EXPERIENCE</h1>
  );
}

function LExp1_h2() {
  return(
    <h2>Web Development Intern</h2>
  );
}


function LExp1_p() {
    return(
      <div>
        <p>
        Tech Innovators<br /> June 2025 – December 2026
        </p>
        <ul>
          <li>
            Assisted the development team in creating small web applications using HTML, CSS, and JavaScript (jQuery) for internal tools.
          </li>
          <li>
            Contributed to frontend UI enhancements and bug fixes for client-facing websites, improving overall performance.
          </li>
        </ul>
      </div>
    );
  }

function LExp2_h2() {
  return(
    <h2>Junior Full-Stack Developer</h2>
  );
}

function LExp2_p() {
  return(
    <div>
      <p>
      Innovate Web Services<br /> January 2027 – May 2029
      </p>
      <ul>
        <li>
        Developed and maintained web applications using Vue.js and Node.js, focusing on building clean and efficient code.
        </li>
        <li>
        Integrated third-party APIs (Stripe, Firebase) into client applications to enhance functionality and improve business workflows.
        </li>
      </ul>
    </div>

  );
}

function LExp3_h2() {
  return(
    <h2>Full-Stack Developer</h2>
  );
}

function LExp3_p() {
  return(
    <div>
      <p>
      Riot Games<br /> June 2029 – September 2035
      </p>
      <ul>
        <li>
        Spearheaded the development of cross-platform web applications using React.js, Node.js, and Express, ensuring optimal performance and seamless user experience.
        </li>
        <li>
        Worked with databases like PostgreSQL and MongoDB to design and optimize data models for high-traffic applications.
        </li>
      </ul>
    </div>
  );
}
