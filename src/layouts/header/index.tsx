import React from 'react';
import './style.css';

//        component: 헤더 레이아웃        //
export default function Header() {
  return (
    <div id="header">
      <div className="header-container">
        <div className="header-left-box">
          <div className="header-logo-box logo_box">
            <div className="header-logo icon logo_icon"></div>
          </div>
          <div className="header-time">{'2025-04-09 22:00:00'}</div>
        </div>
        <div className="header-right-box">
          <div className="header-user-info">{'Hello'}</div>
          <div className="header-signout"></div>
        </div>
      </div>
    </div>
  );
}
