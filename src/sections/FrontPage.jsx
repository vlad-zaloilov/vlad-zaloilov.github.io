import { Button, ButtonGrid } from "../components/Button";
import { ContentViewport, BackgroundViewport } from "../components/Viewport";
import { extend, Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
extend({ Button });

import { BackgroundShaderViewport } from "../components/BackgroundShaderViewport";

import React from "react";

import "../styling.css";

export default function FrontPage() {
  return (
    <div>
      <div className="background-viewport">
        <BackgroundShaderViewport/>
      </div>
      <div style={{padding: "3%"}}>
        <h1 className = "title justify-self-center">Hi! I'm Vlad Zaloilov.</h1>
      </div>
      <div className = "content-row display-flex-col">
        <h1 className = "align-self-center">Welcome to my page!</h1>
        <h2 className = "align-self-center">Note: under construction</h2>
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
    </div>
  );
}