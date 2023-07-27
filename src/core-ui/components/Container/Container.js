import React from "react";
import styles from "./Container.modules.scss";

export const Container = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
