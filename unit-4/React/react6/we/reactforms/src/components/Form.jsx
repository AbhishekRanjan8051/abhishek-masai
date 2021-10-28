import React from "react";

function Form() {
  const elemRef = React.useRef(null);

  React.useEffect(() => {
    elemRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={elemRef} />
    </div>
  );
}
export { Form };
