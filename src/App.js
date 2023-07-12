import React from "react";
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.myComponent}>
      <h1>Welcome to My App</h1>

      <button className={`${styles.myButton} ${styles.primary}`}>
        Primary Button
      </button>
      <button className={`${styles.myButton} ${styles.secondary}`}>
        Secondary Button
      </button>
    </div>
  );
};

export default App;
