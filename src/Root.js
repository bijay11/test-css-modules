import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import styles from "./Root.modules.scss";

export const Root = () => {
  return (
    <div style={styles.app}>
      <Navbar />
      <Outlet />
    </div>
  );
};
