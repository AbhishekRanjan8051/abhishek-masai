// import React from "react";

// import { AppContext } from "./Context/AppContextProvider";

// const Status = () => {
//   return (
//     <div>
//       status
//       <AppContext.Consumer>
//         {(value) => {
//           return <div>token is: {value.token}</div>;
//         }}
//       </AppContext.Consumer>
//     </div>
//   );
// };
// export { Status };

// using hooks

import React from "react";

import { AppContext } from "./Context/AppContextProvider";

const Status = () => {
  const { isAuth, token } = React.useContext(AppContext);
  return (
    <div>
      status
      <div>{isAuth ? `token is ${token}` : "user has not logged in"}</div>
    </div>
  );
};
export { Status };
