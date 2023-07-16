import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Root } from "./Root";
import { Gap } from "./pages/Gap";
import { OldNavy } from "./pages/OldNavy";
import { Athleta } from "./pages/Athleta";
import { BananaRepublic } from "./pages/BananaRepublic";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Gap /> },
      {
        path: "gap",
        element: <Gap />,
      },
      {
        path: "oldnavy",
        element: <OldNavy />,
      },
      {
        path: "atletha",
        element: <Athleta />,
      },
      {
        path: "bananarepublic",
        element: <BananaRepublic />,
      },
    ],
  },
]);

export default router;
