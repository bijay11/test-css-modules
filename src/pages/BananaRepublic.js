import React from "react";
import { Button } from "../components/Button/Button";
import { Container } from "../components/Container";
import styles from "./BR.modules.scss";

export const BananaRepublic = () => {
  return (
    <div className={styles.bananarepublic}>
      <Container>
        <div>Banana Republic</div>
        <Button
          text="Primary Button"
          custGlobalCSS="margin-1"
          custBtnProperties={styles.customBtnPrimary}
        />
        <Button
          text="Secondary Button"
          custGlobalCSS="margin-1"
          custBtnProperties={styles.customBtnSecondary}
        />
      </Container>
    </div>
  );
};
