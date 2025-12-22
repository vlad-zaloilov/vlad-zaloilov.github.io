import { createElement } from "react"
import { createRoot } from "react-dom/client"
import "./styling.css"

import FrontPage from "./sections/FrontPage"

const root = createRoot(document.getElementById("root"))

root.render(
  <FrontPage />
)