import React from "react";
import { Button } from "../core-ui/components/Button/Button";
import { Container } from "../core-ui/components/Container/Container";
import styles from "./BR.modules.scss";

export const BananaRepublic = () => {
  return (
    <div className={styles.bananarepublic}>
      <Container>
        <div>Banana Republic</div>

        <div className={styles.flexWrapper}>
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
        </div>
      </Container>
    </div>
  );
};
