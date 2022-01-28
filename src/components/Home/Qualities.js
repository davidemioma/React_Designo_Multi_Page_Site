import classes from "./Qualities.module.css";

function Qualities() {
  return (
    <div className={`container ${classes.qualities}`}>
      <div className={classes.quality}>
        <span>
          <img
            className={classes.qualityImg}
            src={"/static/images/home/illustration-passionate.svg"}
            alt=""
          />
          <img
            className={classes.circle}
            src={"/static/images/home/bg-pattern-hero-home.svg"}
            alt=""
          />
        </span>

        <div className={classes.content}>
          <h2>PASSIONATE</h2>
          <p>
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
      </div>

      <div className={classes.quality}>
        <span>
          <img
            className={classes.qualityImg}
            src={"/static/images/home/illustration-resourceful.svg"}
            alt=""
          />
          <img
            className={classes.circle}
            src={"/static/images/home/bg-pattern-hero-home.svg"}
            alt=""
          />
        </span>

        <div className={classes.content}>
          <h2>RESOURCEFUL</h2>
          <p>
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </p>
        </div>
      </div>

      <div className={classes.quality}>
        <span>
          <img
            className={classes.qualityImg}
            src={"/static/images/home/illustration-friendly.svg"}
            alt=""
          />
          <img
            className={classes.circle}
            src={"/static/images/home/bg-pattern-hero-home.svg"}
            alt=""
          />
        </span>
        <div className={classes.content}>
          <h2>FRIENDLY</h2>
          <p>
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Qualities;
