import { Fragment } from "react";
import Footer from "../components/Footer/Footer";
import NavLayout from "../components/Header/NavLayout";
import Design from "../components/Home/Design";
import Header from "../components/Home/Header";
import Qualities from "../components/Home/Qualities";

function HomePage() {
  return (
    <Fragment>
      <NavLayout />
      <Header />
      <Design />
      <Qualities />
      <Footer />
    </Fragment>
  );
}

export default HomePage;
