import { createElement } from "react";
import { extend, createRoot, events } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./styling.css";

import AboutMe from "./sections/AboutMe";
import ProgrammingProjects from "./sections/ProgrammingProjects";
import ThreeDProjects from "./sections/3DProjects";
import ContactInformation from "./sections/ContactInformation";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { BackgroundShaderViewport } from "./components/BackgroundShaderViewport";

function website() {
  const root = createRoot(document.getElementById("root"));
  
  root.render(
    <BrowserRouter>
      <Routes>

        <Route index element ={
          <div>
            <Header/>
            <AboutMe/>
            <Footer/>
          </div>
        } />

        <Route path="/ProgrammingProjects" element={
          <div>
            <Header/>
            <ProgrammingProjects/>
            <Footer/>
          </div>
        } />

        <Route path="/3DProjects" element={
          <div>
            <Header/>
            <ThreeDProjects/>
            <Footer/>
          </div>
        } />

        <Route path="/ContactInformation" element={
          <div>
            <Header/>
            <ContactInformation/>
            <Footer/>
          </div>
        } />

      </Routes>
    </BrowserRouter>
  )
}

website();