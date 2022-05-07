import footerSyle from "./Footer.module.css";
import layout from "../../style/Layout.module.css";

const Footer = () => {
  return (
    <div className={footerSyle.footer}>
      <div className={layout.container}>
        <div>
          <small>
            Powered by
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noreferrer"
            >
              TMDB
            </a>
          </small>
        </div>
        <div className={footerSyle.madeBy}>
          <small>
            &copy; 2020 Made by
            <a
              href="https://github.com/ayktldg"
              target="_blank"
              rel="noreferrer"
            >
              ayktldg
            </a>
          </small>
        </div>
        <div className={footerSyle.icons}>
          <a href="https://github.com/ayktldg" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://twitter.com/ayktldg26"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/aykut-uluda%C4%9F-477b17145/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://www.codepen.com/ayktldg/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-codepen"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
