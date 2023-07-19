import React from "react";
import styles from "./Button.module.scss";

export const Button = ({ text, custGlobalCSS, custBtnProperties }) => {
  const custGlobalCss = custGlobalCSS ? ` ${custGlobalCSS}` : "";
  const extraBtnProperties = custBtnProperties ? ` ${custBtnProperties}` : "";

  // ${styles.myButton} - default style
  // custGlobalCss - util classes (could be optional and added as part of custBtnProperties)
  // extraBtnProperties - extra css properties that cannot leverage global util and the consumer has to send the desired ones.

  return (
    <button
      className={`${styles.myButton}${custGlobalCss}${extraBtnProperties}`}
    >
      {text}
    </button>
  );
};
