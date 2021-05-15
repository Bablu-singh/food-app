import classes from "./Modal.module.css";
import { Fragment } from "react";
import { createPortal } from "react-dom";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHideCart}></div>;
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
   
  return (
    <Fragment>
      {createPortal(
        <BackDrop onHideCart={props.onHideCart}></BackDrop>,
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
