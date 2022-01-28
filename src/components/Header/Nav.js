import classes from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";

function Nav(props) {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/", { replace: true });
  };

  return (
    <nav className={`container ${classes.nav}`}>
      <img
        onClick={onClickHandler}
        className={classes.navLogo}
        src={"/static/images/shared/logo-dark.png"}
        alt=""
      />

      <ul className={classes.navList}>
        <li>
          <NavLink
            className={(nav) => (nav.isActive ? classes.active : "")}
            to="/company"
          >
            our company
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(nav) => (nav.isActive ? classes.active : "")}
            to="/locations"
          >
            locations
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(nav) => (nav.isActive ? classes.active : "")}
            to="/contact"
          >
            contact
          </NavLink>
        </li>
      </ul>

      {!props.modalOpen && (
        <img
          onClick={props.toggleModal}
          className={classes.navToggler}
          src={"/static/images/shared/icon-hamburger.svg"}
          alt=""
        />
      )}

      {props.modalOpen && (
        <img
          onClick={props.toggleModal}
          className={classes.navToggler}
          src={"/static/images/shared/icon-close.svg"}
          alt=""
        />
      )}
    </nav>
  );
}

export default Nav;
