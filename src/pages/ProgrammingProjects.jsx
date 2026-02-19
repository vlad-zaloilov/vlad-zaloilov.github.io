"use client"

import { Button } from "../components/Button";
import { GridViewport } from "../components/GridViewport";
import { RenderingEngineProject } from "../components/ProgrammingProjectsComponents";
import { extend } from "@react-three/fiber";

extend({ Button });

export default function ProgrammingProjects() {
  return (
    <div>
      <div>
        <h1 className = "title justify-self-center">Programming Projects</h1>
      </div>
      <div className = "hollow-row display-flex-col">
        <h1 className = "align-self-center">Page content last updated: February 19th</h1>
      </div>
      <div>
        <RenderingEngineProject/>
      </div>
    </div>
  );
}