import { Container } from "./style";
import { useState } from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";

export function FormRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  function onSubmit(data) {
    console.log(data);
    console.log(data);
    alert("Cadastro realizado com sucesso");
    reset();
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
              type="email"
              id="email"
              {...register("email", { required: true })}
              name="email"
              placeholder="Email"
              // required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {errors.email && <span className="error">Campo obrigatório!</span>}
          </section>
          <section>
            <label htmlFor="phone">Telefone: </label>
            <InputMask mask={'(99) 99999-9999'} id="phone"
              type="tel"
              {...register("tel", { required: true })}
              name="tel"
              placeholder="(00) 00000-0000"
              // required
              
            />
            {errors.tel && <span className="error">Campo obrigatório!</span>}
          </section>
          <section>
            <label htmlFor="city">Cidade: </label>
            <input
              type="city"
              id="city"
              {...register("city", { required: true })}
              name="city"
              placeholder="City"
              // required
            
            />
            {errors.city && <span className="error">Campo obrigatório!</span>}
          </section>
          <section>
            <label htmlFor="password">Senha: </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
              name="password"
              placeholder="Password"
              maxLength={"10"}
              // required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {errors.password && (
              <span className="error">Campo obrigatório!</span>
            )}
          </section>
          <section>
            <label htmlFor="confirmPassword">Confirm: </label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", { required: true })}
              name="confirmPassword"
              placeholder="Confirm Password"
              maxLength={'10'}
              // required
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </section>

          {errors.confirmPassword && (
            <span className="error">Campo obrigatório!</span>
          )}
          <button type="submit">Cadastrar</button>
        </form>
      </Container>
    </div>
  );
}
