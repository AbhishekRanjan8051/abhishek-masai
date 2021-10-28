import React from "react";

function Scroll() {
  const elemRef = React.useRef(null);

  React.useEffect(() => {
    // elemRef.current.focus();
  }, []);

  return (
    <div>
      <div
        ref={elemRef}
        style={{ width: 300, height: 400, backgroundColor: "red" }}
      ></div>
      <div style={{ width: 300, height: 500, backgroundColor: "teal" }}></div>
      <div style={{ width: 300, height: 200, backgroundColor: "blue" }}></div>
      <button
        onClick={() => {
          elemRef.current.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        Scroll up
      </button>
    </div>
  );
}
export { Scroll };
