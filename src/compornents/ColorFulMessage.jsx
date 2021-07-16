import React from "react";

const ColorFulMessage = (props) => {
  const { color, fontSize } = props;
  const contentStyle = {
    color: color,
    fontSize: fontSize
  };

  return <p style={contentStyle}>{props.children}</p>;
};

export default ColorFulMessage;
