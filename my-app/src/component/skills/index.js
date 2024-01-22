import "./index.css";
import htmlLogo from "../../assets/photo/HTML5.svg.png";
import cssLogo from "../../assets/photo/css3-logo.svg";
import javascriptLogo from '../../assets/photo/javascript.png'
import typescriptLogo from '../../assets/photo/typescript.svg'
import reactLogo from '../../assets/photo/React-icon.svg.png'
import postgresqlLogo from '../../assets/photo/Postgresql.svg.png'

const Skill = () => {
  return (
    <>
      <div className="skills-container">
        <div className="Title">
          <h2 className="my-skills">My Skills</h2>
        </div>
      </div>

      <p className="skill-description">All of my skills I learn it by self studying. I would like to show you about
      my IT skills and I hopefully that my skill can help you or your organization grow up.</p>

      <div className="row">
        <div className="item">
            <div className="item-text">
                <img className="htmlImg" alt="html-logo" src={htmlLogo}/>
                <span>HTML5</span>
                <span className="w-60">60%</span>
            </div>
            <div className="progress">
                <div className="progress-bar w-60"></div>
            </div>
        </div>
        <div className="item">
            <div className="item-text">
                <img className="cssImg" alt="css3-logo" src={cssLogo}/>
                <span>CSS3</span>
                <span className="w-60">60%</span>
            </div>
            <div className="progress">
                <div className="progress-bar w-60"></div>
            </div>
        </div>
        <div className="item">
            <div className="item-text">
                <img className="javascriptImg" alt="Javascript-logo" src={javascriptLogo}/>
                <span>JavaScript</span>
                <span className="w-70">70%</span>
            </div>
            <div className="progress">
                <div className="progress-bar w-70"></div>
            </div>
        </div>
        <div className="item">
            <div className="item-text">
                <img className="typescriptImg" alt="typescript-logo" src={typescriptLogo}/>
                <span>TypeScript</span>
                <span className="w-80">80%</span>
            </div>
            <div className="progress">
                <div className="progress-bar w-80"></div>
            </div>
        </div>
        <div className="item">
            <div className="item-text">
                <img className="ReactImg" alt="react-logo" src={reactLogo}/>
                <span>React.js</span>
                <span className="w-60">60%</span>
            </div>
            <div className="progress">
                <div className="progress-bar w-60"></div>
            </div>
        </div>
        <div className="item">
            <div className="item-text">
                <img className="postgresqlImg" alt="postgresql-logo" src={postgresqlLogo}/>
                <span>PostgresSQL</span>
                <span className="w-80">80%</span>
            </div>
            <div className="progress">
                <div className="progress-bar w-80"></div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
