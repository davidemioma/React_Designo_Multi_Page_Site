import NavModal from "./NavModal";
import Nav from "./Nav";
import { Fragment, useState } from "react";

function NavLayout() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModalHandler = () => {
    setModalIsOpen((prev) => !prev);
  };

  return (
    <Fragment>
      <Nav modalOpen={modalIsOpen} toggleModal={toggleModalHandler} />
      {modalIsOpen && <NavModal />}
    </Fragment>
  );
}

export default NavLayout;
