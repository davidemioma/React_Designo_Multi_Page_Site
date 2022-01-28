import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function Footer() {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/contact", { push: true });
  };

  return (
    <div className={classes.pageFooter}>
      <div className={`container ${classes.content}`}>
        <h2>Let's talk about your project</h2>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
        <button onClick={onClickHandler}>get in touch</button>
      </div>

      <div className={`container ${classes.footer}`}>
        <div className={classes.top}>
          <img
            className={classes.footerLogo}
            src={"/static/images/shared/logo-light.png"}
            alt=""
          />

          <ul className={classes.footerList}>
            <li>
              <Link to="/company">our company</Link>
            </li>
            <li>
              <Link to="/locations">locations</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>

        <div className={classes.bottom}>
          <div className={classes.info}>
            <div>
              <p>Designo Central Office</p>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div>
              <p>Conatct Us (Central Office)</p>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </div>
          </div>

          <div className={classes.icons}>
            <img src={"/static/images/shared/icon-facebook.svg"} alt="" />
            <img src={"/static/images/shared/icon-youtube.svg"} alt="" />
            <img src={"/static/images/shared/icon-twitter.svg"} alt="" />
            <img src={"/static/images/shared/icon-pinterest.svg"} alt="" />
            <img src={"/static/images/shared/icon-instagram.svg"} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
