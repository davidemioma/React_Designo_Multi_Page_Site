import NavLayout from "../components/Header/NavLayout";
import Layout from "../components/Location/Layout";
import Footer from "../components/Footer/Footer";
import { Fragment } from "react";

function LocationPage() {
  return (
    <Fragment>
      <NavLayout />
      <Layout />
      <Footer />
    </Fragment>
  );
}

export default LocationPage;
