import React from "react";
import { Button } from "../components/Button/Button";
import styles from "./Athleta.modules.scss";

export const Athleta = () => {
  return (
    <div className={styles.athleta}>
      <div>Athleta</div>
      <Button text="Primary Button" type="primary" />
      <Button text="Secondary  Button" type="secondary" />
    </div>
  );
};
