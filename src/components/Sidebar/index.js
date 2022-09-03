import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoK from "../../assets/images/logo-k.png"
import LogoSubtitle from "../../assets/images/logo_sub_k.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faHome, faUser} from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons"

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoK} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="kharmalina" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#b9b9b9" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#b9b9b9" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#b9b9b9" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kharmalina-tong-316539120/">
                    <FontAwesomeIcon icon={faLinkedin} color="#b9b9b9" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/Kharmalina">
                    <FontAwesomeIcon icon={faGithub} color="#b9b9b9" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/Balance_Kharma">
                    <FontAwesomeIcon icon={faTwitter} color="#b9b9b9" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar