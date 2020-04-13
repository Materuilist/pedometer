import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import Backdrop from "../Backdrop/Backdrop";

import cssCLasses from "./Modal.module.css";

export default function ({ show, children, dismissHandler }) {
  return (
    <React.Fragment>
      <Backdrop clickHandler={dismissHandler} show={show} />
      <CSSTransition
        in={show}
        timeout={0}
        classNames={{
          enter: cssCLasses.ModalEnter,
          // enterActive: cssCLasses.ModalEnterActive,
          enterDone: cssCLasses.ModalEnterDone,
          exit: cssCLasses.ModalExit,
          // exitActive: cssCLasses.ModalExitActive,
          exitDone: cssCLasses.ModalExitDone,
        }}
      >
        <div className={cssCLasses.Modal}>{children}</div>
      </CSSTransition>
    </React.Fragment>
  );
}
