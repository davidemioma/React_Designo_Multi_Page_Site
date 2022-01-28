import classes from "./Locations.module.css";
import { useNavigate } from "react-router";

function Locations() {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/locations", { push: true });
  };

  return (
    <div className={`container ${classes.locations}`}>
      <div className={classes.location}>
        <img src={"/static/images/shared/illustration-canada.svg"} alt="" />
        <div>
          <h2>canada</h2>
          <button onClick={onClickHandler}>see location</button>
        </div>
      </div>

      <div className={classes.location}>
        <img src={"/static/images/shared/illustration-australia.svg"} alt="" />
        <div>
          <h2>australia</h2>
          <button onClick={onClickHandler}>see location</button>
        </div>
      </div>

      <div className={classes.location}>
        <img
          src={"/static/images/shared/illustration-united-kingdom.svg"}
          alt=""
        />
        <div>
          <h2>united kingdom</h2>
          <button onClick={onClickHandler}>see location</button>
        </div>
      </div>
    </div>
  );
}

export default Locations;
