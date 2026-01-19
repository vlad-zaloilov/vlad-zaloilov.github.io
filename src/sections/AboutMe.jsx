import { Button, ButtonGrid } from "../components/Button";
import { ContentViewport } from "../components/ContentViewport";
import { GridViewport } from "../components/GridViewport";
import { extend, Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
extend({ Button });

import { BackgroundShaderViewport } from "../components/BackgroundShaderViewport";

import React from "react";

import "../styling.css";

export default function AboutMe() {
  return (
    <div>
      <div style={{padding: "3%"}}>
        <h1 className = "title justify-self-center">Hi! I'm Vlad Zaloilov.</h1>
      </div>
      <BackgroundShaderViewport/>
      <div className="subtitle-row">
        <p className="subtitle">I'm Vlad Zaloilov, a second-year computer science student at Simon Fraser University,
        with a strong interest in graphics programming, 3D modelling, and mathematics. I enjoy working on problems that sit at the intersection of theory and implementation, with a focus on turning mathematical ideas into efficient, visual systems.
        </p>
        <p className="subtitle">This website showcases a few of my projects which reflect some of these technical interests.</p>
        <div className="break">
          <p className="subtitle">You can find more of my work at my github:</p>
          <a href ="https://github.com/DuhDiamond" className="link">https://github.com/DuhDiamond</a>
        </div>
      </div>
      <div className="spaced-container"
           style={{fontSize: "1rem"}}>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
      </div>
      <div className = "content-row display-flex-row">
        <div className="content-text">
          <p>Stanford Bunny, loaded via an OBJ file parser I made, and passed to a 3JS Buffer Attribute.</p>
          <p>Note: Vertex normals are not implemented yet, hence the "flat" shading.</p>
          <p>OBJ file for model can be found on the Stanford website.</p>
          <p>Try rotating the bunny!</p>
        </div>
        <div className ="content-viewport-wrapper align-self-center">
          <ContentViewport/>
        </div>
      </div>
      <div className="grid-viewport-container">
        <GridViewport/>
      </div>
    </div>
  );
}