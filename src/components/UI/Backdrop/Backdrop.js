import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import cssCLasses from "./Backdrop.module.css";

export default function ({ show, clickHandler }) {
  return (
    <CSSTransition
      in={show}
      mountOnEnter
      unmountOnExit
      timeout={100}
      classNames={{
        enter: cssCLasses.BackdropEnter,
        enterActive: cssCLasses.BackdropEnterActive,
        enterDone: cssCLasses.BackdropEnterDone,
        exit: cssCLasses.BackdropExit,
        exitActive: cssCLasses.BackdropExitActive,
        exitDone: cssCLasses.BackdropExitDone,
      }}
    >
      <div onClick={clickHandler} className={cssCLasses.Backdrop}></div>
    </CSSTransition>
  );
}
