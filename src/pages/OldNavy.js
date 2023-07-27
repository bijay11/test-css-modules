import React from "react";
import { Button } from "../core-ui/components/Button/Button";
import { Container } from "../components/Container";
import styles from "./ON.modules.scss";

export const OldNavy = () => {
  return (
    <div className={styles.oldnavy}>
      <Container>
        <div>Old Navy</div>

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
