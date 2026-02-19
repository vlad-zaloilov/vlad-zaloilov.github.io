"use client"

import { Button } from "../components/Button";
import { GridViewport } from "../components/GridViewport";
import { RobotBugProject } from "../components/3DProjectsComponents";
import { extend } from "@react-three/fiber";

extend({ Button });

export default function ThreeDProjects() {
  return (
    <div>
      <div>
        <h1 className = "title justify-self-center">3D Projects</h1>
      </div>
      <div className = "hollow-row display-flex-col">
        <h1 className = "align-self-center">Page content last updated: January 26th</h1>
      </div>
      <div>
        <RobotBugProject/>
      </div>
    </div>
  );
}