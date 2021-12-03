import React from "react";
import { Form } from "./Form";
import { AppContext } from "./Context/AppContextProvider";

function LoginForm() {
  const { handleLogin } = React.useContext(AppContext);
  const { username, setUserName } = React.useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    // alert("trying to submit");
    handleLogin(username);
  };
  return (
    <div>
      <Form onSubmit={onSubmit} title="Abhishek">
        <input
          value={username}
          onChenge={(e) => setUserName(e.target.value)}
          placeholder="name"
        />
      </Form>
    </div>
  );
}
export { LoginForm };
