import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">

          {/* EMAIL + PHONE */}
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:abhisheksony35922@gmail.com" data-cursor="disable">
                abhisheksony35922@gmail.com
              </a>
            </p>

            <h4>Phone</h4>
            <p>
              <a href="tel:+917985215048" data-cursor="disable">
                +91 7985215048
              </a>
            </p>
          </div>

          {/* SOCIAL LINKS */}
          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://github.com/Abhi88732"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>

            <a
              href="https://www.linkedin.com/in/abhishek-prasad-7497541b2"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>

          </div>

          {/* FOOTER */}
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Abhishek Prasad</span>
            </h2>

            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;