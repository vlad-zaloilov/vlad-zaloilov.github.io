import { createElement } from "react";
import { extend, createRoot, events } from "react-dom/client";


import "./styling.css";

import FrontPage from "./sections/FrontPage";
import Header from "./components/Header";
import { BackgroundShaderViewport } from "./components/BackgroundShaderViewport";

function website() {
  const root = createRoot(document.getElementById("root"));
  
  root.render(
    <div>
      <Header/>
      <BackgroundShaderViewport/>
      <FrontPage/>
      <div className="footer-row spaced-container">
        <p>some text</p>
        <p>some more text</p>
        <p>yet more text</p>
        <p>even more</p>
      </div>
    </div>
  )
}

website();