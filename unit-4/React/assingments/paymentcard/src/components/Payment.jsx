import React from "react";

function Payment(props) {
  const styles = {
    textTransform: "capitalize",
  };
  return (
    <div>
      <h1 style={styles}>{props.pay}</h1>
    </div>
  );
}
export { Payment };
