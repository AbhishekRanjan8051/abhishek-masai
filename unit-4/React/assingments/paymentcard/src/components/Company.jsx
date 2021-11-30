import React from "react";

function Company(props) {
  const styles = {
    textTransform: "captilize",
  };
  return (
    <div>
      <h1 style={styles}>{props.name} Gift</h1>
    </div>
  );
}
export { Company };
