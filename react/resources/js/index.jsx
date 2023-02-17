import { createRoot } from "react-dom/client";
import React          from "react";
import AppWrapper     from "./AppWrapper";

import "@shopify/polaris/build/esm/styles.css";

const root = document.createElement("div");

document.body.appendChild(root);

createRoot(root).render(<AppWrapper />);
