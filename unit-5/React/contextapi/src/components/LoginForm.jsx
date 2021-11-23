import React from "react";
import { Form } from "./Form";

function LoginForm() {
  const onSubmit = (e) => {
    e.preventDefault();
    alert("trying to submit");
  };
  return (
    <div>
      <Form onSubmit={onSubmit} title="Abhishek">
        <input placeholder="name" />
      </Form>
    </div>
  );
}
export { LoginForm };
