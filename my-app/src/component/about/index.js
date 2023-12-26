import "./index.css";
import Self2 from '../../assets/photo/self2.png'

const About = () => {
  return (
    <>
      <h1 className="about-me">-ABOUT ME-</h1>
      <div className="text-zone-about">
        <p className="intro">
          I'm very ambitious font-end developer and back-end developer looking
          for a role established IT company to work with the oppotunities for
          improve my skill and I confidently that my skill could help the
          company grow up.
        </p>
        <br/>
        <p className="education">
          I graduated from Mae Fah Luang University in Aviation Business
          Management(Logistic Management) with second honour
        </p>
        <br/>
        <p className="goal">My career objecttive is becoming Full-stack developer</p>
        <br/>
        <p className="qa-exp">
          1 year of experience in Quality Assurance(QA) and Tester from Cheddo
          Technology LTD.
          <ul className="qa-list">
            <li>
              <br/> - Communicate with Font-end and Back-end developer to fix the bugs
              to meet the client requirement
            </li>
            <li>- Create document to record test case and test senario</li>
            <li>
              - Test the feature to meet the requirement and working collectly
            </li>
          </ul>
        </p>
        <br />
        <p className="dev-exp">
          1 year of experience in Back-end Developer from Cheddo Technoloy LTD
          <ul className="dev-list">
            <li><br/> - Create API to meet the requirement</li>
            <li>
               - Communicate with Font-end developer and QA to integate service
              user interface
            </li>
            <li>- Fixing the bugs when QA or Font-end developer inform</li>
          </ul>
        </p>
      </div>
      <img alt="self" src={Self2} className='self2-img'></img>
    </>
  );
};

export default About;
