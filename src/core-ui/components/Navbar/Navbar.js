import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        <li className={styles.navbar__item}>
          <NavLink to="/" className={styles.navbar__link}>
            Gap
          </NavLink>
        </li>
        <li className={styles.navbar__item}>
          <NavLink to="/oldnavy" className={styles.navbar__link}>
            Old Navy
          </NavLink>
        </li>
        <li className={styles.navbar__item}>
          <NavLink to="/bananarepublic" className={styles.navbar__link}>
            Banana Republic
          </NavLink>
        </li>
        <li className={styles.navbar__item}>
          <NavLink to="/atletha" className={styles.navbar__link}>
            Atletha
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
