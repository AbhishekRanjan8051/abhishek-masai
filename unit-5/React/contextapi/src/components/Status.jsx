import React from "react";

import { AppContext } from "./Context/AppContextProvider";

const Status = () => {
  return (
    <div>
      status
      <AppContext.Consumer>
        {(value) => {
          return <div>{value.token}</div>;
        }}
      </AppContext.Consumer>
    </div>
  );
};
export { Status };
