import React from "react";
import "./MessageBox.css";

function MessageBox(props) {
  return (
    <div className={`alert alert-${props.variants || "info"}`}>
      {props.message}
    </div>
  );
}

export default MessageBox;
