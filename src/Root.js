import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import "./Root.scss";

export const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
