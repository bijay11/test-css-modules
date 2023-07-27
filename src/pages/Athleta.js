import React from "react";
import { Button } from "../core-ui/components/Button/Button";
import styles from "./Athleta.modules.scss";
import { Container } from "../core-ui/components/Container/Container";

export const Athleta = () => {
  return (
    <div className={styles.athleta}>
      <Container>
        <div>Athleta</div>

        <div className={styles.flexWrapper}>
          <Button
            text="Primary Button"
            custBtnProperties={styles.customBtnPrimary}
          />
          <Button
            text="Secondary Button"
            custBtnProperties={styles.customBtnSecondary}
          />
        </div>
      </Container>
    </div>
  );
};
