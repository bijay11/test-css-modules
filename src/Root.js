import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import "./Root.scss";

export const Root = () => {
  //
  // this is jsut a demo
  // if FF is on, inject these variables from server-side
  //
  const featureFlag = true;
  useEffect(() => {
    if (featureFlag) {
      const brFFColor = getComputedStyle(document.documentElement)
        .getPropertyValue("--slight-orange-color")
        .trim();

      //
      // we could just inject color code instead of `brFFColor`, adding it just incase we want to utitlize the predefined colors.
      //
      document.documentElement.style.setProperty("--ff-br-bg-color", brFFColor);
    }
    // --ff-br-bg-color: var(--slight-orange-color);
    //  var(--slight-orange-color);
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
