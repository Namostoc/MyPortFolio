import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faLine, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

const Contact = () => {
  return (
    <div className="contact-contrainer">
      <div className="text-contact">
        <h1 className="contact-me">- CONTACT ME- </h1>
        <div className="telephone">
            <FontAwesomeIcon icon={faMobile} className='mobile-icon'></FontAwesomeIcon>
            <p className="mobile-number"> : 086-363-9603</p>
        </div>
        <div className="email">
            <FontAwesomeIcon icon={faEnvelope} className='email-icon'></FontAwesomeIcon>
            <p className="email-address"> : namorotee@hotmail.com</p>
        </div>
        <div className="line-id">
            <FontAwesomeIcon icon={faLine} className='line-icon'></FontAwesomeIcon>
            <p className="line-contact-id"> : namostpc</p>
        </div>
        <div className="facebook-container">
            <FontAwesomeIcon icon={faFacebook} className='facebook-icon'></FontAwesomeIcon>
            <a className="facebook-link" href="https://www.facebook.com/namo.bodyfreeze"> : https://www.facebook.com/namo.bodyfreeze</a>
        </div>
        <div className="linkedin-container">
            <FontAwesomeIcon icon={faLinkedin} className='linkedin-icon'></FontAwesomeIcon>
            <a className="linkedin-link" href="https://www.linkedin.com/in/namo-sutthipreecha-8728322a7/?trk=public-profile-join-page"> : https://www.linkedin.com/in/namo-sutthipreecha-8728322a7/?trk=public-profile-join-page</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
