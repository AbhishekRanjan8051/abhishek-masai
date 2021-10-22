import React from "react";

const initstate = {
  name: "",
  email: "",
  password: "",
};

function Form() {
  const [state, setState] = React.useState(initstate);

  const { name, email, password } = state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state, "data is");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={handleChange}
        ></input>
        <br />
        <input
          type="text"
          placeholder="email"
          name="email"
          value={email}
          onChange={handleChange}
        ></input>
        <br />
        <input
          type="text"
          placeholder="password"
          name="password"
          value={password}
          onChange={handleChange}
        ></input>
        <br />
        <input type="submit" value="SUMBIT DATA" />
      </form>
    </div>
  );
}
export { Form };
