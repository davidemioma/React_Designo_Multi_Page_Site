import { Fragment } from "react";
import classes from "./GraphicDesign.module.css";
import NavLayout from "../../components/Header/NavLayout";
import Header from "../../components/Design/Header";
import Design from "../../components/Design/Design";
import WebView from "../../components/Design/WebView";
import AppView from "../../components/Design/AppView";
import Footer from "../../components/Footer/Footer";

function GraphicDesign() {
  return (
    <Fragment>
      <NavLayout />

      <Header
        header={"Graphic Design"}
        text={
          "We deliver eye-catching branding materials that are tailored to meet your business objectives."
        }
      />

      <div className={`container ${classes.designs}`}>
        <Design
          image={"/static/images/graphic-design/image-change.jpg"}
          header={"tim brown"}
          text={"A book cover designed for Tim Brown’s new release, ‘Change’"}
        />

        <Design
          image={"/static/images/graphic-design/image-boxed-water.jpg"}
          header={"boxed water"}
          text={"A simple packaging concept made for Boxed Water"}
        />

        <Design
          image={"/static/images/graphic-design/image-science.jpg"}
          header={"science!"}
          text={"A poster made in collaboration with the Federal Art Project"}
        />
      </div>

      <div className={`container ${classes.views}`}>
        <AppView />

        <WebView />
      </div>

      <Footer />
    </Fragment>
  );
}

export default GraphicDesign;
