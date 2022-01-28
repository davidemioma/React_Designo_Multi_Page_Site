import { Fragment } from "react";
import classes from "./AppDesign.module.css";
import NavLayout from "../../components/Header/NavLayout";
import Header from "../../components/Design/Header";
import Design from "../../components/Design/Design";
import WebView from "../../components/Design/WebView";
import GraphicView from "../../components/Design/GraphicView";
import Footer from "../../components/Footer/Footer";

function AppDesign() {
  return (
    <Fragment>
      <NavLayout />

      <Header
        header={"App Design"}
        text={
          "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
        }
      />

      <div className={`container ${classes.designs}`}>
        <Design
          image={"/static/images/app-design/image-airfilter.jpg"}
          header={"airfilter"}
          text={
            "Solving the problem of poor indoor air quality by filtering the air"
          }
        />

        <Design
          image={"/static/images/app-design/image-eyecam.jpg"}
          header={"eyecam"}
          text={
            "Product that lets you edit your favorite photos and videos at any time"
          }
        />

        <Design
          image={"/static/images/app-design/image-faceit.jpg"}
          header={"faceit"}
          text={
            "Get to meet your favorite internet superstar with the faceit app"
          }
        />

        <Design
          image={"/static/images/app-design/image-todo.jpg"}
          header={"todo"}
          text={"A todo app that features cloud sync with light and dark mode"}
        />

        <Design
          image={"/static/images/app-design/image-loopstudios.jpg"}
          header={"loopstudios"}
          text={"A VR experience app made for Loopstudios"}
        />
      </div>

      <div className={`container ${classes.views}`}>
        <WebView />

        <GraphicView />
      </div>

      <Footer />
    </Fragment>
  );
}

export default AppDesign;
