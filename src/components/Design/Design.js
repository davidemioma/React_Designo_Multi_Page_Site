import classes from "./Design.module.css";

function Design(props) {
  return (
    <div className={classes.design}>
      <img src={props.image} alt="" />

      <div className={classes.content}>
        <span>
          <h2>{props.header}</h2>
          <p>{props.text}</p>
        </span>
      </div>
    </div>
  );
}

export default Design;
