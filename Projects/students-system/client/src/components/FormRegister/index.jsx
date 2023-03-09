import { Container } from "./style";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function FormRegister() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  function onSubmit(data) {
    console.log(data);
  }
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div>
      <Container>
        <form
          className="form"
          action="Register"
          id="register"
          onSubmit={handleSubmit(onSubmit)}
        >
          <section>
            <label htmlFor="name">Nome: </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              name="name"
              placeholder="Name"
              // required
              value={name}
              onChange={(event) => setName(event.target.value)}
              />
              {errors.name && <span className="error">Campo obrigatório!</span>}
          </section>

          <section>
            <label htmlFor="email">Email: </label>
            <input
              type="email" id="email" {...register("email", { required: true })}
              name="email"
              placeholder="Email"
              // required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              />
              {errors.email && <span className="error">Campo obrigatório!</span>}
          </section>
          <section>
            <label htmlFor="password">Senha: </label>
            <input
              type="password" id="password" {...register("password", { required: true })}
              name="password"
              placeholder="Password"
              // required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              />
              {errors.password && <span className="error">Campo obrigatório!</span>}
          </section>
          <section>
            <label htmlFor="confirmPassword">Confirm: </label>
              <input
                type="password" id="confirmPassword" {...register("confirmPassword", { required: true })}
                name="confirmPassword"
                placeholder="Confirm Password"
                // required
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
          </section>
          
          {errors.confirmPassword && <span className="error">Campo obrigatório!</span>}
          <button type="submit">Cadastrar</button>
        </form>
      </Container>
    </div>
  );
}
