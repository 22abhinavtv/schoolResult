import React from 'react';
import { Icon } from '@iconify/react';
import './SideBar.css';

function SideBar() {
  return (
    <div className='SideBar'>
      <div className="sideBarHeader">
        <div className="logo-schoolName">
          <div className="logo-section">
            <div>
              <Icon icon="carbon:badge" width="40" />
            </div>
          </div>
          <h2 className='name'>School Space</h2>
        </div>
      </div>
      <hr />
      {
        
      }
      <div className="side-bar-buttons">
        <div className="btn-name">
          <Icon icon="humbleicons:dashboard" width="30" rotate={1} hFlip={true} vFlip={true} />
        </div>
        <div className="btn-icon">
          <h3>Dashboard</h3>
        </div>
        button addee
      </div>
    </div>
  )
}

export default SideBar
