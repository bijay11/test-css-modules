import React from "react";
import { Button } from "../components/Button/Button";
import styles from "./BRcolors.modules.scss";

export const BananaRepublic = () => {
  return (
    <div className={styles.bananarepublic}>
      <div>Banana Republic</div>
      <Button text="Primary Button" type="primary" />
      <Button text="Secondary  Button" type="secondary" />
    </div>
  );
};
