import React from "react";
import { Button } from "antd";
const ButtonComponent = ({textButton, styleButton}) => {
  return <div>
     <Button style={styleButton}>{textButton}</Button>
  </div>;
};

export default ButtonComponent;
