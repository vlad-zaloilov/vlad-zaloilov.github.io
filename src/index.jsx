import { createElement } from "react"
import { extend, createRoot, events } from "react-dom/client"
import "./styling.css"

import FrontPage from "./sections/FrontPage"

function website() {
  const root = createRoot(document.getElementById("root"))
  
  root.render(
    <FrontPage />
  )
}

website();