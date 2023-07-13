import React from "react";
import styles from "./Button.module.scss";

export const Button = ({ text, type }) => {
  return (
    <button className={`${styles.myButton} ${styles[type]}`}>{text}</button>
  );
};
