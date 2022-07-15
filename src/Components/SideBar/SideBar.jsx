import React from "react";
import { Icon } from "@iconify/react";
import "./SideBar.css";
import { Buttons } from "../../Helpers/util";

function SideBar() {
  return (
    <div className="SideBar">
      <div className="sideBarHeader">
        <div className="logo-schoolName">
          <div className="logo-section">
            <div>
              <Icon icon="carbon:badge" width="40" />
            </div>
          </div>
          <h2 className="name">School Space</h2>
        </div>
      </div>
      <hr />

    {
      Buttons.map((buttonObjects) => {
      return (
        <div secondOnes className={ buttonObjects.second ? "secondOnes" : " side-bar-buttons"}>
          <div className="btn-icon" style={{marginLeft:'1.4rem'}}>{buttonObjects.btnIcon}</div>
          <div className="btn-name"><h3>{buttonObjects.btnName}</h3></div>
        </div>
        );
      })
    }
    </div>
  );
}

export default SideBar;
