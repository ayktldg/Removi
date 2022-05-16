import footerStyle from "./Footer.module.css";
import layout from "../../style/Layout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={footerStyle.footer}>
      <div className={layout.container}>
        <div className={footerStyle.wrapper}>
          <div>
            <small>
              Powered by
              <a
                href="https://www.themoviedb.org/"
                target="_blank"
                rel="noreferrer"
              >
                <span> TMDB</span>
              </a>
            </small>
          </div>
          <div className={footerStyle.madeBy}>
            <small>
              &copy; 2022 Made by
              <a
                href="https://github.com/ayktldg"
                target="_blank"
                rel="noreferrer"
              >
                <span> aykutuludag</span>
              </a>
            </small>
          </div>
          <div className={footerStyle.icons}>
            <a
              href="https://github.com/ayktldg"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className={footerStyle.icon} icon={faGithub} />
            </a>
            <a
              href="https://twitter.com/ayktldg26"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className={footerStyle.icon} icon={faTwitter} />
            </a>
            <a
              href="https://www.linkedin.com/in/aykut-uluda%C4%9F-477b17145/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className={footerStyle.icon} icon={faLinkedin} />
            </a>
            <a
              href="https://www.codepen.com/ayktldg/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className={footerStyle.icon} icon={faCodepen} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
