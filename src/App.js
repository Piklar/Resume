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
      <h2>FUTURE FULL-STACK DEVELOPER</h2>
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
    <h1>LEARNING EXPERIENCE</h1>
  );
}

function LExp1_h2() {
  return(
    <h2>1st Year College</h2>
  );
}


function LExp1_p() {
    return(
      <div>
        <p>
          Python, Kivvy, Tkinter <br /> 2022-2023
        </p>
        <ul>
          <li>
            During my 1st Year, I was taught the basics and the knowledge of programming. <br />
            We were taught how to do basic Python commands, basic data types, operators, and control structures. <br />
            We also created mobile games out Python.
          </li>
        </ul>
      </div>
    );
  }

function LExp2_h2() {
  return(
    <h2>2nd Year College</h2>
  );
}

function LExp2_p() {
  return(
    <div>
      <p>
        MySQL, Java, JavaScript, HTML, CSS
      </p>
      <ul>
        <li>
          During my 2nd Year, I was taught the basics and the knowledge of MySQL. <br />
          We are taught how to do basic input, query, and creation of Database. <br />
          We were taught about foundation knowledge regarding Data Structures and Algorithm. <br />
          It was also discussed about the basics of Java and JavaScript. <br />
          We were also taught about the basics of HTML and CSS.
        </li>
      </ul>
    </div>

  );
}

function LExp3_h2() {
  return(
    <h2>Currently 3rd Year College</h2>
  );
}

function LExp3_p() {
  return(
    <div>
      <p>
        HTML, JavaScript, CSS, React, Bootstrap
      </p>
      <ul>
        <li>
          During my 3rd Year, I am currently learning about the more in-depth understanding of HTML, JavaScript, and CSS. <br />
          We are also currently learning about React. We were taught how to make a functional website that is apadtable and capable to adjust based on Screensize. <br />
          We used Bootstrap in integrating and creating the website.
        </li>
      </ul>
    </div>
  );
}