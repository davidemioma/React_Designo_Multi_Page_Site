import classes from "./Header.module.css";
import { useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/company", { push: true });
  };

  return (
    <div className={classes.header}>
      <div className={classes.contents}>
        <div className={classes.content}>
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <button onClick={onClickHandler}>Learn more</button>
        </div>

        <img src={"/static/images/home/image-phone.png"} alt="" />
      </div>
    </div>
  );
}

export default Header;
