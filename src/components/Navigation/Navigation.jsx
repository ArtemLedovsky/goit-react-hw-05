import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
const Navigation = () => {
  return (
    <div className={s.wrapper}>
      <nav className={s.navList}>
        <NavLink to="/" className={s.navLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={s.navLink}>
          Movies
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
