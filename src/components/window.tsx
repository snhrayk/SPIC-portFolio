import { useState } from "react";
import styles from "../styles/window.module.scss";
import Close from "./parts/close";
import ZoomDown from "./parts/zoomDown";
import ZoomUp from "./parts/zoomUp";
import Profile from "./windowPages/profile";
import Works from "./windowPages/works";
import Herstel from "./windowPages/works/herstel";
import Contact from "./windowPages/contact";
import Florita from "./windowPages/works/florita";
import FaveTag from "./windowPages/works/faveTag";
import Yurumetabi from "./windowPages/works/yurumetabi";
import CandleNight from "./windowPages/works/candleNight";
import NameCard from "./windowPages/works/nameCard";

export default function Window(props: any) {
  const renderContent = () => {
    switch (props.activeSection) {
      case 0:
        return <Profile />;
      case 1:
        return <Works />;
      case 2:
        return <Contact />;
      default:
        return null;
    }
  };
  return (
    <div className={styles.windowWrap}>
      <div className={styles.bar}>
        <p>{props.title}</p>
        <div className={styles.btnWrap}>
          <ZoomDown />
          <ZoomUp />
          <Close onClick={props.onClose} />
        </div>
      </div>
      <div className={styles.pageArea}>
        {/* <Profile /> */}
        {/* <Works /> */}
        {/* <Herstel /> */}
        {/* <Florita /> */}
        {/* <FaveTag /> */}
        {/* <Yurumetabi /> */}
        {/* <CandleNight /> */}
        {/* <NameCard /> */}
        {/* <Contact /> */}
        {renderContent()}
      </div>
    </div>
  );
}
