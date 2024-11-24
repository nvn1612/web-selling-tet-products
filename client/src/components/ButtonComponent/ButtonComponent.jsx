import React from "react";
import { Button } from "antd";
const ButtonComponent = ({textButton, styleButton,disabled,onClick}) => {
  return <div>
     <Button style={styleButton} disabled={disabled} onClick={onClick}>{textButton}</Button>
  </div>;
};

export default ButtonComponent;
