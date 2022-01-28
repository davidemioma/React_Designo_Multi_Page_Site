import NavLayout from "../components/Header/NavLayout";
import Contact from "../components/Contact/Contact";
import Locations from "../components/Company/Locations";
import Footer from "../components/Footer/Footer";
import { Fragment } from "react";

function ContactPage() {
  return (
    <Fragment>
      <NavLayout />

      <Contact />

      <div style={{ marginBottom: "18rem" }}>
        <Locations />
      </div>

      <Footer />
    </Fragment>
  );
}

export default ContactPage;
