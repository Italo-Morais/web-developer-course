import { Container } from "./style";
import { useState } from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import axios from "axios";

export function FormRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const API = "http://localhost:3000/students";

  function onSubmit(data) {
    console.log(data);

    axios
      .post(API, data)
      .then((res) => {
        alert(res.data);
        reset();
        setName("");
        setPhone("");
        setEmail("");
        setCity("");
      })
      .catch((err) => alert(err.response.data));
  }


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
            <InputMask
              mask={"(99) 99999-9999"}
              id="phone"
              type="tel"
              {...register("phone", { required: true })}
              name="phone"
              placeholder="(00) 00000-0000"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              // required
            />
            {errors.phone && <span className="error">Campo obrigatório!</span>}
          </section>
          <section>
            <label htmlFor="city">Cidade: </label>
            <input
              type="city"
              id="city"
              {...register("city", { required: true })}
              name="city"
              placeholder="City"
              value={city}
              onChange={(event) => setCity(event.target.value)}
              // required
            />
            {errors.city && <span className="error">Campo obrigatório!</span>}
          </section>
          <button type="submit">Cadastrar</button>
        </form>
      </Container>
    </div>
  );
}
