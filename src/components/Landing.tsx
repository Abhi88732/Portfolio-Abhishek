import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">

          {/* LEFT SIDE */}
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              ABHISHEK
              <br />
              <span>PRASAD</span>
            </h1>
          </div>

          {/* RIGHT SIDE */}
          <div className="landing-info">
            <h3>Software Engineer Intern</h3>

            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Java Backend Developer</div>
              <div className="landing-h2-2">Spring Boot Developer</div>
            </h2>

            <h2>
              <div className="landing-h2-info">REST API Developer</div>
              <div className="landing-h2-info-1">MySQL & JPA</div>
            </h2>

          </div>

        </div>

        {/* Extra Content */}
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <p>
            I build scalable backend systems using Spring Boot, REST APIs, and MySQL.
          </p>
        </div>

        {children}
      </div>
    </>
  );
};

export default Landing;