import "./styles/Projects.css";

const Projects = () => {
  return (
    <div className="career-section section-container" id="projects">
      <div className="career-container">
        <h2>MY PROJECTS</h2>

        <div className="career-info">

          {/* PROJECT 1 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ProjectPulse</h4>
                <h5>Spring MVC | MySQL</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Freelancer-company platform for job hiring and profile management.
            </p>

            <ul>
              <li>Authentication system</li>
              <li>Job search & hiring flow</li>
              <li>CRUD operations</li>
            </ul>
          </div>

          {/* PROJECT 2 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>School Management System</h4>
                <h5>Java Swing | MySQL</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Desktop application to manage students, teachers and fees.
            </p>

            <ul>
              <li>Student & teacher management</li>
              <li>Fee tracking</li>
              <li>Database design</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;