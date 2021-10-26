import React from "react";

const initialState = {
  name: "",
  isMarried: "",

  gender: "",
  email: "",
};

function FormTag() {
  const [formData, setFormData] = React.useState(initialState);
  const fileRef = React.useRef();

  const handleChange = (e) => {
    let { name, value, checked, type } = e.target;
    value = type === "checkbox" ? checked : value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(fileRef.current.files[0]);
  };

  const { name, isMarried, gender, email } = formData;
  return (
    <div>
      <h1>Form : User Detail</h1>
      <form onSubmit={onSubmit}>
        <label>
          Name
          <input onChange={handleChange} type="text" name="name" value={name} />
        </label>
        <br />
        <label>
          Email
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={email}
          />
        </label>
        <br />
        <label>
          Married
          <input
            onChange={handleChange}
            type="checkbox"
            name="isMarried"
            checked={isMarried}
          />
        </label>
        <br />
        <label>
          Gender
          <select onChange={handleChange} name="gender" value={gender}>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="D">do not want to disclose</option>
          </select>
        </label>
        <br />
        <br />
        <input type="file" ref={fileRef}></input>
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
export { FormTag };
