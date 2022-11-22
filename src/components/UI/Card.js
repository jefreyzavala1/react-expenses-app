import React from "react";
import "./Card.css";
//concept of composition(children props)
//when combining components you used composotion
//children props allows to create wrapper components
const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
