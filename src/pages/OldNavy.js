import React from "react";
import { Button } from "../components/Button/Button";
import styles from "./oldnavy.modules.scss";
import { Container } from "../components/Container";

export const OldNavy = () => {
  return (
    <div className={styles.oldnavy}>
      <Container>
        <div>Old Navy</div>
        <Button text="Primary Button" type="primary" />
        <Button text="Secondary  Button" type="secondary" />
      </Container>
    </div>
  );
};
