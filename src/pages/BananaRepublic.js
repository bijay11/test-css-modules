import React from "react";
import { Button } from "../components/Button/Button";
import { Container } from "../components/Container";
import styles from "./BR.modules.scss";

export const BananaRepublic = () => {
  return (
    <div className={styles.bananarepublic}>
      <Container>
        <div>Banana Republic</div>
        <Button text="Primary Button" type="primary" />
        <Button text="Secondary  Button" type="secondary" />
      </Container>
    </div>
  );
};
