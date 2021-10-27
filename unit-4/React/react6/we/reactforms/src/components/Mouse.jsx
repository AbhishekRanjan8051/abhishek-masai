import React from "react";

function Mouse() {
  const [mousePosition, setMousePosition] = React.useState("");
  return (
    <div>
      <div
        onMouseMove={(e) => {
          setMousePosition(`x:${e.clientX}--y:${e.clientY}`);
        }}
        onContextMenu={(e) => {
          e.preventDefault();
          alert("Right click not allowed");
        }}
        onCopy={(e) => {
          e.preventDefault();
          alert("Copy not allowed");
        }}
        onPaste={(e) => {
          e.preventDefault();
          alert("Paste not allowed");
        }}
        onCut={(e) => {
          e.preventDefault();
          alert("Cut not allowed");
        }}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "coral",
          color: "white",
        }}
      >
        Mouse:{mousePosition}
      </div>
    </div>
  );
}
export { Mouse };
