import React from "react";

function UserefImage() {
  const ref = React.useRef();
  React.useEffect(() => {}, []);

  const onSumbit = () => {
    console.log(ref.current.files[0]);
  };
  return (
    <div>
      <h1>Image</h1>
      <input type="file" ref={ref} />
      <br/>
      <button onClick={onSumbit}>SUMBIT</button>
    </div>
  );
}

export { UserefImage };
