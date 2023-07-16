import React from "react";
import { Button } from "../components/Button/Button";
import styles from "./gap.modules.scss";

export const Gap = () => {
  return (
    <div className={styles.gap}>
      <div>Gap</div>
      <Button text="Primary Button" type="primary" />
      <Button text="Secondary  Button" type="secondary" />
    </div>
  );
};
