import React from "react";

function Dateshow() {
  let time = new Date().toLocaleDateString();

  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
}
export { Dateshow };
