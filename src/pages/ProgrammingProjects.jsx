"use client"

import { Button } from "../components/Button";
import { GridViewport } from "../components/GridViewport";
import { extend } from "@react-three/fiber";
extend({ Button });

export default function ProgrammingProjects() {
  return (
    <div>
      <div>
        <h1 className = "title justify-self-center">Programming Projects</h1>
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