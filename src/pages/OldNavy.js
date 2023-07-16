import React from "react";
import { Button } from "../components/Button/Button";
import styles from "./oldnavy.modules.scss";

export const OldNavy = () => {
  return (
    <div className={styles.oldnavy}>
      <div>Old Navy</div>
      <Button text="Primary Button" type="primary" />
      <Button text="Secondary  Button" type="secondary" />
    </div>
  );
};
