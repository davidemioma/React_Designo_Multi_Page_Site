import classes from "./Layout.module.css";

function Layout() {
  return (
    <div className={classes.locations}>
      <div className={classes.canada}>
        <div className={classes.imageCanada}></div>
        <div className={classes.content}>
          <span>
            <h1>canada</h1>
            <div className={classes.info}>
              <span>
                <h3>Designo Central Office</h3>
                <p>3886 Wellington Street</p>
                <p>Toronto, Ontario M9C 3J5</p>
              </span>
              <span>
                <h3>Contact</h3>
                <p>P : +1 253-863-8967</p>
                <p>M : contact@designo.co</p>
              </span>
            </div>
          </span>
        </div>
      </div>

      <div className={classes.australia}>
        <div className={classes.imageAustralia}></div>
        <div className={classes.content}>
          <span>
            <h1>australia</h1>
            <div className={classes.info}>
              <span>
                <h3>Designo AU Office</h3>
                <p>19 Balonne Street</p>
                <p>New South Wales 2443</p>
              </span>
              <span>
                <h3>Contact</h3>
                <p>P : (02) 6720 9092</p>
                <p>M : contact@designo.au</p>
              </span>
            </div>
          </span>
        </div>
      </div>

      <div className={classes.uk}>
        <div className={classes.imageUk}></div>
        <div className={classes.content}>
          <span>
            <h1>united kingdom</h1>
            <div className={classes.info}>
              <span>
                <h3>Designo UK Office</h3>
                <p>13 Colorado Way</p>
                <p>Rhyd-y-fro SA8 9GA</p>
              </span>
              <span>
                <h3>Contact</h3>
                <p>P : 078 3115 1400</p>
                <p>M : contact@designo.uk</p>
              </span>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Layout;
