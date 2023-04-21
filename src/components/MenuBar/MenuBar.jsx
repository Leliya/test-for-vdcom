import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";
import { MenuItem } from "./../MenuItem/MenuItem";
import "./menuBar.css";

export function MenuBar() {
  const navigate = useNavigate();

  function logout() {
    // возврат на страницу авторизации
    // соответственно тоже будет происходить поле получения ответа о корректном
    // логауте со стороны сервера:
    //  logout().then(()=>
    //  navigate('/'))
    //  .catch(err=>console.log(err))
    navigate("/");
  }

  return (
    <div className="menuBar">
      <Logo classLogo="account" />
      <nav className="menuBar__menu">
        <MenuItem title="Total Contacts" path="contacts" />
        <MenuItem title="Calendar" path="calendar" />
        <MenuItem title="Project Report" path="report" />
      </nav>
      <div className="menuBar__logout">
        <Button
          type="submit"
          classButton="logout"
          buttonName="Log out"
          disabled={false}
          onClick={logout}
        >
          <div className="menuBar__iconLogout"></div>
        </Button>
      </div>
    </div>
  );
}
