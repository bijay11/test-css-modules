import React from "react";
import { Button } from "../components/Button/Button";
import styles from "./Athleta.modules.scss";
import { Container } from "../components/Container";

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
            custGlobalCSS="margin-1"
            custBtnProperties={styles.customBtnSecondary}
          />
        </div>
      </Container>
    </div>
  );
};
