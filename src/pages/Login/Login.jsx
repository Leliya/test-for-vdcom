import { useState } from "react";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../components/Logo/Logo";

export function Login() {
  const navigate = useNavigate();
  const [dataLogin, onChangeDataLogin] = useState({ login: "", password: "" });

  function onChange(nameInput, value) {
    onChangeDataLogin({ ...dataLogin, [nameInput]: value });
  }

  function sighIn(evt) {
    evt.preventDefault();
    console.log(dataLogin);
    //здесь должен быть промис для авторизации вида:
    //login(dataLogin).then(()=>
    //navigate('/lk'))
    //.catch(err=>console.log(err))
    navigate("/lk");
  }

  return (
    <main className="page">
      <div className="page__box">
        <Logo classLogo="login" />
        <h1 className="page__title">Welcome To CRM System</h1>
        <h2 className="page__subtitle">Sign In To Your Account</h2>
        <form className="page__form" onSubmit={sighIn}>
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
