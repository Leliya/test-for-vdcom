import { NavLink } from "react-router-dom";
import "./menuItem.css";

export function MenuItem({ title, path }) {
  return (
    <NavLink
      className={({ isActive, isPending }) =>
        isPending ? "menuItem" : isActive ? "menuItem menuItem_active" : "menuItem"
      }
      to={path}
    >
      <div className={`menuItem__icon menuItem__icon_${path}`}></div>
      {title}
    </NavLink>
  );
}
