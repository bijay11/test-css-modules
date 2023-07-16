import React from "react";
import { Button } from "../components/Button/Button";
import styles from "./gap.modules.scss";
import { Container } from "../components/Container";

export const Gap = () => {
  return (
    <div className={styles.gap}>
      <Container>
        <div>Gap</div>
        <Button text="Primary Button" type="primary" />
        <Button text="Secondary  Button" type="secondary" />
      </Container>
    </div>
  );
};
