import NavLayout from "../components/Header/NavLayout";
import Layout from "../components/Company/Layout";
import Footer from "../components/Footer/Footer";
import { Fragment } from "react";

function AboutPage() {
  return (
    <Fragment>
      <NavLayout />
      <Layout />
      <Footer />
    </Fragment>
  );
}

export default AboutPage;
