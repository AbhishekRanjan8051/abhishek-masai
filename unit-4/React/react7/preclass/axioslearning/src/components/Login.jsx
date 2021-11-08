import React from "react";
import { loginUser } from "./loginUser";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [token, setToken] = React.useState("");
  const [isAuth, setisAuth] = React.useState(false);

  const [IsLoading, setIsLoading] = React.useState(false);

  const [IsError, setIsError] = React.useState(false);

  const handleSumbit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    console.log("hello world");
    loginUser({ email, password })
      .then((res) => {
        setisAuth(true);
        setToken(res.data.token);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  if (isAuth) {
    return (
      <div>
        <img
          src="https://pngimg.com/uploads/welcome/welcome_PNG78.png"
          alt="Welcome"
        />
        <h1>Welcome to requres api loginUser</h1>
        <h3>token:{token}</h3>
      </div>
    );
  }
  return (
    <div>
      <form onSubmit={handleSumbit}>
        {IsError && "something went wrong"}
        <div>
          <label>
            Email
            <input
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
export { Login };
