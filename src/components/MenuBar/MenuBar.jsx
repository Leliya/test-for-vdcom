import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";
import { MenuItem } from "./../MenuItem/MenuItem";
import "./menuBar.css";

export function MenuBar() {
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
        >
          <div className="menuBar__iconLogout"></div>
        </Button>
      </div>
    </div>
  );
}
