import React from "react";
import { Button } from "../components/Button/Button";
import styles from "./Athleta.modules.scss";
import { Container } from "../components/Container";

export const Athleta = () => {
  return (
    <div className={styles.athleta}>
      <Container>
        <div>Athleta</div>
        <Button text="Primary Button" btnType="primary" />
        <Button text="Secondary Button" btnType="secondary" />
      </Container>
    </div>
  );
};
