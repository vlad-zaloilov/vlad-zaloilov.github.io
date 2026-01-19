import { Button, ButtonGrid } from "../components/Button";
import { GridViewport } from "../components/GridViewport";
import { extend, Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
extend({ Button });

import React from "react";

import "../styling.css";

export default function ThreeDProjects() {
  return (
    <div>
      <div style={{padding: "3%"}}>
        <h1 className = "title justify-self-center">3D Projects</h1>
      </div>
      <div className = "hollow-row display-flex-col">
        <h1 className = "align-self-center">Welcome to my page!</h1>
        <h2 className = "align-self-center">Note: under construction</h2>
        <h1 className = "align-self-center">Check back later for more!</h1>
      </div>
      <div className="grid-viewport-container">
        <GridViewport/>
      </div>
    </div>
  );
}