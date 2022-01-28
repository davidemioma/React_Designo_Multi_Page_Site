import classes from "./NavModal.module.css";
import { Link } from "react-router-dom";

function NavModal(props) {
  return (
    <div className={classes.modal}>
      <ul className="container">
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
  );
}

export default NavModal;
