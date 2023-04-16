import "./header.css";
import avatar from "../../images/avatar-plug.jpg";

export function Header({onChange}) {
  

  return (
    <header className="header">
      <form className="search">
        <input
          type="search"
          className="search__input"
          placeholder="Search by Name..."
          onChange={onChange}
        />
      </form>
      <div className="profile">
        <img
          src={avatar}
          alt="Аватар пользователя"
          className="profile__avatar"
        />
        <h4 className="profile__name">Mr. Director</h4>
        <span className="profile__role">Managing Director</span>
      </div>
    </header>
  );
}
