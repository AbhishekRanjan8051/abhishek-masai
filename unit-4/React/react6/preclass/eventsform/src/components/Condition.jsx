import React from "react";

function Condition() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setError] = React.useState(false);
  const [show, setShow] = React.useState(true);

  const fetchData = () => {
    setIsLoading(true);
    setError(false);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const fetchDataError = () => {
    setIsLoading(true);
    setError(false);
    setTimeout(() => {
      setIsLoading(false);
      setError(true);
    }, 2000);
  };

  //tenery opertators
  // condition?true:false
  return isLoading ? (
    <div>
      <h1>...loading...</h1>
    </div>
  ) : isError ? (
    <div>
      <h1>something went wrong</h1>
      <button onClick={fetchData}>dio you want fetch data again?</button>
    </div>
  ) : (
    <div>
      <h1>condition</h1>
      <h2>welcome</h2>
      <button onClick={fetchData}>Fetch Data</button>
      <button onClick={fetchDataError}>Error</button>
      <br />
      <br />
      <button onClick={() => setShow((prev) => !prev)}>Show date</button>
      <br />
      {/* JSX operator */}
      {show && new Date().toLocaleString()}
      
      {/* teneray operator
      {show ? new Date().toLocaleString() : "data not avaliable"} */}
    </div>
  );
}
export { Condition };
