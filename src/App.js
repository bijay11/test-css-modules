import React from "react";
import styles from "./App.module.scss";
import { Button } from "./components/Button/Button";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <div className={styles.myComponent}>
      <h1>Welcome to My App</h1>

      <Button text="Primary Button" type="primary" />
      <Button text="Secondary  Button" type="secondary" />
    </div>
  );
};

export default App;
