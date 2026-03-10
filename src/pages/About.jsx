import React from "react";
import { FaDownload } from "react-icons/fa";

function About() {
  return (
    <div className="about-page">
      <h2>About Me</h2>

      <div className="about-content">
        <div className="profile-section">
          <h3>Who Am I?</h3>
          <p>
            I'm Joy, a passionate software engineering student at Hilcoe School
            of Computer Science and Technology. I'm deeply interested in
            Artificial Intelligence, data analysis, and creating meaningful
            software solutions.
          </p>
          <p>
            My journey in tech started with curiosity and has grown into a
            dedicated pursuit of knowledge. I believe in building projects that
            solve real-world problems while continuously learning and improving
            my skills.
          </p>
        </div>

        <div className="skills-section">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Languages</h4>
              <ul>
                <li>Python</li>
                <li>C/C++</li>
                <li>Java</li>
                <li>C#</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Tools & Frameworks</h4>
              <ul>
                <li>VS Code</li>
                <li>Visual Studio</li>
                <li>React</li>
                <li>Git</li>
                <li>SQL</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="resume-section">
          <a href="/cv.docx" download className="btn-download">
            <FaDownload /> Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
