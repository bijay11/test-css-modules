import React from "react";
import { Button } from "../components/Button/Button";
import styles from "./GP.modules.scss";
import { Container } from "../components/Container";

export const Gap = () => {
  // simulatiing featureFlag
  const isFeatureEnabled = true;
  const displayTestCss = isFeatureEnabled ? ` ${styles.testFeatureFlag}` : "";

  return (
    <div className={styles.gap}>
      <Container>
        <div>Gap</div>
        <Button
          text="Primary Button"
          custGlobalCSS="margin-1"
          custBtnProperties={`${styles.customBtnPrimary}${displayTestCss}`}
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
