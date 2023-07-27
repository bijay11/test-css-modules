import React from "react";
import { Button } from "../core-ui/components/Button/Button";
import styles from "./GP.modules.scss";
import { Container } from "../components/Container";

export const Gap = () => {
  // simulatiing featureFlag
  const isFeatureEnabled = false;
  const displayTestCss = isFeatureEnabled ? ` ${styles.testFeatureFlag}` : "";

  return (
    <div className={styles.gap}>
      <Container>
        <div>Gap</div>
        <div className={styles.flexWrapper}>
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
        </div>
      </Container>
    </div>
  );
};
