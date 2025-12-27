import { Button, ButtonGrid } from "../components/Button";
import { Header } from "../components/Header";
import { Viewport } from "../components/Viewport";

import { extend, Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
extend({ Button });

import React from "react";

import "../styling.css";

export default function FrontPage() {
  return (
    <div className="clean" >
      <Header/>
      <div className = "section-row">
        <h1>Welcome to my page!</h1>
        <h2>Note: under construction</h2>
      </div>
      <Button/>
      <div className = "section-row">
        <h1 className = "title">Hi! I'm Vlad Zaloilov.</h1>
      </div>
      <div className = "content-row">
        <div className="section-inner-row">
          <h1 className="section-text">Stanford Bunny, loaded via an OBJ file parser I made, and passed to a 3JS Buffer Attribute.</h1>
          <h1 className="section-text">Note: Vertex normals are not implemented yet, hence the "flat" shading.</h1>
          <h1 className="section-text">OBJ file for model can be found on the Stanford website.</h1>
          <h1 className="section-text">Try rotating the bunny!</h1>
        </div>
          <div className ="viewport-background">
            <Viewport/>
          </div>
      </div>
    </div>
  );
}