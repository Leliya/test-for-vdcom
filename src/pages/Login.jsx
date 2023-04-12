import { useState } from "react";
import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";

export function Login() {
  const [dataLogin, onChangeDataLogin] = useState({ login: "", password: "" });
  function onChange(nameInput, value) {
    onChangeDataLogin({ ...dataLogin, [nameInput]: value });
  }

  function onSubmit() {
    return;
  }

  return (
    <main className="page">
      <div className="page__box">
        <div className="page__logo"></div>
        <h1 className="page__title">
          Welcome To CRM System Sign In To Your Account
        </h1>
        <form className="page__form" onSubmit={onSubmit}>
          <fieldset className="page__fields">
            <Input
              type="text"
              name="login"
              autoFocus
              required
              label="Login"
              onChange={onChange}
              value={dataLogin.login}
            />
            <Input
              type="password"
              name="password"
              autoFocus={false}
              required
              label="Password"
              onChange={onChange}
              value={dataLogin.password}
            />
          </fieldset>
          <Button
            type="submit"
            classButton="form"
            buttonName="SIGN IN"
            disabled={false}
          />
        </form>
      </div>
    </main>
  );
}
