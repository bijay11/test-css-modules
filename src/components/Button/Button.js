import React from "react";
import styles from "./Button.module.scss";

export const Button = ({ text, btnType, customGlobalCSS }) => {
  const custBtnType = styles[btnType] || "";
  const custGlobalCss = customGlobalCSS ? ` ${customGlobalCSS}` : "";

  return (
    <button className={`${styles.myButton} ${custBtnType}${custGlobalCss}`}>
      {text}
    </button>
  );
};
