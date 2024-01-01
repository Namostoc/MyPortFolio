import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";
import {faLine} from '@fortawesome/free-brands-svg-icons'
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
      </div>
    </div>
  );
};

export default Contact;
