"use client"

import { Button } from "../components/Button";
import { GridViewport } from "../components/GridViewport";
import { ThreeDProject } from "../components/3DProject";
import { extend } from "@react-three/fiber";
extend({ Button });

export default function ThreeDProjects() {
  return (
    <div>
      <div>
        <h1 className = "title justify-self-center">3D Projects</h1>
      </div>
      <div className = "hollow-row display-flex-col">
        <h1 className = "align-self-center">Welcome to my page!</h1>
        <h2 className = "align-self-center">Note: under construction</h2>
        <h1 className = "align-self-center">Check back later for more!</h1>
        <h1 className = "align-self-center">Last updated: January 26th</h1>
      </div>
      <div>
        <ThreeDProject/>
      </div>
      <div className="grid-viewport-container">
        <GridViewport/>
      </div>
    </div>
  );
}