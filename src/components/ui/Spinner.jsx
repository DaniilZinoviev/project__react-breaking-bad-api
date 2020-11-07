import React from "react";
import loaderImage from "../../img/spinner.gif";

const style = {
  display: "block",
  width: "200px",
  margin: "auto",
};

export default function Spinner() {
  return <img src={loaderImage} style={style} alt="loading..." />;
}
