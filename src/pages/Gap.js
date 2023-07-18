import React from "react";
import { Button } from "../components/Button/Button";
import styles from "./gap.modules.scss";
import { Container } from "../components/Container";

export const Gap = () => {
  return (
    <div className={styles.gap}>
      <Container>
        <div>Gap</div>
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
