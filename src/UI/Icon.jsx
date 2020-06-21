import React from "react";

const Icon = (props) => {
  return (
    <span className={`${props.className || ""}`}>
      {props.value || props.children}
    </span>
  );
};

export default Icon;
