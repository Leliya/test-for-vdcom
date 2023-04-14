import { Outlet } from "react-router-dom";
//import { Content } from "../../components/Content/Content";
import { MenuBar } from "../../components/MenuBar/MenuBar";

export function Account() {
  return (
    <>
      <MenuBar />
      <Outlet />
    </>
  );
}
