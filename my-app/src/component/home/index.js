import "./index.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLine, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import SelfPic from "../../assets/photo/self3.jpg";

const Home = () => {
  return (
    <>
      <img alt="self-img" src={SelfPic} className="self-image"></img>
      <div className="text-container">
        <div className="text-zone">
          <h1 className="my-name">
            Hi , I'm<br /> Namo Sutthipreecha
          </h1>
          <br />
          <h2>Back-end Developer / Font-end Developer</h2>
        </div>
      </div>
      <div className="btn-container">
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <div className="social-contact">
        <ul>
          <li className="social-list">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/namo.bodyfreeze"
              className="fb"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com"
              className="ig"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://line.me/ti/p/eggNpuVdIk"
              className="line"
            >
              <FontAwesomeIcon icon={faLine} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/namo-sutthipreecha-8728322a7/?trk=public-profile-join-page"
              className="linked-in"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
