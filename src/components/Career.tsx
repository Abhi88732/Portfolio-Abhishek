import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          MY INTERSHIP EXPERIENCE'S
        </h2>

        <div className="career-info">

          {/* INTERNSHIP 1 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer Intern</h4>
                <h5>Badkul Technology Pvt. Ltd.</h5>
              </div>
              <h3>Sep 2025</h3>
            </div>
            <p>
              Developed backend systems using Spring Boot and REST APIs.
              Integrated MySQL database with Spring Data JPA and improved
              performance and data handling. Tested APIs using Postman.
            </p>
          </div>

          {/* INTERNSHIP 2 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer Intern</h4>
                <h5>Androsys Technologies Pvt. Ltd.</h5>
              </div>
              <h3>Dec 2023 - Jun 2024</h3>
            </div>
            <p>
              Developed frontend using HTML, CSS, and JavaScript and backend using PHP (Laravel).
              Worked on MVC architecture and integrated APIs and database for smooth data flow.
            </p>
          </div>

          {/* CURRENT */}
          {/* <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MCA Student</h4>
                <h5>Greater Noida Institute of Technology</h5>
              </div>
              <h3>2024 - Present</h3>
            </div>
            <p>
              Currently pursuing Master of Computer Applications while building strong backend
              development skills using Java, Spring Boot, and MySQL.
            </p>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default Career;