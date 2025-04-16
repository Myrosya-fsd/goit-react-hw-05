import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";
const Navigation = () => {
  const setActiveClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <header className={s.header}>
      <h2 className={s.visuallyHidden}>Home page</h2>
      <nav className={s.navigete}>
        <div className={s.nav}>
          <NavLink className={setActiveClass} to="/">
            Home
          </NavLink>
        </div>
        <div className={s.nav}>
          <NavLink
            className={({ isActive }) => clsx(s.link, isActive && s.active)}
            to="/movies"
          >
            Movies
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
