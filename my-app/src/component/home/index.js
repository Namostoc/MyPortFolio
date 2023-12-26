import "./index.css";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLine } from "@fortawesome/free-brands-svg-icons";
import SelfPic from "../../assets/photo/self1.jpg";

const Home = () => {
  return (
    <>
      <img alt="self-image" src={SelfPic} className="self-image"></img>
      <div className="text-container">
        <div className="text-zone">
          <h1>
            Hi , <br /> Namo Sutthipreecha
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
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
