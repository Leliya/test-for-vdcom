import { Outlet, useNavigate } from "react-router-dom";
import { MenuBar } from "../../components/MenuBar/MenuBar";
import { Header } from "../../components/Header/Header";
import "./account.css";
import { useEffect } from "react";

export function Account({ onChange }) {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("contacts", { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="account">
      <MenuBar />
      <Header onChange={onChange} />
      <Outlet />
    </div>
  );
}
