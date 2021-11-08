import axios from "axios";

function loginUser({ email, password }) {
  if (!email || !password) {
    return Promise.reject("Please enter email or password");
  }
  const config = {
    method: "post",
    data: {
      email,
      password,
    },
    url: "https://reqres.in/api/login",
  };
  return axios(config);
}
export { loginUser };
