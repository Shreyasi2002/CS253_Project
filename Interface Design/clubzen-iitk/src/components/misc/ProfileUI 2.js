import React from 'react';
import './profileui.css';

function ProfileUi(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "prof-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement("img", {
    className: "img-box",
    src: props.imgUrl,
    alt: "profile-img"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "name"
  }, props.name), /*#__PURE__*/React.createElement("h3", {
    className: "des"
  }, props.designation)));
}

export default ProfileUi;