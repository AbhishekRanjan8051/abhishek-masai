import React from "react";
const initialState = {
  name: "",
  email: "",
  age: "",
};
function Form() {
  // Simple way

  const [data, setData] = React.useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  // Hard way

  // const [name, setName] = React.useState("");
  // const [email, setEmail] = React.useState("");
  // const [age, setAge] = React.useState("");

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };
  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };
  // const handleAgeChange = (e) => {
  //   setAge(e.target.value);
  // };

  const handleClick = (e) => {
    console.log(data);
    console.log("done");
  };
  return (
    <div>
      <input name="name" onChange={handleChange}></input>
      <br />
      <input name="email" onChange={handleChange}></input>
      <br />
      <input name="age" onChange={handleChange}></input>
      <br />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
export { Form };
