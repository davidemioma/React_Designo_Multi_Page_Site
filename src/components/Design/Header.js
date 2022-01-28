import classes from "./Header.module.css";

function Header(props) {
  return (
    <div className={classes.header}>
      <div>
        <h1>{props.header}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Header;
