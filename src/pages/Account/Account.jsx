import { Outlet } from "react-router-dom";
import { MenuBar } from "../../components/MenuBar/MenuBar";
import { Header } from "../../components/Header/Header";
import "./account.css";

export function Account() {
  return (
    <div className="account">
      <MenuBar />
      <Header />
      <Outlet />
    </div>
  );
}
