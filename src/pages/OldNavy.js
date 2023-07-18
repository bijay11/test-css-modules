import React from "react";
import { Button } from "../components/Button/Button";
import { Container } from "../components/Container";
import styles from "./ON.modules.scss";

export const OldNavy = () => {
  return (
    <div className={styles.oldnavy}>
      <Container>
        <div>Old Navy</div>
        <Button
          text="Primary Button"
          btnType="primary"
          customGlobalCSS="margin-1"
        />
        <Button
          text="Secondary Button"
          btnType="secondary"
          customGlobalCSS="margin-1"
        />
      </Container>
    </div>
  );
};
