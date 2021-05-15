import classes from "./Modal.module.css";
import { Fragment } from "react";
import { createPortal } from "react-dom";

const BackDrop = (props) => {
  return <div className={classes.backdrop}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
    const backdropelement = document.getElementById("backdrop-overlay");
    const modalelement = document.getElementById("modal-overlay");
  return (
    <Fragment>
      {createPortal(
        <BackDrop></BackDrop>,
        backdropelement
      )}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        backdropelement
      )}
    </Fragment>
  );
};
export default Modal;
