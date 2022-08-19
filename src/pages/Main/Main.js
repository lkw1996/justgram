import { useState } from "react";
import "./Main.scss";

import Feed from "./Feed";
import instaLogo from "../../assets/images/logo.png";

function Main() {
  return (
    <>
      <div className="to-do header-wrapper">
        <div className="vertical-center">
          <img className="icon-image" src={instaLogo} alt="" />
          <span className="header-text">justgram</span>
        </div>
        <div className="vertical-center">
          <input placeholder="검색" />
        </div>
        <div className="vertical-center">
          <img
            className="icon-image"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          />
          <img
            className="icon-image custom-margin-left"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          />
          <img
            className="icon-image custom-margin-left"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
          />
        </div>
      </div>
      <div className="flex-center">
        <div className="to-do contents-wrapper">
          <Feed />
        </div>
      </div>
    </>
  );
}

export default Main;
