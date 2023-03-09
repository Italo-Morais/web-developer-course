import { Container } from "./styled";
import { useState } from "react";

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUpForm = (form) => {
    event.preventDefault();
    console.log(handleSignUpForm);
  };

  return (
    <Container>
      <div className="container">
        <h1>Register</h1>
        <form
          className="form"
          action="Register"
          id="register"
          onSubmit={handleSignUpForm}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </Container>
  );
}
