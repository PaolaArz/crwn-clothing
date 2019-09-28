import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitles">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);

/* 
withRouter
higher order component: 
function that takes a component as an argument 
and return a modified component 
--> returns MenuItem with access to match, history, location
*/
