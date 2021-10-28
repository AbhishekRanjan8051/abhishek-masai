import React from "react";

function Form() {
  const [formdata, setForm] = React.useState({
    username: "",
    age: "",
    isMarried: false,
    country: "India",
  });
  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(formdata);
  };
  const handleChange = (e) => {
    const files = fileRef.current.files[0];
    console.log(files);

    const { name, value, type, checked } = e.target;
    // console.log(name, value);
    setForm({ ...formdata, [name]: type === "checkbox" ? checked : value });
  };

  const fileRef = React.useRef(null);
  return (
    <div>
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Enter Name"
          name="username"
        />
        <br />
        <input
          type="number"
          onChange={handleChange}
          placeholder="Enter Age"
          name="age"
        />
        <br />
        isMarried:
        <input type="checkbox" onChange={handleChange} name="isMarried" />
        <br />
        <select name="country" onChange={handleChange}>
          <option value="India">India</option>
          <option value="Japan">Japan</option>
          <option value="Norway">Norway</option>
        </select>
        <br />
        <input type="file" onChange={handleChange} ref={fileRef} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export { Form };
