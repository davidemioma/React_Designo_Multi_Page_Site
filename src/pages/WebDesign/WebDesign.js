import { Fragment } from "react";
import classes from "./WebDesign.module.css";
import NavLayout from "../../components/Header/NavLayout";
import Header from "../../components/Design/Header";
import Design from "../../components/Design/Design";
import AppView from "../../components/Design/AppView";
import GraphicView from "../../components/Design/GraphicView";
import Footer from "../../components/Footer/Footer";

function WebDesign() {
  return (
    <Fragment>
      <NavLayout />

      <Header
        header={"Web Design"}
        text={
          "We build websites that serve as powerful marketing tools and bring memorable brand experiences."
        }
      />

      <div className={`container ${classes.designs}`}>
        <Design
          image={"/static/images/web-design/image-express.jpg"}
          header={"express"}
          text={"A multi-carrier shipping website for ecommerce businesses"}
        />

        <Design
          image={"/static/images/web-design/image-transfer.jpg"}
          header={"transfer"}
          text={
            "Site for low-cost money transfers and sending money within seconds"
          }
        />

        <Design
          image={"/static/images/web-design/image-photon.jpg"}
          header={"photon"}
          text={
            "A state-of-the-art music player with high-resolution audio and DSP effects"
          }
        />

        <Design
          image={"/static/images/web-design/image-builder.jpg"}
          header={"builder"}
          text={"Connects users with local contractors based on their location"}
        />

        <Design
          image={"/static/images/web-design/image-blogr.jpg"}
          header={"blogr"}
          text={
            "Blogr is a platform for creating an online blog or publication"
          }
        />

        <Design
          image={"/static/images/web-design/image-camp.jpg"}
          header={"camp"}
          text={
            "Get expert training in coding, data, design, and digital marketing"
          }
        />
      </div>

      <div className={`container ${classes.views}`}>
        <AppView />

        <GraphicView />
      </div>

      <Footer />
    </Fragment>
  );
}

export default WebDesign;
